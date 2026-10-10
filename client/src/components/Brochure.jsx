import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

export const BROCHURE_URL = '/Netra-Dynamics-Brochure.pdf';

const ease = [0.22, 1, 0.36, 1];
const pageVariants = {
  1: { hidden: { opacity: 0, x: 0, y: 40, rotate: 0 }, rest: { opacity: 1, x: '-42%', y: 26, rotate: -8, transition: { duration: 0.8, ease } }, spread: { x: '-56%', y: 34, rotate: -12 } },
  2: { hidden: { opacity: 0, y: 60 }, rest: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 0.8, ease, delay: 0.1 } }, spread: { y: -12, scale: 1.04 } },
  3: { hidden: { opacity: 0, x: 0, y: 40, rotate: 0 }, rest: { opacity: 1, x: '42%', y: 26, rotate: 8, transition: { duration: 0.8, ease, delay: 0.2 } }, spread: { x: '56%', y: 34, rotate: 12 } },
};

export default function Brochure() {
  return (
    <section id="brochure" className="brochure">
      <div className="container brochure-grid">
        <Reveal x={-30} y={0}>
          <span className="eyebrow">Brochure</span>
          <h2>Take Netra Dynamics <em>with you.</em></h2>
          <p className="lead">Our services, packages and starting prices in one PDF brochure. Save it, share it with your team or keep it for later.</p>
          <ul className="b-list">
            <li><b>01</b>Websites, software and automation</li>
            <li><b>02</b>Packages and starting prices</li>
            <li><b>03</b>All services and contact details</li>
          </ul>
          <div className="b-actions">
            <a href={BROCHURE_URL} download="Netra-Dynamics-Brochure.pdf" className="btn light">Download PDF <span aria-hidden="true">↓</span></a>
            <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="btn outline-light">View online</a>
          </div>
          <small className="b-meta">PDF · 3 pages · 3 MB</small>
        </Reveal>

        <motion.a
          className="b-stack"
          href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" aria-label="Open the Netra Dynamics brochure"
          initial="hidden" whileInView="rest" whileHover="spread" viewport={{ once: true, margin: '-80px' }}
        >
          {[1, 2, 3].map((n) => (
            <motion.img key={n} className={`b-page p${n}`} src={`/images/brochure-p${n}.jpg`} alt={`Brochure page ${n}`} variants={pageVariants[n]} transition={{ type: 'spring', stiffness: 160, damping: 20 }} loading="lazy" />
          ))}
        </motion.a>
      </div>
    </section>
  );
}
