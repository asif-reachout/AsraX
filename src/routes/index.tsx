import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Target, Search, Megaphone, Sparkles, Star, AlertCircle, FileText, Calendar, TrendingUp, UserCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AsraX Media — Marketing that moves the needle." },
      { name: "description", content: "Growth partner for ambitious brands. Google Ads, SEO, Social, and Content — built around revenue, not vanity metrics." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    to: "/services/google-ads",
    icon: Target,
    title: "Google Ads",
    body: "Turn clicks into paying customers. Search, Performance Max, and Shopping campaigns engineered around your ROAS goals."
  },
  {
    to: "/services/seo",
    icon: Search,
    title: "SEO",
    body: "Build traffic you own — no ad spend required. Technical audits, content plans, and authority building that compound."
  },
  {
    to: "/services/social-media",
    icon: Megaphone,
    title: "Social Media Marketing",
    body: "Build your brand and fill your pipeline. Platform management, custom graphics, reels, and analytics engineered to convert."
  },
  {
    to: "/services/content",
    icon: Sparkles,
    title: "Content Marketing",
    body: "Attract, educate, and convert ideal clients. SEO blogs, email copy, lead magnets, and website copy distribution."
  }
];

const testimonials = [
  {
    pull: "Doubled our leads in 60 days.",
    quote: "AsraX took over our Google Ads after months of wasted spend. Within 60 days they cut our cost per lead in half and doubled the volume. They actually report on revenue, not just clicks.",
    who: "Daniel R., D2C Founder"
  },
  {
    pull: "Finally, a partner that thinks like an operator.",
    quote: "Our previous agencies sent screenshots of impressions. AsraX sends a one-page report on pipeline and ROI. Night and day.",
    who: "Priya M., SaaS COO"
  },
  {
    pull: "127% organic traffic in 6 months.",
    quote: "They rebuilt our content engine around buyer intent. Organic search is now the #1 lead source in our business.",
    who: "James K., B2B Marketing Lead"
  }
];

const caseStudies = [
  {
    slug: "d2c-skincare",
    img: "/img/case-d2c.jpg",
    client: "D2C Skincare Brand",
    result: "3.2x ROAS in 90 days",
    summary: "Rebuilt account structure and shifted budget into Performance Max with creative cycles."
  },
  {
    slug: "b2b-saas",
    img: "/img/case-b2b.jpg",
    client: "B2B SaaS Startup",
    result: "127% Organic Traffic Growth",
    summary: "Technical SEO overhaul and intent-mapped content engine turned organic into #1 lead source."
  },
  {
    slug: "real-estate",
    img: "/img/case-realestate.jpg",
    client: "Real Estate Agency",
    result: "48 Qualified Leads / Month at $22 CPL",
    summary: "Geo-targeted search and landing page testing cut CPL by 61% with a steady lead flow."
  }
];

const markets = ["United States", "United Kingdom", "Canada", "Australia", "UAE"];

