import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { process, services, waLink } from '../data.js';
import { comparison, serviceContent } from '../serviceContent.js';
import Icon from '../components/Icons.jsx';
import Reveal from '../components/Reveal.jsx';
import Contact from '../components/Contact.jsx';
import { setSeo } from '../seo.js';

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{q}</span><i aria-hidden="true">+</i>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            <p className="faq-a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const idx = services.findIndex((s) => s.slug === slug);
  const s = services[idx];
  const c = serviceContent[slug];

  useEffect(() => {
    if (s && c) setSeo({ title: `${s.title} | Netra Dynamics`, description: `${s.title}: ${c.overview}`, path: `/services/${s.slug}` });
  }, [s, c]);

  if (!s || !c) return <Navigate to="/" replace />;

  const related = [
    ...services.map((x, i) => ({ ...x, i })).filter((x) => x.category === s.category && x.slug !== slug),
    ...services.map((x, i) => ({ ...x, i })).filter((x) => x.category !== s.category),
  ].slice(0, 3);

  return (
    <>
      {/* hero */}
      <section className="sp-hero">
        <div className="container sp-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span>/</span><Link to="/#services">Services</Link><span>/</span><span>{s.title}</span>
            </nav>
            <span className="sp-pill">{s.category}</span>
            <h1>{s.title}</h1>
            <p className="sp-tag">{c.tagline}</p>
            <p className="sp-overview">{c.overview}</p>
            <div className="sp-actions">
              <a href="#contact" className="btn light">Discuss this service <span aria-hidden="true">→</span></a>
              <a href={waLink(undefined, `Hi Netra Dynamics, I'd like to discuss ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn outline-light">WhatsApp us</a>
            </div>
          </motion.div>
          <motion.div className="sp-photo" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <img src={`/images/svc-${slug}.jpg`} alt={s.title} />
            <motion.div className="sp-badge" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
              <span className="svc-icon"><Icon i={idx} /></span>
              <div><b>{s.title}</b><small>{s.text}</small></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* what we build */}
      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">What we build</span>
            <h2>Everything you need, <em>built for you.</em></h2>
            <p>Each part is designed around your business and delivered as a connected solution.</p>
          </Reveal>
          <div className="build-grid">
            {c.builds.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 0.08} y={24}>
                <div className="build">
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">What you get</span>
            <h2>Results you can <em>count on.</em></h2>
          </Reveal>
          <div className="benefit-grid">
            {c.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.08} y={24}>
                <div className="benefit"><span className="check">✓</span><p>{b}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Why choose Netra Dynamics</span>
            <h2>Built better, <em>around you.</em></h2>
            <p>Here is how our approach to {s.title.toLowerCase()} is different.</p>
          </Reveal>
          <div className="reason-grid">
            {c.whyUs.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 4) * 0.08} y={24}>
                <div className="reason">
                  <span className="reason-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal y={30}>
            <div className="compare">
              <div className="compare-head"><div className="us">Netra Dynamics</div><div className="them">Typical alternatives</div></div>
              {comparison.map(([us, them]) => (
                <div className="compare-row" key={us}>
                  <div className="us"><span className="mark yes">✓</span>{us}</div>
                  <div className="them"><span className="mark no">✕</span>{them}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>From first call to <em>launch and beyond.</em></h2>
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

      {/* faq */}
      <section className="section">
        <div className="container faq-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, <em>answered.</em></h2>
          </Reveal>
          <div className="faq">
            {c.faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* related */}
      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Explore more</span>
            <h2>Related <em>services</em></h2>
          </Reveal>
          <div className="svc-grid">
            {related.map((r) => (
              <div key={r.slug}>
                <Link to={`/services/${r.slug}`} className="svc">
                  <span className="svc-icon"><Icon i={r.i} /></span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <span className="svc-more">Learn more <i>→</i></span>
                  <span className="num">{r.category}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact defaultService={s.title} />
    </>
  );
}
