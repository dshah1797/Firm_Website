import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '../data.js';
import Reveal from './Reveal.jsx';

const empty = { name: '', email: '', service: 'Full-Stack Development', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus({ type: 'ok', msg: "Thank you! We'll get back to you within 24 hours." });
      setForm(empty);
    } catch (err) {
      setStatus({ type: 'err', msg: err.message });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container grid-contact">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">Contact</span>
          <h2>Let's build your <span className="grad">next big thing</span></h2>
          <p className="lead">Tell us about your project. A senior engineer will reply within one business day.</p>
          <ul className="info">
            <li><b>Email</b>hello@stackforge.dev</li>
            <li><b>Phone</b>+1 (555) 123-4567</li>
            <li><b>Location</b>Remote-first, serving clients worldwide</li>
          </ul>
          <div className="contact-photo">
            <img src="/images/contact.jpg" alt="A member of our team ready to help" loading="lazy" />
          </div>
        </Reveal>
        <Reveal x={40} y={0}>
          <form className="form" onSubmit={submit}>
            <label>Name<input required maxLength={100} value={form.name} onChange={set('name')} placeholder="Jane Doe" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" /></label>
            <label>Service
              <select value={form.service} onChange={set('service')}>
                {[...services.map((s) => s.title), 'Other'].map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Message<textarea required maxLength={2000} rows={4} value={form.message} onChange={set('message')} placeholder="Tell us about your project..." /></label>
            <motion.button className="btn" disabled={status.type === 'loading'} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {status.type === 'loading' ? 'Sending…' : 'Send message'}
            </motion.button>
            <AnimatePresence>
              {status.msg && (
                <motion.p key={status.msg} className={`status ${status.type}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  {status.msg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
