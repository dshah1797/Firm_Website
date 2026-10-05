import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Why from './components/Why.jsx';
import Work from './components/Work.jsx';
import Stats from './components/Stats.jsx';
import Industries from './components/Industries.jsx';
import Process from './components/Process.jsx';
import OurPromise from './components/OurPromise.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Marquee /><Services /><Why /><Work /><Stats /><Industries /><Process /><OurPromise /><CtaBanner /><Contact />
      </main>
      <Footer />
    </>
  );
}
