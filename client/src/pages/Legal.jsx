import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { company } from '../data.js';
import { setSeo } from '../seo.js';

const UPDATED = '10 October 2026';

function LegalLayout({ title, intro, sections, seoDescription }) {
  useEffect(() => {
    setSeo({ title: `${title} | Netra Dynamics`, description: seoDescription });
  }, [title, seoDescription]);

  return (
    <>
      <section className="legal-hero">
        <div className="container narrow">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>{title}</span>
          </nav>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {UPDATED}</p>
        </div>
      </section>
      <section className="section legal">
        <div className="container narrow">
          <p className="lead">{intro}</p>
          {sections.map(([h, body]) => (
            <div key={h} className="legal-block">
              <h2>{h}</h2>
              {body.map((p, i) => (Array.isArray(p)
                ? <ul key={i}>{p.map((li) => <li key={li}>{li}</li>)}</ul>
                : <p key={i}>{p}</p>))}
            </div>
          ))}
          <p className="legal-contact">Questions about this page? Email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      seoDescription="How Netra Dynamics collects, uses and protects the information you share through this website."
      intro="This policy explains what information Netra Dynamics (“we”, “us”) collects through this website, how we use it, and the choices you have."
      sections={[
        ['Information we collect', [
          'When you use the contact form we collect your name, email address, the service you are interested in, and the message you write.',
          'When you contact us by email or WhatsApp, we receive the details you choose to send, such as your name, phone number and message.',
          'If analytics is enabled on the site, we may collect general usage information such as pages visited, device type and browser. This does not identify you personally.',
        ]],
        ['How we use it', [
          ['To reply to your enquiry and prepare quotes or proposals.', 'To improve our website and services.', 'To keep a record of our communication with you.'],
          'We do not sell your personal information.',
        ]],
        ['Who handles your data', [
          'We use trusted providers to run the site: a hosting provider, a database provider that stores enquiries, an email provider that delivers notifications, and Google Fonts to display text. If analytics is enabled, Google Analytics is used.',
          'When you click a WhatsApp link, WhatsApp opens and its own privacy policy applies to that conversation. Portfolio links open other websites, which have their own policies.',
        ]],
        ['How long we keep it', [
          'We keep enquiry details only as long as needed to handle your request and our business records, and delete them when no longer required or when you ask us to.',
        ]],
        ['Your choices', [
          `You can ask to see, correct or delete the information we hold about you by emailing ${company.email}. We will respond within a reasonable time.`,
        ]],
        ['Security', [
          'We take reasonable steps to protect your information, such as access control and encrypted connections. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
        ]],
        ['Children', [
          'This website is intended for businesses and adults. We do not knowingly collect information from children.',
        ]],
        ['Changes to this policy', [
          'We may update this policy from time to time. The date at the top shows when it was last changed.',
        ]],
      ]}
    />
  );
}

export function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      seoDescription="The terms for using the Netra Dynamics website and how our services and prices are quoted."
      intro="By using this website you agree to these terms. If you do not agree, please do not use the site."
      sections={[
        ['About this website', [
          'This website describes the services of Netra Dynamics. The information is provided for general guidance and may change without notice.',
        ]],
        ['Services and prices', [
          'Package prices and “starting from” prices shown on this website are indicative. The final price and scope of any project are agreed with you in a written quote before work begins.',
          'Custom projects are quoted to scope. Sending an enquiry does not create a contract.',
        ]],
        ['Our work and third-party links', [
          'Portfolio examples link to live websites that belong to their respective owners. Names, logos and products shown there are the property of those owners.',
          'We are not responsible for the content or practices of other websites we link to.',
        ]],
        ['Intellectual property', [
          'The Netra Dynamics name, logo, text, design and brochure on this website belong to Netra Dynamics. Please do not copy or reuse them without our written permission.',
        ]],
        ['Acceptable use', [
          'Please do not misuse the site, attempt to disrupt it or access it unlawfully, or send spam or harmful content through the contact form.',
        ]],
        ['Limitation of liability', [
          'We make reasonable efforts to keep the site accurate and available, but provide it “as is”. To the extent permitted by law, Netra Dynamics is not liable for losses arising from the use of this website.',
        ]],
        ['Governing law', [
          'These terms are governed by the laws of India.',
        ]],
        ['Changes', [
          'We may update these terms from time to time. Continued use of the site means you accept the updated terms.',
        ]],
      ]}
    />
  );
}
