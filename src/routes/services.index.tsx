import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Search, Megaphone, Sparkles, BarChart3 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AsraX Media" },
      { name: "description", content: "Google Ads, SEO, Social Media, Content & Creative, and Performance Reporting. Everything you need to grow — under one roof." },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  { to: "/services/google-ads", icon: Target, title: "Google Ads",
    body: "Search, Performance Max, and Shopping campaigns engineered around your real ROAS goals." },
  { to: "/services/seo", icon: Search, title: "Search Engine Optimisation",
    body: "Technical SEO, content strategy, and authority building that compound into a steady lead engine." },
  { to: "/services/social-media", icon: Megaphone, title: "Social Media Marketing",
    body: "Strategy, content, and community for LinkedIn, Instagram, and Meta — built to convert." },
  { to: "/services/content", icon: Sparkles, title: "Content & Creative",
    body: "Landing pages, ad creatives, blogs, and email — written around your buyer." },
  { to: "/services/reporting", icon: BarChart3, title: "Performance Reporting & Strategy",
    body: "Live dashboards, monthly executive reports, and quarterly strategy reviews." },
];

function ServicesIndex() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl">
            Everything you need to grow, <span className="text-gradient-brand">under one roof.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
            One senior team. Five connected services. Built around the numbers that move your business — not the ones that look good in a slide deck.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background transition-colors group-hover:bg-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 flex-1 text-ink-soft">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </SiteShell>
  );
}
