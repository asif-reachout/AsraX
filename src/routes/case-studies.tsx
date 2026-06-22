import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real growth, real numbers | AsraX Media" },
      { name: "description", content: "Real campaigns we've run. Real numbers we've moved. ROAS, leads, pipeline and organic growth across eCommerce, SaaS, real estate and more." },
    ],
  }),
  component: CaseStudiesPage,
});

export const studies = [
  {
    slug: "d2c-skincare",
    clientName: "Radiant Skin Co.",
    headline: "3.2x ROAS in 90 days",
    img: "/img/case-d2c.jpg"
  },
  {
    slug: "b2b-saas",
    clientName: "SignaFlow SaaS",
    headline: "127% organic traffic growth in 6 months",
    img: "/img/case-b2b.jpg"
  },
  {
    slug: "real-estate",
    clientName: "Aura Properties",
    headline: "48 qualified leads / month at $22 CPL",
    img: "/img/case-realestate.jpg"
  },
  {
    slug: "local-service",
    clientName: "Prime HVAC Solutions",
    headline: "4.6x return on ad spend in Q1",
    img: "/img/case-localservice.jpg"
  },
  {
    slug: "founder-linkedin",
    clientName: "Aero Logistics",
    headline: "60+ inbound enquiries from organic LinkedIn",
    img: "/img/case-founder.jpg"
  },
  {
    slug: "saas-conversion",
    clientName: "MetricsHub SaaS",
    headline: "Landing page CVR from 1.7% → 4.9%",
    img: "/img/case-conversion.jpg"
  },
];

function CaseStudiesPage() {
  const location = useLocation();
  const isIndex = location.pathname === "/case-studies" || location.pathname === "/case-studies/";

  if (!isIndex) {
    return <Outlet />;
  }

  return (
    <SiteShell>
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center pt-24 pb-[100px] max-md:py-[40px] text-white"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.65), rgba(26, 26, 26, 0.85)), url('/img/about-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative max-w-4xl">
          <p className="eyebrow text-brand-glow">CASE STUDIES</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl text-white">
            Real clients. <span className="text-gradient-brand">Real results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl text-balance">
            See how we've helped ambitious brands grow through strategy and relentless execution.
          </p>
        </div>
      </section>

      {/* CONTENT LISTING SECTION */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-brand hover:shadow-card hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-video w-full overflow-hidden border-b border-border bg-surface">
                  <img
                    src={s.img}
                    alt={s.clientName}
                    className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {s.clientName}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">
                    {s.headline}
                  </p>
                  <div className="mt-6 border-t border-border/60 pt-4 text-center">
                    <Link
                      to={`/case-studies/$slug`}
                      params={{ slug: s.slug }}
                      className="btn-ghost w-full py-2 flex items-center justify-center gap-2"
                    >
                      Read Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        heading="Want results like these for your brand?"
        sub="Tell us about your business — we'll show you exactly where the leverage is."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
