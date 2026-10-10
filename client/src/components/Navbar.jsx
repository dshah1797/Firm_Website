import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import AnchorLink from './AnchorLink.jsx';

const links = [['services', 'Services'], ['pricing', 'Packages'], ['work', 'Our work'], ['process', 'Process'], ['contact', 'Contact']];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || pathname !== '/' || open;

  return (
    <motion.header
      className={`nav ${solid ? 'solid' : ''}`}
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="Netra Dynamics home"><img src="/brand/logo.png" alt="Netra Dynamics" /></Link>
        <nav className={open ? 'open' : ''}>
          {links.map(([id, label]) => (
            <AnchorLink key={id} id={id} onClick={() => setOpen(false)}>{label}</AnchorLink>
          ))}
          <AnchorLink id="contact" className="btn btn-sm" onClick={() => setOpen(false)}>Get a quote</AnchorLink>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      <motion.div className="progress" style={{ scaleX }} />
    </motion.header>
  );
}
