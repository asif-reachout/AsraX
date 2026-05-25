import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { SiteShell } from "./SiteShell";
import { FinalCTA } from "./CTA";

export interface ServicePageProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  introHeading: string;
  introParagraphs: [string, string];
  features: string[];
  approachHeading: string;
  approachParagraph: string;
  processHeading: string;
  steps: { title: string; body: string }[];
  resultsHeading: string;
  results: string[];
  packages: { name: string; price: string; popular?: boolean; bullets: string[] }[];
  faqs: { q: string; a: string }[];
  finalHeading: string;
}

export function ServicePage(p: ServicePageProps) {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="fade-up">
            <p className="eyebrow">{p.eyebrow ?? "AsraX Media — Growth Partner Services"}</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft text-balance">{p.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/case-studies" className="btn-ghost">See the work</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-square rounded-[2rem] border border-border bg-card p-8 shadow-card">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent" />
              <div className="relative grid h-full grid-cols-2 gap-4">
                {p.features.slice(0, 4).map((f) => (
                  <div key={f} className="flex flex-col justify-between rounded-2xl border border-border bg-background p-5">
                    <Check className="h-5 w-5 text-brand" />
                    <p className="text-sm font-semibold">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="text-4xl font-bold leading-tight text-balance sm:text-5xl">{p.introHeading}</h2>
          <div className="space-y-5 text-lg text-ink-soft">
            <p>{p.introParagraphs[0]}</p>
            <p>{p.introParagraphs[1]}</p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-surface">
        <p className="eyebrow">What's included</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Everything you get.</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f, i) => (
            <div key={f} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-base font-semibold">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">{p.approachHeading}</h2>
          </div>
          <p className="text-lg text-ink-soft">{p.approachParagraph}</p>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-foreground text-background">
        <p className="eyebrow text-brand-glow">The process</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{p.processHeading}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {p.steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-background/10 bg-background/5 p-6">
              <div className="text-sm font-semibold text-brand-glow">Step {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-background/70">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section>
        <p className="eyebrow">Proof</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{p.resultsHeading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {p.results.map((r) => (
            <div key={r} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="text-3xl font-bold text-gradient-brand">↗</div>
              <p className="mt-4 text-lg font-semibold leading-snug">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-surface">
        <div className="text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Engagements start at $1,000 / month.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Pick the package that fits where your business is right now. All packages include senior strategy, weekly optimisation, and transparent reporting.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {p.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                pkg.popular
                  ? "border-transparent bg-foreground text-background shadow-brand"
                  : "border-border bg-card"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className={`mt-2 text-3xl font-bold ${pkg.popular ? "text-brand-glow" : "text-foreground"}`}>{pkg.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {pkg.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className={`mt-0.5 h-4 w-4 flex-none ${pkg.popular ? "text-brand-glow" : "text-brand"}`} />
                    <span className={pkg.popular ? "text-background/85" : "text-ink-soft"}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={pkg.popular ? "btn-brand mt-8" : "btn-dark mt-8"}
              >
                Book a Strategy Call
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl text-balance">Questions you're probably asking.</h2>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {p.faqs.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </Section>

      <FinalCTA heading={p.finalHeading} sub="Book a free 30-minute strategy call — no pitch, just a useful conversation about your numbers." />
    </SiteShell>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={className}>
      <div className="container-x py-24">{children}</div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen((v) => !v)} className="block w-full px-6 py-5 text-left">
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-none text-ink-soft transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-ink-soft">{a}</p>}
    </button>
  );
}
