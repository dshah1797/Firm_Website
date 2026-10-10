import { motion } from 'framer-motion';
import { pillars } from '../data.js';

const ease = [0.22, 1, 0.36, 1];
const fade = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.7, ease } });

function HeroVisual() {
  const float = (d, y = 10) => ({ animate: { y: [0, -y, 0] }, transition: { repeat: Infinity, duration: 5 + d, ease: 'easeInOut', delay: d } });
  return (
    <motion.div className="hv" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.9, ease }}>
      <motion.img className="hv-art" src="/images/hero-illustration.jpg" alt="Websites, software and automation connected by Netra Dynamics" {...float(0, 8)} />

      <motion.div className="hv-float f1" {...float(0.4, 10)}>
        <img src="/brand/icon.png" alt="" width="34" height="34" />
        <div><b>Netra Dynamics</b><small>Ideas into digital experiences</small></div>
      </motion.div>

      <motion.div className="hv-float f2" {...float(1.2, 8)}>
        <span className="tick">✓</span>
        <div><b>WordPress websites</b><small>Package from ₹5,999</small></div>
      </motion.div>

      <motion.div className="hv-float f3" {...float(2, 12)}>
        <span className="spark">AI</span>
        <div><b>AI &amp; automation</b><small>Chatbots, workflows, integrations</small></div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.span className="kicker" {...fade(0)}>Ideas into digital experiences</motion.span>
          <motion.h1 {...fade(0.1)}>
            Built for your <span className="blue">next big move.</span>
          </motion.h1>
          <motion.p className="lead" {...fade(0.25)}>
            From your first website to connected business software, bring your next idea to life with Netra Dynamics.
          </motion.p>
          <motion.div className="cta" {...fade(0.4)}>
            <a href="#contact" className="btn">Discuss your requirements <span aria-hidden="true">→</span></a>
            <a href="#pricing" className="btn ghost">View packages</a>
          </motion.div>
          <motion.div className="pillars" {...fade(0.55)}>
            {pillars.map((p) => (
              <div key={p.num}>
                <small>{p.num} / {p.label}</small>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
