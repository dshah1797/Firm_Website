import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { company, packages, services, waLink } from '../data.js';
import { API } from '../api.js';
import { track } from '../analytics.js';
import Reveal from './Reveal.jsx';

const options = [...new Set([...packages.map((p) => p.title), ...services.map((s) => s.title), 'Other'])];
const empty = { name: '', email: '', service: packages[0].title, message: '', website: '' };

export default function Contact({ defaultService }) {
  const start = { ...empty, service: options.includes(defaultService) ? defaultService : empty.service };
  const [form, setForm] = useState(start);
  const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useEffect(() => {
    const pick = (e) => options.includes(e.detail) && setForm((f) => ({ ...f, service: e.detail }));
    window.addEventListener('select-service', pick);
    return () => window.removeEventListener('select-service', pick);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: '' });
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please email or WhatsApp us instead.');
      setStatus({ type: 'ok', msg: "Thank you! We'll get back to you shortly." });
      track('generate_lead', { service: form.service });
      setForm(start);
    } catch (err) {
      const offline = err instanceof TypeError;
      setStatus({ type: 'err', msg: offline ? 'We could not reach the server. Please check your connection, or email or WhatsApp us instead.' : err.message });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container grid-contact">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">Contact</span>
          <h2>Discuss your <em>project requirements</em></h2>
          <p className="lead">Tailored solutions for your industry, technology and project scope.</p>
          <ul className="info">
            <li><b>Email</b><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn ghost wa-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 005.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 01-1.5-5.2C2.1 6.4 6.5 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 012.9 6.9c0 5.4-4.4 9.9-9.8 9.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.7.1a8 8 0 01-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" /></svg>
            Chat on WhatsApp
          </a>
        </Reveal>
        <Reveal x={40} y={0}>
          <form className="form" onSubmit={submit}>
            <label>Name<input required maxLength={100} autoComplete="name" value={form.name} onChange={set('name')} placeholder="Your name" /></label>
            <label>Email<input required type="email" inputMode="email" autoComplete="email" value={form.email} onChange={set('email')} placeholder="you@company.com" /></label>
            <label>I'm interested in
              <select value={form.service} onChange={set('service')}>
                {options.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Tell us what you want to build<textarea required maxLength={2000} rows={4} value={form.message} onChange={set('message')} placeholder="Describe your idea, industry and any requirements..." /></label>
            {/* honeypot: hidden from people, bots tend to fill it */}
            <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set('website')} />
            <motion.button className="btn" disabled={status.type === 'loading'} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {status.type === 'loading' ? 'Sending…' : 'Send message'}
            </motion.button>
            <p className="consent">By sending this message you agree to our <Link to="/privacy">Privacy Policy</Link>.</p>
            <AnimatePresence>
              {status.msg && (
                <motion.p key={status.msg} role="status" className={`status ${status.type}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
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
