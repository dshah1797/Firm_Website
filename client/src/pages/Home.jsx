import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Pricing from '../components/Pricing.jsx';
import Services from '../components/Services.jsx';
import Why from '../components/Why.jsx';
import Brochure from '../components/Brochure.jsx';
import Work from '../components/Work.jsx';
import Industries from '../components/Industries.jsx';
import Process from '../components/Process.jsx';
import OurPromise from '../components/OurPromise.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Contact from '../components/Contact.jsx';
import { setSeo } from '../seo.js';

export default function Home() {
  useEffect(() => {
    setSeo({ title: 'Netra Dynamics | Ideas into digital experiences', path: '/' });
  }, []);
  return (
    <>
      <Hero /><Marquee /><Pricing /><Services /><Why /><Brochure /><Work /><Industries /><Process /><OurPromise /><CtaBanner /><Contact />
    </>
  );
}
