import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "./SiteShell";
import { FinalCTA } from "./CTA";

export interface ServicePageProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introHeading: string;
  introParagraphs: string[];
  introImage: string;
  features: { title: string; desc: string }[];
  processHeading: string;
  steps: { title: string; body: string }[];
  results: { value: string; label: string }[];
  testimonial: { quote: string; author: string; role: string; image: string };
  faqs: { q: string; a: string }[];
  finalHeading: string;
}

export function ServicePage(p: ServicePageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <SiteShell>
      {/* 1. Hero (full-width image + dark overlay) */}
      <section
        className="relative overflow-hidden bg-cover bg-center section-hero-cta flex min-h-[400px] items-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url('${p.heroImage}')` }}
      >
        <div className="container-x w-full">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-glow">{p.eyebrow ?? "SERVICE"}</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
              {p.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-300 sm:text-xl text-balance">
              {p.subtitle}
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What It Looks Like (two-column: left = 3-4 paragraphs, right = photo) */}
      <section className="section-content bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{p.introHeading}</h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              {p.introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl border border-border shadow-lg">
            <img
              src={p.introImage}
              alt={p.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. What You Get (light grey background) */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">WHAT YOU GET</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything included in your {p.eyebrow ?? "Service"} plan.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {p.features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{f.title}</h4>
                  <p className="text-xs text-ink-soft mt-1 leading-normal">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Run It (white background, 4 horizontal steps / stacked mobile) */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">OUR PROCESS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{p.processHeading}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {p.steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-start bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:border-brand transition-all duration-200">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand text-brand-foreground font-bold text-base mb-4 shadow-brand/20 shadow-md">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-xs text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Results (full-width dark/red background stats strip) */}
      <section className="bg-foreground section-stats text-background border-y border-border/10">
        <div className="container-x">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 text-center">
            {p.results.map((r, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-brand-glow">{r.value}</div>
                <div className="mt-2 text-xs text-background/50 font-semibold uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section-content bg-surface border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">WHAT CLIENTS SAY</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Don't take our word for it.</h2>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-brand bg-white mb-4 shadow-md">
              <img src={p.testimonial.image} alt={p.testimonial.author} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-1 mb-4 text-brand">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed text-balance text-ink italic">
              "{p.testimonial.quote}"
            </blockquote>
            <cite className="mt-6 not-italic">
              <span className="block font-bold text-lg text-foreground">{p.testimonial.author}</span>
              <span className="block text-sm text-brand font-semibold tracking-wider uppercase mt-1">{p.testimonial.role}</span>
            </cite>
          </div>
        </div>
      </section>

      {/* 7. FAQ (Accordion questions with + / - toggles, one open at a time) */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Common questions about {p.eyebrow ?? "Service"}.</h2>
            </div>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {p.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={faq.q} className="block w-full border-b border-border last:border-0">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-foreground hover:text-brand transition-colors cursor-pointer"
                    >
                      <span className="text-base leading-snug">{faq.q}</span>
                      <span className="text-xl text-ink-soft shrink-0">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-ink-soft leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA (full-width red background, white button) */}
      <FinalCTA
        heading={`Ready to grow with ${p.eyebrow ?? "us"}?`}
        sub="Book a free 30-minute strategy call — no pitch, just a useful conversation about your numbers."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
