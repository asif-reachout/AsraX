import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Target, Search, Megaphone, Sparkles, Star, AlertCircle, FileText, TrendingUp, UserCheck, MonitorSmartphone, BarChart3, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
      { name: "description", content: "A growth partner that keeps every result transparent. Website development, content, SEO, paid ads, social, and performance reporting — built around leads and revenue." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    to: "/services/website-development",
    icon: MonitorSmartphone,
    title: "Website Development",
    body: "You get a site built to convert, not just to look good. Every page is built around clear calls to action and clean tracking, so the traffic your other campaigns generate actually turns into leads instead of leaking out the back door.",
    cta: "See Our Website Development Services"
  },
  {
    to: "/services/content",
    icon: Sparkles,
    title: "Content Marketing",
    body: "You get content that answers your customers' real questions, builds your authority in Google and AI search results alike, and gives your sales team material that actually closes deals.",
    cta: "Read About Our Content Marketing Services"
  },
  {
    to: "/services/seo",
    icon: Search,
    title: "SEO / AEO / GEO",
    body: "You get search visibility that brings in the right traffic, not just more of it. Your rankings, your content and your technical SEO work together, so growth in traffic actually turns into growth in leads.",
    cta: "Explore Our SEO Services"
  },
  {
    to: "/services/google-ads",
    icon: Target,
    title: "Paid Ads",
    body: "You get campaigns built around your actual sales goals, not just clicks. Every dollar of your ad spend gets tracked back to leads and revenue, so you always know exactly what's working and what needs to change.",
    cta: "Discover Our Paid Ads Services"
  },
  {
    to: "/services/social-media",
    icon: Megaphone,
    title: "Social Media Marketing",
    body: "You get a social presence that builds trust with people who are already looking for what you sell, on the platforms your customers actually use.",
    cta: "Uncover Our Social Media Marketing Services"
  },
  {
    to: "/services/reporting",
    icon: BarChart3,
    title: "Performance Reporting",
    body: "You get clear, plain-language reporting that ties every channel back to leads and revenue, so you always know what's working and where your investment is going.",
    cta: "See How We Report On Performance"
  }
];

const testimonials = [
  {
    quote: "We'd tried managing things in-house before bringing AsraX Media on, and the difference was immediate. They took the time to actually understand our business before touching a single campaign, and the weekly updates kept us in the loop without needing to chase anyone down. Our pipeline has looked healthier every month since.",
    who: "Google Review"
  },
  {
    quote: "Great experience working with this team. They helped improve our entire marketing funnel, not just bring in leads. Communication was clear, they were proactive with suggestions, and we saw noticeable improvements in both lead quality and conversions.",
    who: "Shawn P., Google Review"
  }
];

