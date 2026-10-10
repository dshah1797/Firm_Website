import { Link } from 'react-router-dom';
import { company, services, waLink } from '../data.js';
import AnchorLink from './AnchorLink.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <Link to="/" className="logo" aria-label="Netra Dynamics home"><img src="/brand/logo-white.png" alt="Netra Dynamics" /></Link>
          <p>{company.tagline}. Websites, software and automation, built for your next big move.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{services.slice(3, 9).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><AnchorLink id="pricing">Packages</AnchorLink></li>
            <li><AnchorLink id="about">Why us</AnchorLink></li>
            <li><AnchorLink id="work">Our work</AnchorLink></li>
            <li><AnchorLink id="process">How we work</AnchorLink></li>
            <li><AnchorLink id="contact">Contact</AnchorLink></li>
            <li><a href="/Netra-Dynamics-Brochure.pdf" download="Netra-Dynamics-Brochure.pdf">Download brochure</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="container foot-bar">
        <span>© {new Date().getFullYear()} Netra Dynamics. All rights reserved.</span>
        <span>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}
