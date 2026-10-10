import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from '../analytics.js';

// Scroll to the top on page changes, or to the #section when the URL has one.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // report each page once its title has been set by the page itself
  useEffect(() => {
    const t = setTimeout(() => pageView(pathname), 300);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