function HomePage() {
  return (
    <SiteShell>
      {/* 1 — HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-[100px] max-md:py-[40px] text-white bg-neutral-950">
        {/* Background Earth Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0 opacity-80"
          poster="/img/home-hero.jpg"
        >
          <source src="/earth.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/60 to-neutral-950/80 z-10" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid opacity-10 z-10" />

        <div className="container-x relative z-20 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="fade-up">
            <p className="eyebrow text-brand-glow">ASRAX MEDIA — TURNING BRANDS INTO BELIEFS</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl lg:text-8xl text-white">
              Marketing that <span className="text-gradient-brand">moves the needle.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300 sm:text-xl text-balance">
              We're the growth partner for ambitious brands. Google Ads, SEO, Social, and Content — built around revenue, not vanity metrics.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/case-studies" className="btn-ghost bg-transparent! text-white! hover:bg-white/10! border-white/30">See Our Work <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <Stat n="3.2x" label="avg ROAS lift" dark />
              <Stat n="127%" label="organic growth" dark />
              <Stat n="48/mo" label="leads delivered" dark />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-4/5 rounded-4xl border border-border bg-card p-6 shadow-card text-foreground">
              <div className="absolute -right-6 -top-6 grid h-24 w-24 place-items-center rounded-full bg-brand text-brand-foreground shadow-brand">
                <div className="text-center">
                  <div className="text-xl font-bold">↗</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider">Growth</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Q1 Performance</p>
                  <p className="text-base font-semibold text-foreground">Live Dashboard</p>
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
                    <div key={i} className="flex-1 rounded-t-md bg-linear-to-t from-brand to-brand-glow opacity-90" style={{ height: `${h}%` }} />
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

      {/* 2 — STATS SLIDER */}
      <section className="relative overflow-hidden border-y border-border bg-foreground section-stats text-background flex items-center">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-foreground to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:paused">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center justify-around gap-12 px-6">
              <span className="text-background/50 font-semibold tracking-wider uppercase text-xs">Trusted by ambitious brands in</span>
              {markets.map((m) => (
                <span key={m} className="flex items-center gap-2 group">
                  <span className="h-2 w-2 rounded-full bg-brand-glow" />
                  <span className="text-base tracking-wide transition-colors group-hover:text-white">{m}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3 — PROBLEM SECTION */}
      <section className="bg-surface section-content">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">THE CHALLENGE</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Does any of this sound familiar?</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Wasting budget on ads", d: "Pouring money into campaigns that generate clicks but fail to convert into paying customers." },
              { t: "SEO sends reports, no leads", d: "Traffic charts are going up, but the telephone isn't ringing and inbox is empty." },
              { t: "Don't know what's working", d: "Conversion tracking is broken or data is buried across 5 dashboard pages." },
              { t: "No consistent leads", d: "A rollercoaster of high-lead months followed by dry spells that crush cash flow." }
            ].map((p, i) => (
              <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="btn-brand">Let's fix that — Book a Free Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 4 — SERVICES SECTION */}
      <section className="section-content">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">OUR SERVICES</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Everything you need to grow.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.to}
                  className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-card"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-background transition-colors group-hover:bg-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-ink-soft leading-relaxed">{s.body}</p>
                  <Link to={s.to} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — GOOGLE REVIEWS (REPOSITIONED TESTIMONIALS) */}
      <section className="bg-foreground section-content text-background">
        <div className="container-x">
          <p className="eyebrow text-brand-glow">GOOGLE REVIEWS</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Results, in their words.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.pull} className="flex flex-col rounded-3xl border border-background/10 bg-background/5 p-8">
                <div className="flex gap-1 mb-4 text-brand-glow">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <h3 className="text-xl font-bold leading-tight text-brand-glow">"{t.pull}"</h3>
                <p className="mt-4 flex-1 text-sm text-background/70 leading-relaxed">{t.quote}</p>
                <p className="mt-6 text-sm font-semibold">— {t.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PROMISES SECTION */}
      <section className="bg-surface section-content">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">OUR STANDARDS</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Standards we won't compromise.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Transparent monthly reporting", d: "Get raw monthly reports and dynamic dashboard links. No metrics manipulation, no smoke & mirrors.", icon: FileText },
              { t: "No long-term lock-in contracts", d: "We offer rolling monthly agreements. We'd rather earn your renewal every month with results.", icon: Calendar },
              { t: "Revenue-focused strategy, not vanity metrics", d: "We optimize for customer leads, sales pipeline, and bottom-line profit — not arbitrary clicks.", icon: TrendingUp },
              { t: "Dedicated account manager from day one", d: "Work directly with a senior strategist who understands your brand. No junior handoffs.", icon: UserCheck }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-brand transition-colors duration-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-base font-semibold text-ink-soft">Ready to grow? Book your free strategy call</p>
            <Link to="/contact" className="btn-brand">Book Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 7 — PROCESS SECTION */}
      <section className="section-content">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">OUR METHOD</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">A process built around scale.</h2>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4 max-md:gap-12">
            {/* Desktop connecting lines */}
            <div className="absolute top-1/4 left-[10%] right-[10%] h-px bg-border max-md:hidden z-0" />

            {[
              { n: "01", t: "Discovery Call", b: "Dig into numbers, historical margins, target audiences, and find levers." },
              { n: "02", t: "Strategy & Audit", b: "90-day execution roadmap detailing channels, metrics, and budget caps." },
              { n: "03", t: "Campaign Launch", b: "Implement tracking, build structures, and go live with assets." },
              { n: "04", t: "Reporting & Scale", b: "Analyze loops, scale winners, kill losers, and report transparent pipeline." }
            ].map((s) => (
              <div key={s.n} className="relative z-10 flex flex-col items-start bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:border-brand transition-colors">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-brand-foreground font-bold text-lg mb-6 shadow-brand/20 shadow-md">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — ABOUT US SECTION */}
      <section className="bg-surface section-content">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl border border-border shadow-lg">
            <img
              src="/img/team-office.jpg"
              alt="AsraX Media Team Office"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">ABOUT ASRAXMEDIA</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">We're not just an agency, we're your growth partner.</h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              We sit on your side of the table. We don't focus on impressions or clicks — we optimize for the pipeline metric that directly affects your bottom line. We build and execute integrated growth systems.
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — EXPLORE OUR WORK */}
      <section className="section-content">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">FEATURED CLIENTS</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Explore our work.</h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2 transition-all">
              All case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div
                key={c.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-card"
              >
                <div className="aspect-video w-full overflow-hidden border-b border-border bg-surface">
                  <img
                    src={c.img}
                    alt={c.client}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">{c.client}</h4>
                  <h3 className="mt-3 text-lg font-bold text-foreground leading-snug">{c.result}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft leading-relaxed">{c.summary}</p>
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <Link to="/case-studies/$slug" params={{ slug: c.slug }} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand">
                      Read Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <FinalCTA
        heading="Ready to grow your business?"
        sub="Book a free 30-minute strategy call — no commitments, just clarity."
        btnText="Book Your Free Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}

function Stat({ n, label, dark = false }: { n: string; label: string; dark?: boolean }) {
  return (
    <div>
      <div className="text-3xl font-bold text-gradient-brand">{n}</div>
      <div className={`mt-1 text-xs font-medium ${dark ? "text-neutral-400" : "text-ink-soft"}`}>{label}</div>
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  const up = delta.startsWith("+") || delta.startsWith("-4") === false && delta.startsWith("-") === false;
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold text-foreground">{value}</p>
      <p className={`mt-1 text-xs font-semibold ${up ? "text-brand" : "text-brand"}`}>{delta}</p>
    </div>
  );
}
