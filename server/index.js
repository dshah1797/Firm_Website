// Normal Node server (npm start / npm run dev): the API from app.js plus the built React site.
// On Vercel this file is not used; the functions in /api reuse app.js instead.
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import app, { transporter, mailTo, connectDb } from './app.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5001;

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
  connectDb().then((ok) => ok && console.log('MongoDB connected'));
} else {
  console.warn('MONGO_URI not set - enquiries will not be saved to a database.');
}
