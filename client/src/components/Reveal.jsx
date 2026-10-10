import { motion } from 'framer-motion';

// Sideways slides are skipped on narrow screens: a transient horizontal offset
// widens the page and makes phones (iOS Safari especially) pan sideways.
const narrow = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 960px)').matches;

export default function Reveal({ children, delay = 0, y = 40, x = 0, className }) {
  const dx = narrow() ? 0 : x;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x: dx }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
