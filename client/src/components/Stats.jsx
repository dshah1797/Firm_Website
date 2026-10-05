import { stats } from '../data.js';
import { useCounter } from '../hooks.js';
import Reveal from './Reveal.jsx';

function Stat({ value, suffix, label, i }) {
  const [ref, n] = useCounter(value);
  return (
    <Reveal delay={i * 0.1}>
      <div className="stat" ref={ref}>
        <b>{n}{suffix}</b><span>{label}</span>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => <Stat key={s.label} {...s} i={i} />)}
      </div>
    </section>
  );
}
