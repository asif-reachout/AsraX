import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Target, LineChart, Megaphone, Search, BarChart3, Globe } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AsraX Media — Marketing that moves the needle" },
      { name: "description", content: "Growth partner for ambitious brands. Google Ads, SEO, Social, and Content — built around revenue, not vanity metrics." },
      { property: "og:title", content: "AsraX Media — Turning Brands into Beliefs" },
      { property: "og:description", content: "Growth partner for ambitious brands. Strategy, ads, content, and reporting under one team." },
    ],
  }),
  component: HomePage,
});

const services = [
  { to: "/services/google-ads", icon: Target, title: "Google Ads",
    body: "Campaigns built to convert. Search, Performance Max, and Shopping ads engineered around your real ROAS goals — not impressions, not clicks, not promises." },
  { to: "/services/seo", icon: Search, title: "Search Engine Optimisation",
    body: "Traffic that compounds. Technical SEO, content strategy, and authority building that turn your website into a steady, long-term lead engine." },
  { to: "/services/social-media", icon: Megaphone, title: "Social Media Marketing",
    body: "Content that builds belief, not just likes. Strategy, creation, and community for LinkedIn, Instagram, and Meta — so your brand stops scrolling past people and starts staying with them." },
  { to: "/services/content", icon: Sparkles, title: "Content & Creative",
    body: "Words and visuals that sell. Landing pages, ad creatives, blogs, and LinkedIn content — written around your buyer, designed to convert." },
  { to: "/services/reporting", icon: BarChart3, title: "Performance Reporting & Strategy",
    body: "Clear numbers, sharper decisions. Monthly reports, dashboards, and strategy calls that turn data into your next move." },
];

const promises = [
  "Strategy first — every campaign starts with the number we're trying to move.",
  "Senior eyes on every account — no juniors learning on your budget.",
  "Transparent reporting — you see what we see, every week.",
  "Built for the long game — we optimise for revenue, not just clicks.",
];

const markets = ["United States", "United Kingdom", "Canada", "Australia", "UAE"];
const industries = [
  "eCommerce & D2C brands",
  "SaaS & Tech companies",
  "Coaches & personal brands",
  "Local service businesses",
  "Real estate agencies & brokers",
];

const caseStudies = [
  { tag: "D2C Skincare Brand", title: "3.2x ROAS in 90 days", channel: "Google Ads" },
  { tag: "B2B SaaS Startup", title: "127% growth in organic traffic", channel: "SEO" },
  { tag: "Real Estate Agency", title: "48 qualified leads / month at $22 CPL", channel: "Google Ads" },
  { tag: "Local Service Business", title: "4.6x return on ad spend in Q1", channel: "Performance Max" },
];

