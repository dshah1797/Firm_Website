import { services } from '../data.js';
import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">What we do</span>
          <h2>Twelve capabilities, <em>one accountable partner</em></h2>
          <p>Engineering, data, cloud and marketing under one roof, so nothing gets lost between vendors.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} y={24}>
              <a href="#contact" className="svc">
                <span className="svc-icon"><Icon i={i} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="svc-more">Learn more <i>→</i></span>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
