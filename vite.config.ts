import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        server: {
          preset: 'static'
        },
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        pages: [
          { path: '/', prerender: { enabled: true } },
          { path: '/about', prerender: { enabled: true } },
          { path: '/contact', prerender: { enabled: true } },
          { path: '/case-studies', prerender: { enabled: true } },
          { path: '/case-studies/d2c-skincare', prerender: { enabled: true } },
          { path: '/case-studies/b2b-saas', prerender: { enabled: true } },
          { path: '/case-studies/real-estate', prerender: { enabled: true } },
          { path: '/case-studies/local-service', prerender: { enabled: true } },
          { path: '/case-studies/founder-linkedin', prerender: { enabled: true } },
          { path: '/case-studies/saas-conversion', prerender: { enabled: true } },
          { path: '/services', prerender: { enabled: true } },
          { path: '/services/seo', prerender: { enabled: true } },
          { path: '/services/google-ads', prerender: { enabled: true } },
          { path: '/services/social-media', prerender: { enabled: true } },
          { path: '/services/content', prerender: { enabled: true } },
          { path: '/services/reporting', prerender: { enabled: true } },
          { path: '/careers', prerender: { enabled: true } },
        ],
      }),
      viteReact(),
    ],
  };
});
