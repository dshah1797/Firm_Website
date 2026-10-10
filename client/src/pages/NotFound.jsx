import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setSeo } from '../seo.js';

export default function NotFound() {
  useEffect(() => {
    setSeo({ title: 'Page not found | Netra Dynamics', noindex: true });
  }, []);
  return (
    <section className="section notfound">
      <div className="container narrow">
        <span className="eyebrow">Error 404</span>
        <h1>This page doesn't exist.</h1>
        <p className="lead">The link may be old or mistyped. Here are a few places to continue from.</p>
        <div className="cta">
          <Link to="/" className="btn">Back to home <span aria-hidden="true">→</span></Link>
          <Link to="/#services" className="btn ghost">Browse services</Link>
          <Link to="/#contact" className="btn ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
