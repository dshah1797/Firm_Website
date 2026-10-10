import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { categories, services } from '../data.js';
import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Services() {
  const [cat, setCat] = useState('All');
  const list = services.map((s, i) => ({ ...s, i })).filter((s) => cat === 'All' || s.category === cat);

  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Built around your business</span>
          <h2>Software, systems <em>&amp; digital growth.</em></h2>
          <p>Everything you need to run, build, connect and grow your business, from one team. Select a service to see what we build and why teams choose us.</p>
        </Reveal>

        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={c === cat} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <motion.div layout className="svc-grid">
          <AnimatePresence mode="popLayout">
            {list.map((s) => (
              <motion.div key={s.slug} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.35 }}>
                <Link to={`/services/${s.slug}`} className="svc">
                  <span className="svc-icon"><Icon i={s.i} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="svc-more">Learn more <i>→</i></span>
                  <span className="num">{s.category}</span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
