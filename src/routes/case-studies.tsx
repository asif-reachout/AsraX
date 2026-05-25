import { createFileRoute, Link } from "@tanstack/react-router";
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

const studies = [
  { channel: "Google Ads", industry: "D2C Skincare", headline: "3.2x ROAS in 90 days",
    summary: "Rebuilt account structure, fixed broken conversion tracking, and shifted budget into Performance Max with strong creative refresh cycles.",
    metrics: [{ k: "ROAS", v: "3.2x" }, { k: "CPA", v: "-46%" }, { k: "Revenue", v: "+118%" }] },
  { channel: "SEO", industry: "B2B SaaS", headline: "127% organic traffic growth in 6 months",
    summary: "Technical SEO overhaul, intent-mapped content engine, and authority building turned organic into the #1 lead source.",
    metrics: [{ k: "Organic traffic", v: "+127%" }, { k: "Top-3 keywords", v: "38" }, { k: "Demos / mo", v: "+74" }] },
  { channel: "Google Ads", industry: "Real Estate Agency", headline: "48 qualified leads / month at $22 CPL",
    summary: "Geo-targeted search + landing page testing cut CPL by 61% and delivered a steady pipeline of qualified buyer enquiries.",
    metrics: [{ k: "CPL", v: "$22" }, { k: "Leads / mo", v: "48" }, { k: "Show rate", v: "62%" }] },
  { channel: "Performance Max", industry: "Local Service Business", headline: "4.6x return on ad spend in Q1",
    summary: "Local PMax campaigns, smart bidding, and a tightened conversion funnel produced their best quarter on record.",
    metrics: [{ k: "ROAS", v: "4.6x" }, { k: "Spend", v: "+38%" }, { k: "Revenue", v: "+212%" }] },
  { channel: "Social Media", industry: "Founder LinkedIn", headline: "60+ inbound enquiries from organic LinkedIn",
    summary: "Founder-led content program: 4 weekly posts, sharp positioning, and disciplined engagement turned LinkedIn into a pipeline channel.",
    metrics: [{ k: "Followers", v: "+11.2k" }, { k: "Enquiries / Q", v: "60+" }, { k: "Branded search", v: "+3x" }] },
  { channel: "Content & Creative", industry: "SaaS Conversion", headline: "Landing page CVR from 1.7% → 4.9%",
    summary: "Rewrote the hero, restructured proof, and refreshed creative — nearly 3x conversion rate with zero added spend.",
    metrics: [{ k: "CVR", v: "4.9%" }, { k: "CAC", v: "-42%" }, { k: "MQLs", v: "+183%" }] },
];

function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Case studies</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl">
              Real campaigns. <span className="text-gradient-brand">Real numbers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl text-balance">
              Selected work across paid, SEO, social, and content. Every number below comes from real client accounts, not stock screenshots.
            </p>
          </div>

          <div className="hidden lg:flex lg:h-full lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-brand/20 blur-[50px]" />
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand/10 blur-[60px]" />
              
              <div className="relative grid gap-5">
                <div className="flex items-center justify-between rounded-3xl border border-border bg-card p-6 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Revenue Growth</p>
                    <p className="mt-1 text-4xl font-bold text-foreground">+212%</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <ArrowRight className="h-6 w-6 -rotate-45" />
                  </div>
                </div>
                
                <div className="ml-12 flex items-center justify-between rounded-3xl border border-border bg-surface p-6 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Return on Ad Spend</p>
                    <p className="mt-1 text-4xl font-bold text-foreground">3.2x</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <ArrowRight className="h-6 w-6 relative top-[2px] -rotate-45" />
                  </div>
                </div>

                <div className="mr-8 mt-2 flex items-center justify-between rounded-3xl border border-border bg-card p-6 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Cost Per Lead</p>
                    <p className="mt-1 text-4xl font-bold text-foreground">-61%</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                    <ArrowRight className="h-6 w-6 rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((s) => (
            <article key={s.headline} className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                <span className="text-brand">{s.channel}</span>
                <span className="text-muted-foreground">{s.industry}</span>
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-balance">{s.headline}</h2>
              <p className="mt-4 text-ink-soft">{s.summary}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {s.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="text-2xl font-bold text-gradient-brand">{m.v}</div>
                    <div className="text-xs text-muted-foreground">{m.k}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                Talk about a similar engagement <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA heading="Want results like these?" sub="Tell us about your business — we'll show you exactly where the leverage is." />
    </SiteShell>
  );
}
