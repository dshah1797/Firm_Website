import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = ['services', 'about', 'work', 'industries', 'process', 'contact'];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <motion.header
      className={`nav ${solid ? 'solid' : ''}`}
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container nav-inner">
        <a href="#home" className="logo"><span>S</span> StackForge</a>
        <nav className={open ? 'open' : ''}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="btn btn-sm" onClick={() => setOpen(false)}>Get a quote</a>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      <motion.div className="progress" style={{ scaleX }} />
    </motion.header>
  );
}
