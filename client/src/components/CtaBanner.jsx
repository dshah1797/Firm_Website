import { waLink } from '../data.js';
import Reveal from './Reveal.jsx';

export default function CtaBanner() {
  return (
    <section className="cta-sec">
      <div className="container">
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Have something specific in mind?</h2>
              <p>Tell us what you want to build. Let's discuss the right solution.</p>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="btn light">Discuss your project <span aria-hidden="true">→</span></a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn outline-light">WhatsApp us</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
