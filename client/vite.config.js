import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { services } from './src/data.js';

// Fills the __SITE_URL__ placeholders in index.html and writes robots.txt + sitemap.xml.
// Set VITE_SITE_URL (e.g. https://www.yourdomain.com) before building for production.
function seoFiles(site) {
  return {
    name: 'seo-files',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', site),
    generateBundle() {
      const paths = ['/', ...services.map((s) => `/services/${s.slug}`), '/privacy', '/terms'];
      const today = new Date().toISOString().slice(0, 10);
      if (site) {
        const urls = paths.map((p) => `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.7'}</priority></url>`).join('\n');
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${site ? `Sitemap: ${site}/sitemap.xml\n` : ''}` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const site = (env.VITE_SITE_URL || '').replace(/\/$/, '');
  return {
    plugins: [react(), seoFiles(site)],
    server: { port: 5173, proxy: { '/api': 'http://localhost:5001' } },
  };
});
