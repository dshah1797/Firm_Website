// Sends one test email using the settings in server/.env, so you can check that
// notifications work before relying on them.   Run:  npm run test:mail --prefix server
import 'dotenv/config';
import nodemailer from 'nodemailer';
import { mailPassword } from '../mail-settings.js';
import { render, testEmail } from '../email-templates.js';

const { SMTP_HOST, SMTP_PORT, SMTP_USER } = process.env;
const SMTP_PASS = mailPassword();
const to = process.env.MAIL_TO || 'netradynamics@gmail.com';

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error('\nEmail is not set up yet.');
  console.error('Open server/.env and fill in SMTP_HOST, SMTP_USER and SMTP_PASS.');
  console.error('For Gmail, SMTP_PASS must be an "App password" (not your normal password).');
  console.error('Steps: README.md -> "Email notifications".\n');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 587,
  secure: Number(SMTP_PORT) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 15000,
});

try {
  await transporter.verify();
  await transporter.sendMail({
    from: `"Netra Dynamics website" <${process.env.MAIL_FROM || SMTP_USER}>`,
    to,
    ...render(testEmail()),
  });
  console.log(`\nSuccess! A test email was sent to ${to}.`);
  console.log('Check the inbox (and the Spam folder the first time).\n');
} catch (e) {
  console.error('\nCould not send the test email: ' + e.message);
  if (e.responseCode === 535 || /Invalid login|not accepted|Application-specific/i.test(e.message)) {
    console.error('\nGmail rejected the login. Check that:');
    console.error('  1. 2-Step Verification is ON for the Gmail account,');
    console.error('  2. SMTP_PASS is the 16-character App password (not the normal password),');
    console.error('  3. SMTP_USER is the same Gmail address the App password was created for.\n');
  } else if (['ECONNREFUSED', 'ETIMEDOUT', 'ENOTFOUND', 'ESOCKET'].includes(e.code)) {
    console.error('\nCould not reach the mail server. Check SMTP_HOST / SMTP_PORT and your internet connection.\n');
  }
  process.exit(1);
}
