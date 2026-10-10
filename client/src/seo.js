const SITE = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
export const DEFAULT_DESCRIPTION =
  'Netra Dynamics: ideas into digital experiences. WordPress and full-stack websites, business software, AI automation, chatbots, SaaS, CRM and digital marketing.';

const clip = (s, n = 158) => (s.length > n ? s.slice(0, s.lastIndexOf(' ', n)) + '...' : s);

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

// Keeps the tab title, search snippet, share preview and canonical link correct for each page.
export function setSeo({ title, description = DEFAULT_DESCRIPTION, path = window.location.pathname, noindex = false }) {
  const desc = clip(description);
  const url = (SITE || window.location.origin) + path;
  document.title = title;
  setMeta('name', 'description', desc);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', desc);
  setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}
