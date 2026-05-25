import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AsraX Media — Growth partner, not just an agency" },
      { name: "description", content: "AsraX Media is the growth partner for ambitious brands. We invest in your numbers like they're ours." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Operators, not vendors", b: "We sit on your side of the table. Decisions are made against pipeline and revenue — not retainer hours." },
  { t: "Senior eyes on every account", b: "No juniors learning on your budget. A senior strategist owns your account end-to-end." },
  { t: "Transparent by default", b: "You see what we see. Live dashboards, plain-English reports, no smoke and mirrors." },
  { t: "Built for the long game", b: "We optimise for revenue you'll still be earning in 12 months, not vanity metrics that look good this week." },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative py-28 md:py-36">
          <p className="eyebrow">About AsraX Media</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl">
            We turn marketing budgets into <span className="text-gradient-brand">growth engines.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
            AsraX Media is a global growth partner for ambitious brands in eCommerce, SaaS, real estate, and professional services. We build the marketing system most founders wish they had on day one.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Built by operators, for operators.</h2>
          </div>
          <div className="space-y-5 text-lg text-ink-soft">
            <p>
              AsraX Media was founded on a frustration we kept seeing — talented founders pouring money into ad accounts and content calendars without anyone owning the number that actually mattered.
            </p>
            <p>
              We built the agency we wished we could have hired: senior strategists, full-stack execution, weekly transparency, and a relentless focus on the metrics that move pipeline and revenue.
            </p>
            <p>
              Today, we work with brands across the US, UK, Canada, Australia, and the UAE — running their Google Ads, SEO, social, content, and reporting as one connected growth engine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "$4M+", l: "ad spend managed" },
              { n: "60+", l: "brands grown" },
              { n: "12", l: "industries served" },
              { n: "5", l: "global markets" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl font-bold text-brand-glow">{s.n}</div>
                <div className="mt-2 text-sm text-background/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <p className="eyebrow">What we stand for</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Four standards we won't compromise.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.t} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="text-sm font-semibold text-brand">0{i + 1}</div>
              <h3 className="mt-3 text-2xl font-bold">{v.t}</h3>
              <p className="mt-3 text-ink-soft">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">One team. Full ownership.</h2>
            <p className="mt-4 text-ink-soft text-lg">
              Every engagement is led by a senior strategist, supported by specialists in paid media, SEO, content, and analytics — all under one roof. No handoffs between agencies. No finger-pointing when something dips.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Senior strategist as your single point of contact",
              "Weekly optimisation cycles, not monthly",
              "Live dashboards updated daily",
              "Plain-English monthly executive reports",
              "Quarterly strategy reviews built around growth",
              "WhatsApp / Slack access between calls",
            ].map((x) => (
              <li key={x} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                <Check className="h-5 w-5 flex-none text-brand" />
                <span className="text-sm font-medium">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA heading="Let's build your growth engine." sub="30 minutes. No pitch. We'll look at your numbers and tell you where the leverage is." />
    </SiteShell>
  );
}
