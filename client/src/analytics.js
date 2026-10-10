// Google Analytics 4, loaded only when VITE_GA_ID (e.g. G-XXXXXXXXXX) is set.
const GA_ID = import.meta.env.VITE_GA_ID;

export function initAnalytics() {
  if (!GA_ID || window.gtag) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });

  // count the actions that matter, wherever the link lives on the site
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.includes('wa.me')) track('whatsapp_click', { link_text: a.textContent.trim().slice(0, 40) });
    else if (href.startsWith('mailto:')) track('email_click');
    else if (href.endsWith('.pdf')) track('brochure_download');
    else if (href.startsWith('http') && a.target === '_blank') track('portfolio_visit', { link_url: href });
  });
}

export function track(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params);
}

export function pageView(path) {
  track('page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
}
