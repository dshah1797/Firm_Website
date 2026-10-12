import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { services } from './src/data.js';
import { serviceContent } from './src/serviceContent.js';

const clip = (s, n = 158) => (s.length > n ? s.slice(0, s.lastIndexOf(' ', n)) + '...' : s);
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Fills the __SITE_URL__ placeholders in index.html, writes robots.txt + sitemap.xml, and writes a
// ready-made HTML file for every page (title, description, canonical) so search engines see the right
// details without running any JavaScript. Set VITE_SITE_URL (e.g. https://www.yourdomain.com) before building.
function seoFiles(site) {
  let html = '';
  const pages = [
    ...services.map((s) => ({ path: `/services/${s.slug}`, title: `${s.title} | Netra Dynamics`, description: `${s.title}: ${serviceContent[s.slug].overview}` })),
    { path: '/privacy', title: 'Privacy Policy | Netra Dynamics' },
    { path: '/terms', title: 'Terms of Use | Netra Dynamics' },
  ];
  return {
    name: 'seo-files',
    transformIndexHtml: {
      order: 'post',
      handler(src) {
        html = src.replaceAll('__SITE_URL__', site);
        return html;
      },
    },
    generateBundle: { order: 'post', handler() {
      const paths = ['/', ...pages.map((p) => p.path)];
      const today = new Date().toISOString().slice(0, 10);
      if (site) {
        const urls = paths.map((p) => `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.7'}</priority></url>`).join('\n');
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${site ? `Sitemap: ${site}/sitemap.xml\n` : ''}` });

      if (!html) return;
      for (const p of pages) {
        let out = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(p.title)}</title>`);
        const set = (re, value) => { out = out.replace(re, (m, a) => `${a}${attr(value)}"`); };
        set(/(<link rel="canonical" href=")[^"]*"/, site + p.path);
        set(/(<meta property="og:title" content=")[^"]*"/, p.title);
        set(/(<meta name="twitter:title" content=")[^"]*"/, p.title);
        if (p.description) {
          const d = clip(p.description);
          set(/(<meta name="description" content=")[^"]*"/, d);
          set(/(<meta property="og:description" content=")[^"]*"/, d);
          set(/(<meta name="twitter:description" content=")[^"]*"/, d);
        }
        this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}/index.html`, source: out });
      }
    } },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  // on Vercel, fall back to the project's own address so canonical links and the sitemap are never empty
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const site = (env.VITE_SITE_URL || (vercelHost ? `https://${vercelHost}` : '')).replace(/\/$/, '');
  return {
    plugins: [react(), seoFiles(site)],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(site) },
    server: { port: 5173, proxy: { '/api': 'http://localhost:5001' } },
  };
});
