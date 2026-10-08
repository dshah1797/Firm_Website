import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ['web platforms', 'AI solutions', 'SaaS products', 'cloud systems'];
const trust = [['150+', 'Projects delivered'], ['60+', 'Clients served'], ['99%', 'On-time delivery']];
const ease = [0.22, 1, 0.36, 1];
const fade = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.7, ease } });

function HeroVisual() {
  const float = (d, y = 10) => ({ animate: { y: [0, -y, 0] }, transition: { repeat: Infinity, duration: 5 + d, ease: 'easeInOut', delay: d } });
  return (
    <motion.div className="hv" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.9, ease }}>
      <div className="hv-photo">
        <img src="/images/hero.jpg" alt="Our engineers and designers collaborating at laptops" />
      </div>

      <motion.div className="hv-float f1" {...float(0)}>
        <svg width="46" height="46" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7ee" strokeWidth="4" />
          <motion.circle cx="20" cy="20" r="16" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" transform="rotate(-90 20 20)" initial={{ pathLength: 0 }} animate={{ pathLength: 0.97 }} transition={{ delay: 1.2, duration: 1.4 }} />
        </svg>
        <div><b>99.98%</b><small>Uptime, last 90 days</small></div>
      </motion.div>

      <motion.div className="hv-float f2" {...float(1.2, 8)}>
        <span className="tick">✓</span>
        <div><b>Deployment successful</b><small>production · 2 min ago</small></div>
      </motion.div>

      <motion.div className="hv-float f3" {...float(2, 12)}>
        <span className="spark">AI</span>
        <div><b>Assistant resolved</b><small>1,284 tickets this week</small></div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.span className="kicker" {...fade(0)}>Software &amp; digital engineering firm</motion.span>
          <motion.h1 {...fade(0.1)}>
            We build dependable
            <span className="rotator">
              <AnimatePresence mode="wait">
                <motion.span key={i} initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.45, ease: 'easeInOut' }}>
                  {words[i]}
                </motion.span>
              </AnimatePresence>
            </span>
            for growing businesses.
          </motion.h1>
          <motion.p className="lead" {...fade(0.25)}>
            From first idea to long-term support, our engineers, designers and strategists work as one team to deliver software that performs and scales.
          </motion.p>
          <motion.div className="cta" {...fade(0.4)}>
            <a href="#contact" className="btn">Start a project <span aria-hidden="true">→</span></a>
            <a href="#work" className="btn ghost">See our work</a>
          </motion.div>
          <motion.div className="trust" {...fade(0.55)}>
            {trust.map(([b, s]) => <div key={s}><b>{b}</b><span>{s}</span></div>)}
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