const caseStudies = [
  {
    slug: "montessori-toys",
    img: "/img/case-d2c.jpg",
    client: "Montessori Toys",
    result: "ROAS from 209.93% to 338.43%",
    summary: "Audit-first rebuild of the account, fixed conversion tracking, and a Shopping-led structure that scaled spend and profit together."
  },
  {
    slug: "greensonic",
    img: "/img/case-b2b.jpg",
    client: "Greensonic",
    result: "0 to 1.61K Conversions in 8 Months",
    summary: "Built a paid acquisition channel from scratch in a niche marine market — 525K impressions at a 2.56% conversion rate."
  },
  {
    slug: "maranatha-pediatrics",
    img: "/img/case-localservice.jpg",
    client: "Maranatha Pediatrics",
    result: "Cost Per Conversion Down To $12.64",
    summary: "A phased audience, conversion and scaling plan took CTR from 6.19% to 10.39% and conversions from 7 to 1,220."
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
        <div className="absolute inset-0 bg-grid opacity-100 z-10" />

        <div className="container-x relative z-20 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="fade-up">
            <p className="eyebrow text-brand-glow">ASRAX MEDIA · TURNING BRANDS INTO BELIEFS</p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-balance sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Full Funnel Marketing Agency for <span className="text-gradient-brand">Global Brands</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300 sm:text-xl text-balance">
              A growth partner that keeps every result transparent.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/case-studies" className="btn-ghost bg-transparent! text-white! hover:bg-white/10! border-white/30">See Our Work <ArrowRight className="h-4 w-4" /></Link>
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
                <KpiCard label="Revenue" to={184} prefix="$" suffix="K" delta="+38%" />
                <KpiCard label="ROAS" to={4.6} decimals={1} suffix="x" delta="+1.2x" />
                <KpiCard label="CPL" to={22} prefix="$" delta="-41%" />
                <KpiCard label="Leads" to={612} delta="+212%" />
              </div>
              <div className="mt-6">
                <div className="flex h-32 items-end gap-1.5">
                  {[35, 48, 42, 60, 55, 72, 68, 85, 78, 95, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="grow-bar flex-1 rounded-t-md bg-linear-to-t from-brand to-brand-glow opacity-90"
                      style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                    />
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
            <p className="eyebrow">THE PAIN POINTS WE SOLVE</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Is This Where Your Marketing Feels Stuck?</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Clicks, not customers", d: "You're spending on ads that generate clicks, not paying customers." },
              { t: "Traffic up, leads flat", d: "Your SEO traffic is climbing, but leads stay flat, and it's hard to pin down why." },
              { t: "No clear picture", d: "You can't tell what's actually working, because your tracking is broken or scattered across five different dashboards." },
              { t: "A new coordinator every quarter", d: "You're stuck explaining your strategy to a new coordinator every few months, instead of talking to the people actually running it." }
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
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-2xl text-base text-ink-soft text-balance">
              You don't have to accept any of that as normal. It isn't and it's exactly what we fix.
            </p>
            <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 4 — SERVICES SECTION */}
      <section className="section-content">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">OUR SERVICES</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Everything Your Business Needs To Grow</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    {s.cta} <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
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
          <p className="eyebrow text-brand-glow">TESTIMONIALS</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl text-balance">Real Results, In Our Clients' Own Words</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.who} className="flex flex-col rounded-3xl border border-background/10 bg-background/5 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <GoogleG className="h-5 w-5" />
                  <div className="flex gap-1 text-brand-glow">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
                <p className="flex-1 text-base text-background/80 leading-relaxed">"{t.quote}"</p>
                <p className="mt-6 text-sm font-semibold">— {t.who}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/about" className="btn-brand">Learn More About AsraX Media <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 6 — PROMISES SECTION */}
      <section className="bg-surface section-content">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">OUR STANDARDS</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">The Standards You Can Hold Us To</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Transparency", d: "You always know exactly where your budget goes, every single month.", icon: FileText },
              { t: "Results", d: "You get campaigns that get judged on revenue and leads, not impressions.", icon: TrendingUp },
              { t: "Accountability", d: "If something isn't working, you get told, and it gets fixed.", icon: ShieldCheck },
              { t: "Solutions", d: "You get strategic thinking paired with fast execution, every time.", icon: UserCheck }
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
            <p className="text-base font-semibold text-ink-soft">Ready to grow your business?</p>
            <Link to="/contact" className="btn-brand">Book Your Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 7 — PROCESS SECTION */}
      <section className="section-content">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">OUR METHOD</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Here's How You Get Started</h2>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">
              Getting started is simple, and every step is built around your business from day one.
            </p>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4 max-md:gap-12">
            {/* Desktop connecting lines */}
            <div className="absolute top-1/4 left-[10%] right-[10%] h-px bg-border max-md:hidden z-0" />

            {[
              { n: "01", t: "Discovery Call", b: "You share your goals, your market and where growth is stalling right now." },
              { n: "02", t: "Audit & Strategy", b: "Your current marketing, site and data get reviewed, and we map the right mix of channels paid, organic, content, or site around your goals and budget." },
              { n: "03", t: "Execution & Rollout", b: "Your plan goes live across the channels that make sense for your business, from site updates to content to campaigns." },
              { n: "04", t: "Reporting & Scale", b: "You see the results in plain reporting, and as they grow, your investment scales with them." }
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
          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
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
            <p className="eyebrow">ABOUT US</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Full transparency, and a team that stays hands-on.</h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              AsraX Media is built around one simple standard: full transparency with your business, and a team that stays hands-on with your account long after the contract is signed.
            </p>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">
              Every person on this team is here because they're genuinely good at what they do hands-on experts who show up for your account like it's their own, and who never lose sight of the number that actually matters to you: revenue.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-brand">Learn More About AsraX Media <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — EXPLORE OUR WORK */}
      <section className="section-content">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="eyebrow">FEATURED CLIENTS</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">See The Results Behind The Strategy</h2>
              <p className="mt-4 text-lg text-ink-soft leading-relaxed">
                Numbers tell the real story, and the case studies here show exactly how a full funnel marketing partner turns strategy into revenue for real brands like yours. Take a look at the work, and the results behind it, before you decide who gets to run your next campaign.
              </p>
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
        heading="Ready To Grow With A True Growth Partner?"
        sub="Book a free strategy call below and find out exactly what's possible for your business this quarter."
        btnText="Book a Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google" role="img">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.1h12.1c-.2 1.8-1.6 4.6-4.5 6.5l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.9l-7.1 5.5C8.1 40.8 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 27.7c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 16.4 2 20.1 2 23.9s.9 7.5 2.4 10.5l7.1-6.7z" />
      <path fill="#EA4335" d="M24 10.4c4.1 0 6.9 1.8 8.5 3.3l6.1-6C34.9 4.2 29.9 2 24 2 15.4 2 8.1 7.2 4.4 14.4l7.1 5.5C13.3 14.2 18.2 10.4 24 10.4z" />
    </svg>
  );
}

// Counts up from zero on mount so the "Live Dashboard" reads as live.
// Initial state is the target value, so prerendered HTML and hydration match.
function useCountUp(to: number, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((to * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, decimals, duration]);

  return value;
}

function KpiCard({ label, to, delta, prefix = "", suffix = "", decimals = 0 }: { label: string; to: number; delta: string; prefix?: string; suffix?: string; decimals?: number }) {
  const value = useCountUp(to, decimals);
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold text-foreground tabular-nums">
        {prefix}{value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
      </p>
      <p className="mt-1 text-xs font-semibold text-brand">{delta}</p>
    </div>
  );
}
