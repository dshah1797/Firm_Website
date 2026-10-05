import { motion } from 'framer-motion';
import { process } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">How we work</span>
          <h2>A clear process, <em>no surprises</em></h2>
        </Reveal>
        <div className="steps">
          {process.map((p, i) => (
            <div className="step" key={p.step}>
              <div className="step-line">
                <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.25, duration: 0.9, ease: 'easeOut' }} />
              </div>
              <Reveal delay={i * 0.12} y={24}>
                <span className="n">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
