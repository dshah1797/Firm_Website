import { projects } from '../data.js';
import Reveal from './Reveal.jsx';

const art = [
  <>{[0, 1, 2, 3, 4, 5, 6].map((n) => <rect key={n} x={40 + n * 48} y={230 - (40 + ((n * 37) % 110))} width="30" height={40 + ((n * 37) % 110)} rx="3" fill="#fff" opacity={0.2 + n * 0.08} />)}<polyline points="55,190 103,150 151,170 199,110 247,125 295,70 343,52" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" /></>,
  <><circle cx="200" cy="140" r="90" fill="none" stroke="#fff" strokeWidth="2" opacity=".35" /><circle cx="200" cy="140" r="58" fill="#fff" opacity=".16" /><path d="M105 140h48l20-44 32 88 24-44h66" fill="none" stroke="#fff" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" /></>,
  <>{[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => <rect key={r + '-' + c} x={46 + c * 84} y={46 + r * 72} width="70" height="58" rx="7" fill="#fff" opacity={0.15 + ((r + c) % 3) * 0.14} />))}</>,
  <><path d="M30 225C110 205 130 115 200 135S300 65 380 40" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="2 11" strokeLinecap="round" /><circle cx="30" cy="225" r="11" fill="#fff" /><circle cx="200" cy="135" r="11" fill="#fff" opacity=".75" /><circle cx="380" cy="40" r="11" fill="#fff" /></>,
];
const bg = ['#1e40af', '#0f766e', '#b45309', '#334155'];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Case studies</span>
          <h2>Results that show up <em>in the numbers</em></h2>
        </Reveal>
        <div className="grid2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className="project">
                <div className="thumb" style={{ '--bg-c': bg[i] }}>
                  <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">{art[i]}</svg>
                  <span className="tag">{p.tag}</span>
                  <div className="metric"><b>{p.metric}</b><span>{p.metricLabel}</span></div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#contact" className="link">Discuss a similar project <span>→</span></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
