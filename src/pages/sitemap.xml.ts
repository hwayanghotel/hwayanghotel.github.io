import type { APIRoute } from 'astro';
import { rooms, site } from '../data/site';
export const GET: APIRoute = () => {
  const routes = [
    '/',
    '/rooms/',
    ...rooms.map((room) => `/rooms/${room.slug}/`),
    '/valley/',
    '/dining/',
    '/visit/',
    '/guide/',
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    routes.map((route) => `<url><loc>${site.url}${route}</loc></url>`).join('') +
    '</urlset>';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
