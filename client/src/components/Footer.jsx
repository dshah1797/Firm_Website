import { services } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <a href="#home" className="logo"><span>S</span> StackForge</a>
          <p>A full-stack software and digital engineering firm helping businesses design, build and scale reliable products.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{services.slice(0, 6).map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#work">Case studies</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#process">How we work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>hello@stackforge.dev</li>
            <li>+1 (555) 123-4567</li>
            <li>Remote-first, worldwide</li>
          </ul>
        </div>
      </div>
      <div className="container foot-bar">
        <span>© {new Date().getFullYear()} StackForge. All rights reserved.</span>
        <span><a href="#home">Privacy</a><a href="#home">Terms</a><a href="#home">Back to top ↑</a></span>
      </div>
    </footer>
  );
}
