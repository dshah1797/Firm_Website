import { services } from '../data.js';

const extra = ['WordPress websites', 'Full-stack websites', 'AI automation'];

export default function Marquee() {
  const base = [...extra, ...services.map((s) => s.title)];
  const items = [...base, ...base];
  return (
    <section className="clients" aria-label="What we build">
      <p>What we build</p>
      <div className="marquee">
        <div className="track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>
    </section>
  );
}
