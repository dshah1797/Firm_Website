import { industries } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Industries() {
  return (
    <section id="industries" className="section alt">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Industries</span>
          <h2>Deep experience across <em>sectors</em></h2>
          <p>Domain knowledge shortens discovery and avoids costly rework.</p>
        </Reveal>
        <div className="ind-grid">
          {industries.map((n, i) => (
            <Reveal key={n.name} delay={(i % 4) * 0.07} y={20}>
              <div className="ind">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{n.name}</h3>
                <p>{n.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
