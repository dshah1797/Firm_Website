import { why } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Why() {
  return (
    <section id="about" className="section alt">
      <div className="container why-grid">
        <Reveal x={-30} y={0}>
          <div className="why-photo">
            <img src="/images/why.jpg" alt="Team planning a project on a whiteboard" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">Why Netra Dynamics</span>
            <h2>Your ideas, built <em>around your business.</em></h2>
            <p className="lead">From your first website to connected business software, we shape every solution around your industry, your technology and your project scope.</p>
          </Reveal>
          <div className="why-list">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1} y={24}>
                <div className="why-item">
                  <span className="check">✓</span>
                  <div><h3>{w.title}</h3><p>{w.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