const testimonials = [
  { pull: "Doubled our leads in 60 days.",
    quote: "AsraX took over our Google Ads after months of wasted spend with another agency. Within 60 days they cut our cost per lead in half and doubled the volume. They actually report on revenue, not just clicks.",
    who: "Daniel R., D2C Founder" },
  { pull: "Finally, a partner that thinks like an operator.",
    quote: "Our previous agencies sent screenshots of impressions. AsraX sends a one-page report on pipeline. Night and day.",
    who: "Priya M., SaaS COO" },
  { pull: "127% organic traffic in 6 months.",
    quote: "They rebuilt our content engine around buyer intent. Organic is now the #1 lead source in the business.",
    who: "James K., B2B Marketing Lead" },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative grid gap-16 py-24 md:py-36 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="fade-up">
            <p className="eyebrow">AsraX Media — Turning Brands into Beliefs</p>
            <h1 className="mt-6 text-5xl font-bold leading-[0.98] text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              Marketing that <span className="text-gradient-brand">moves the needle.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-soft sm:text-xl text-balance">
              We're the growth partner for ambitious brands. Google Ads, SEO, Social, and Content — built around revenue, not vanity metrics.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/case-studies" className="btn-ghost">See Our Work <ArrowUpRight className="h-4 w-4" /></Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              <Stat n="3.2x" label="avg ROAS lift" />
              <Stat n="127%" label="organic growth" />
              <Stat n="48/mo" label="leads delivered" />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-[2rem] border border-border bg-card p-6 shadow-card">
              <div className="absolute -right-6 -top-6 grid h-24 w-24 place-items-center rounded-full bg-brand text-brand-foreground shadow-brand">
                <div className="text-center">
                  <div className="text-xl font-bold">↗</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider">Growth</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Q1 Performance</p>
                  <p className="text-base font-semibold">Live Dashboard</p>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => <span key={i} className="h-2 w-2 rounded-full bg-border" />)}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <KpiCard label="Revenue" value="$184K" delta="+38%" />
                <KpiCard label="ROAS" value="4.6x" delta="+1.2x" />
                <KpiCard label="CPL" value="$22" delta="-41%" />
                <KpiCard label="Leads" value="612" delta="+212%" />
              </div>
              <div className="mt-6">
                <div className="flex h-32 items-end gap-1.5">
                  {[35, 48, 42, 60, 55, 72, 68, 85, 78, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-brand-glow opacity-90" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                  <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-foreground py-6 text-background">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-background/70">
          <span className="text-background/40">Trusted by ambitious brands in</span>
          {markets.map((m) => (
            <span key={m} className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-brand-glow" /> {m}
            </span>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <section className="container-x py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">One team</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-balance sm:text-5xl md:text-6xl">
              Complete marketing under one roof.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-ink-soft">
            <p>Marketing shouldn't feel like piecing together freelancers — chasing reports, juggling tools, hoping someone is watching the numbers.</p>
            <p>We bring strategy, ads, content, and reporting under one team — so growth becomes a system, not a guessing game.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="bg-surface">
        <div className="container-x py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Everything you need to grow.</h2>
            </div>
            <Link to="/contact" className="btn-dark">Talk to a strategist <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-16 space-y-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group grid gap-6 rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:shadow-card md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-semibold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-background transition-colors group-hover:bg-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">{s.title}</h3>
                    <p className="mt-2 max-w-2xl text-ink-soft">{s.body}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Discover <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ASRAX */}
      <section className="relative overflow-hidden bg-foreground py-28 text-background">
        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand-glow">Growth partner</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">
              A growth partner, <span className="text-brand-glow">not just an agency.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-background/70">
              We don't sell hours or vanity metrics. We invest in your numbers like they're ours — building campaigns, content, and reporting systems that move pipeline, leads, and revenue. When you win, we win.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-glow hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {promises.map((p, i) => (
              <div key={p} className="rounded-2xl border border-background/10 bg-background/5 p-6">
                <div className="text-xs font-semibold text-brand-glow">PROMISE {i + 1}</div>
                <p className="mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS / INDUSTRIES */}
      <section className="container-x py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Markets</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Built for ambitious brands worldwide.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {markets.map((m) => (
                <span key={m} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{m}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Who we work with best.</h2>
            <ul className="mt-8 space-y-3">
              {industries.map((ind) => (
                <li key={ind} className="flex items-center gap-3 text-lg">
                  <Check className="h-5 w-5 text-brand" /> {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface">
        <div className="container-x py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">The process</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">A process designed around your growth.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Discovery & Audit", b: "We dig into your numbers, your funnel, and your audience to find the real growth levers — not guesses." },
              { n: "02", t: "Strategy & Setup", b: "A clear 90-day plan with channels, budgets, KPIs, and creative — built around your business goals, not a template." },
              { n: "03", t: "Execute & Optimise", b: "We run, test, and report weekly — turning data into sharper campaigns every cycle." },
            ].map((step) => (
              <div key={step.n} className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="text-5xl font-bold text-gradient-brand">{step.n}</div>
                <h3 className="mt-6 text-2xl font-bold">{step.t}</h3>
                <p className="mt-3 text-ink-soft">{step.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="container-x py-24">
        <p className="eyebrow text-center">Recognition & certifications</p>
        <h2 className="mt-3 text-center text-3xl font-bold sm:text-4xl">Trusted partners.</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {["Google Ads Certified", "Meta Business Partner", "Fiverr Pro", "Upwork Top Rated", "LinkedIn Partner"].map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-card px-6 py-8 text-center">
              <p className="text-sm font-semibold text-ink-soft">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-foreground py-28 text-background">
        <div className="container-x">
          <p className="eyebrow text-brand-glow">What clients say</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Results, in their words.</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.pull} className="flex flex-col rounded-3xl border border-background/10 bg-background/5 p-8">
                <h3 className="text-2xl font-bold leading-tight text-brand-glow">"{t.pull}"</h3>
                <p className="mt-6 flex-1 text-background/70">{t.quote}</p>
                <p className="mt-6 text-sm font-semibold">— {t.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container-x py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Explore our work.</h2>
            <p className="mt-3 text-ink-soft">Real campaigns, real numbers, real growth.</p>
          </div>
          <Link to="/case-studies" className="btn-ghost">All case studies <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c) => (
            <Link key={c.title} to="/case-studies" className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-card">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">{c.channel}</span>
              <h3 className="mt-4 text-xl font-bold leading-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.tag}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </SiteShell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-gradient-brand">{n}</div>
      <div className="mt-1 text-xs font-medium text-ink-soft">{label}</div>
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  const up = delta.startsWith("+") || delta.startsWith("-4") === false && delta.startsWith("-") === false;
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
      <p className={`mt-1 text-xs font-semibold ${up ? "text-brand" : "text-brand"}`}>{delta}</p>
    </div>
  );
}
