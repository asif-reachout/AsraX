import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/about", "/contact", "/case-studies", "/blog",
          "/services", "/services/website-development", "/services/google-ads", "/services/seo",
          "/services/social-media", "/services/content", "/services/reporting",
          "/careers",
          "/case-studies/montessori-toys", "/case-studies/greensonic",
          "/case-studies/ecommerce-clothing", "/case-studies/maranatha-pediatrics",
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
