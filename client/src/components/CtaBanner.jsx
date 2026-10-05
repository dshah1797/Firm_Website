import Reveal from './Reveal.jsx';

export default function CtaBanner() {
  return (
    <section className="cta-sec">
      <div className="container">
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Ready to build something that lasts?</h2>
              <p>Book a free 30-minute consultation with a senior engineer and get a clear plan, timeline and estimate.</p>
            </div>
            <a href="#contact" className="btn light">Book a consultation <span aria-hidden="true">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
