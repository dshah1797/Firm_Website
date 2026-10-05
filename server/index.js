import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from './models/Contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '10kb' }));

const dbReady = () => mongoose.connection.readyState === 1;

app.get('/api/health', (_req, res) => res.json({ ok: true, db: dbReady() }));

app.post(
  '/api/contact',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false }),
  async (req, res) => {
    const { name, email, service, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }
    if (!dbReady()) {
      return res.status(503).json({ error: 'Database is not connected. Set MONGO_URI in server/.env.' });
    }
    try {
      await Contact.create({ name, email, service, message });
      res.status(201).json({ ok: true });
    } catch (err) {
      const status = err.name === 'ValidationError' ? 400 : 500;
      res.status(status).json({ error: status === 400 ? 'Please check your details.' : 'Server error.' });
    }
  }
);

// Serve the built React app in production
const dist = path.join(__dirname, '../client/dist');
app.use(express.static(dist));
app.get('*', (req, res, next) =>
  req.path.startsWith('/api') ? next() : res.sendFile(path.join(dist, 'index.html'), (e) => e && next())
);

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.warn('MongoDB connection failed:', e.message));
} else {
  console.warn('MONGO_URI not set - contact form submissions will not be saved.');
}
