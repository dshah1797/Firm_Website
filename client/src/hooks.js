import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCounter(target, duration = 1800) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return [ref, n];
}

export function useTyping(words, speed = 80, pause = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setDel(true);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
        }
      },
      !del && text === word ? pause : del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}
