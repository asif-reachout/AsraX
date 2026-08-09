import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Clients. Real Revenue. | AsraX Media" },
      { name: "description", content: "Real campaigns, real numbers: ROAS, conversions and cost-per-conversion results across e-commerce, marine, clothing and healthcare brands." },
    ],
  }),
  component: CaseStudiesPage,
});

export const studies = [
  {
    slug: "montessori-toys",
    clientName: "Montessori Toys",
    headline: "ROAS from 209.93% to 338.43%",
    img: "/img/case-d2c.jpg"
  },
  {
    slug: "greensonic",
    clientName: "Greensonic",
    headline: "0 to 1.61K conversions in 8 months",
    img: "/img/case-b2b.jpg"
  },
  {
    slug: "ecommerce-clothing",
    clientName: "E-Commerce Clothing Brand",
    headline: "7.61 purchase ROAS on Facebook",
    img: "/img/case-conversion.jpg"
  },
  {
    slug: "maranatha-pediatrics",
    clientName: "Maranatha Pediatrics",
    headline: "Cost per conversion down to $12.64",
    img: "/img/case-localservice.jpg"
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
            Real Clients. <span className="text-gradient-brand">Real Revenue.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl text-balance">
            Here's how ambitious businesses grew through strategy built around revenue.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
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
        heading="Want Your Results Featured Here Next?"
        sub="Book a free strategy call and find out what your business's numbers could look like here."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
