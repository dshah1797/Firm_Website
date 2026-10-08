import { projects } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Our work</span>
          <h2>Products we've <em>built and shipped</em></h2>
          <p>Live, production applications, from emergency-response tools to full e-commerce platforms.</p>
        </Reveal>
        <div className="work-list">
          {projects.map((p, i) => (
            <Reveal key={p.title} y={50}>
              <article className={`work ${i % 2 ? 'flip' : ''}`}>
                <a className="work-shot" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`}>
                  <div className="browser">
                    <div className="browser-bar">
                      <span><i /><i /><i /></span>
                      <em>{p.url.replace('https://', '').replace(/\/$/, '')}</em>
                    </div>
                    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                  </div>
                </a>
                <div className="work-info">
                  <span className="work-num">{String(i + 1).padStart(2, '0')} / {p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className="work-points">
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm">Visit live site <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
