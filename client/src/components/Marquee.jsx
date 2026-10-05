import { clients } from '../data.js';

export default function Marquee() {
  const items = [...clients, ...clients];
  return (
    <section className="clients" aria-label="Clients">
      <p>Trusted by growing companies and established enterprises</p>
      <div className="marquee">
        <div className="track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>
    </section>
  );
}
