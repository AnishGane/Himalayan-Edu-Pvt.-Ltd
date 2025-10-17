import fs from 'fs';
import { courses, ServiceLists } from './src/constants/data.js';

const domain = 'https://localhost:5173';

const staticUrls = [
  '/',
  '/about/introduction',
  '/about/message',
  '/about/faq',
  '/about/why-choose-us',
  '/services',
  '/courses',
  '/gallery',
  '/contact-us',
];

let urls = [];

// Add static pages
staticUrls.forEach((url) => {
  urls.push(`
  <url>
    <loc>${domain}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

// Add dynamic courses
courses.forEach((course) => {
  urls.push(`
  <url>
    <loc>${domain}/courses/${course.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
});

// Add dynamic services
ServiceLists.forEach((service) => {
  const slug = service.title.toLowerCase().replace(/ /g, '-');
  urls.push(`
  <url>
    <loc>${domain}/services/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
});

// Wrap into XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>`;

// Write to public folder
fs.writeFileSync('./public/sitemap.xml', sitemap.trim());
console.log('✅ Sitemap generated successfully at /public/sitemap.xml');
