import { motion } from 'framer-motion';
import { packages } from '../data.js';
import { useCounter } from '../hooks.js';
import Reveal from './Reveal.jsx';

const selectService = (title) => window.dispatchEvent(new CustomEvent('select-service', { detail: title }));

function Mini({ kind }) {
  const frame = (
    <>
      <rect x="6" y="6" width="188" height="118" rx="10" fill="#fff" stroke="#d5e0f5" />
      <line x1="6" x2="194" y1="26" y2="26" stroke="#e3eaf8" />
      <circle cx="18" cy="16" r="2.5" fill="#c3d2f0" /><circle cx="27" cy="16" r="2.5" fill="#c3d2f0" /><circle cx="36" cy="16" r="2.5" fill="#c3d2f0" />
    </>
  );
  return (
    <svg viewBox="0 0 200 130" aria-hidden="true">
      {frame}
      {kind === 'wp' && (
        <>
          <rect x="20" y="40" width="64" height="7" rx="3.5" fill="#0c51ba" />
          <rect x="20" y="54" width="56" height="5" rx="2.5" fill="#cfdcf5" />
          <rect x="20" y="64" width="48" height="5" rx="2.5" fill="#cfdcf5" />
          <rect x="20" y="80" width="38" height="14" rx="4" fill="#0c51ba" />
          <rect x="110" y="38" width="72" height="68" rx="8" fill="#e9f0ff" />
          <circle cx="146" cy="72" r="16" fill="#cfdcf5" />
          <path d="M134 78c6-14 14 4 24-12" fill="none" stroke="#0c51ba" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {kind === 'fs' && (
        <>
          {[40, 52, 64, 76].map((y) => <rect key={y} x="18" y={y} width="16" height="5" rx="2.5" fill="#bcd0f2" />)}
          {[46, 84, 122].map((x) => <rect key={x} x={x} y="36" width="30" height="16" rx="4" fill="#bcd0f2" />)}
          <rect x="46" y="60" width="108" height="52" rx="6" fill="#e9f0ff" />
          {[0, 1, 2, 3, 4].map((n) => <rect key={n} x={62 + n * 18} y={100 - (10 + n * 7)} width="9" height={10 + n * 7} rx="2" fill="#0c51ba" />)}
        </>
      )}
      {kind === 'ai' && (
        <>
          <path d="M40 90 L88 62 L128 94 L160 70" fill="none" stroke="#9fb9ea" strokeWidth="2.5" />
          {[[40, 90], [88, 62], [128, 94], [160, 70]].map(([x, y], n) => (
            <g key={n}><circle cx={x} cy={y} r="11" fill="#e3ecff" /><circle cx={x} cy={y} r="6" fill="#0c51ba" /></g>
          ))}
          <rect x="52" y="108" width="96" height="6" rx="3" fill="#cfdcf5" />
        </>
      )}
    </svg>
  );
}

function PackageCard({ p, i }) {
  const [ref, n] = useCounter(p.price);
  return (
    <Reveal delay={i * 0.1} y={36}>
      <article className="pkg">
        <div className="pkg-art"><Mini kind={p.kind} /></div>
        <span className="pkg-eyebrow">{p.eyebrow}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="pkg-price" ref={ref}>
          <small>{p.priceLabel}</small>
          <b>₹{n.toLocaleString('en-IN')}</b>
          <i>INR</i>
        </div>
        <motion.a href="#contact" className="btn" onClick={() => selectService(p.title)} whileTap={{ scale: 0.97 }}>
          Discuss your requirements <span aria-hidden="true">→</span>
        </motion.a>
      </article>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section alt">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Start with the right foundation</span>
          <h2>Choose your <em>starting point.</em></h2>
          <p>A business website, a custom platform or integrated AI automation. Select the direction that fits your next step.</p>
        </Reveal>
        <div className="pkg-grid">
          {packages.map((p, i) => <PackageCard key={p.title} p={p} i={i} />)}
        </div>
        <Reveal y={20}>
          <p className="note">Full-stack and AI automation prices are starting prices. Custom projects are quoted to scope.<br /><a href="/Netra-Dynamics-Brochure.pdf" download="Netra-Dynamics-Brochure.pdf" className="link">Download our brochure (PDF) ↓</a></p>
        </Reveal>
      </div>
    </section>
  );
}
