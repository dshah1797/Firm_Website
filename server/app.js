// The API itself (no listening, no static files), so the same code runs both as a
// normal Node server (server/index.js) and as Vercel serverless functions (api/*.js).
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import Contact from './models/Contact.js';
import { mailPassword } from './mail-settings.js';
import { enquiryEmail, render } from './email-templates.js';

const app = express();

// behind a proxy on most hosts (Vercel, Render, Railway...): needed for correct client IPs
app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim()) : true }));
app.use(express.json({ limit: '10kb' }));

// ---------- email notifications (optional: set SMTP_* in server/.env or in the host's dashboard) ----------
const smtpPass = mailPassword();
export const mailConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && smtpPass);
export const mailTo = process.env.MAIL_TO || 'netradynamics@gmail.com';
export const transporter = mailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: smtpPass },
    })
  : null;

// ---------- database ----------
// Connects on first use and reuses the connection afterwards. Serverless functions start cold,
// so we cannot rely on a connection made at start-up. Resolves true when the database is usable.
let connecting = null;
export function connectDb() {
  if (!process.env.MONGO_URI) return Promise.resolve(false);
  if (mongoose.connection.readyState === 1) return Promise.resolve(true);
  connecting ??= mongoose
    .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => true, (e) => (console.warn('MongoDB connection failed:', e.message), false))
    .finally(() => { connecting = null; });
  return connecting;
}

async function sendNotification({ name, email, service, message }) {
  // line breaks are never valid inside names or topics (they could be used to forge email headers)
  const oneLine = (s) => String(s).replace(/[\r\n]+/g, ' ').trim();
  const mail = render(enquiryEmail({ name: oneLine(name), email, service: oneLine(service), message }));
  await transporter.sendMail({
    from: `"Netra Dynamics website" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
    to: mailTo,
    replyTo: `"${oneLine(name).replace(/"/g, '')}" <${email}>`,
    ...mail,
  });
}

app.get('/api/health', async (_req, res) => res.json({ ok: true, db: await connectDb(), mail: mailConfigured }));

app.post(
  '/api/contact',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false }),
  async (req, res) => {
    const { name, email, service, message, website } = req.body || {};

    // honeypot: real visitors never see or fill this field, bots usually do
    if (website) return res.status(201).json({ ok: true });

    const clean = {
      name: String(name || '').trim().slice(0, 100),
      email: String(email || '').trim().toLowerCase().slice(0, 200),
      service: String(service || '').trim().slice(0, 80),
      message: String(message || '').trim().slice(0, 2000),
    };
    if (!clean.name || !clean.email || !clean.message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }
    if (!/^\S+@\S+\.\S+$/.test(clean.email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // save to the database and email the team; the enquiry counts as received if either works.
    // Both are awaited before replying: a serverless function may be frozen the moment we respond.
    const [saved, mailed] = await Promise.all([
      connectDb().then((ok) =>
        ok ? Contact.create(clean).then(() => true, (e) => (console.error('DB save failed:', e.message), false)) : false
      ),
      transporter
        ? sendNotification(clean).then(() => true, (e) => (console.error('Email failed:', e.message), false))
        : false,
    ]);

    if (!saved && !mailed) {
      return res.status(503).json({ error: 'We could not send your message right now. Please email or WhatsApp us instead.' });
    }
    res.status(201).json({ ok: true });
  }
);

export default app;
