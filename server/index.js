import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from './models/Contact.js';
import { mailPassword } from './mail-settings.js';
import { enquiryEmail, render } from './email-templates.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5001;

// behind a proxy on most hosts (Render, Railway, Vercel...): needed for correct client IPs
app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim()) : true }));
app.use(express.json({ limit: '10kb' }));

// ---------- email notifications (optional: set SMTP_* in server/.env) ----------
const smtpPass = mailPassword();
const mailConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && smtpPass);
const mailTo = process.env.MAIL_TO || 'netradynamics@gmail.com';
const transporter = mailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: smtpPass },
    })
  : null;

const dbReady = () => mongoose.connection.readyState === 1;

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

app.get('/api/health', (_req, res) => res.json({ ok: true, db: dbReady(), mail: mailConfigured }));

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

    // save to the database and email the team; the enquiry counts as received if either works
    const [saved, mailed] = await Promise.all([
      dbReady()
        ? Contact.create(clean).then(() => true, (e) => (console.error('DB save failed:', e.message), false))
        : false,
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

// ---------- serve the built React app in production ----------
const dist = path.join(__dirname, '../client/dist');
app.use('/assets', express.static(path.join(dist, 'assets'), { maxAge: '1y', immutable: true }));
app.use(express.static(dist, {
  maxAge: '1h',
  // HTML must always be re-checked so visitors get new releases straight away
  setHeaders: (res, filePath) => { if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache'); },
}));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(dist, 'index.html'), (e) => e && next());
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

if (transporter) {
  // check the login at start-up so a wrong password is obvious straight away
  transporter.verify().then(
    () => console.log(`Email notifications ON -> ${mailTo}`),
    (e) => console.warn(`Email login FAILED (${e.message}). Run "npm run test:mail" for help.`),
  );
} else {
  console.warn('Email notifications OFF: set SMTP_PASS in server/.env (see README, "Email notifications").');
}
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.warn('MongoDB connection failed:', e.message));
} else {
  console.warn('MONGO_URI not set - enquiries will not be saved to a database.');
}
