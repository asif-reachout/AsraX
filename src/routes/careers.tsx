import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Loader, ChevronDown, UserCheck, BookOpen, Globe, Briefcase, TrendingUp, MessageSquare } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the growth team | AsraX Media" },
      { name: "description", content: "Work with ambitious brands on real growth. Remote-first, competitive pay, full autonomy, and senior operator guidance." },
    ],
  }),
  component: CareersPage,
});

const DISPOSABLE_DOMAINS = [
  "yopmail.com", "mailinator.com", "tempmail.com", "10minutemail.com",
  "dispostable.com", "getairmail.com", "guerrillamail.com", "sharklasers.com",
  "maildrop.cc", "trashmail.com", "tempr.email", "generator.email",
  "fakeinbox.com", "mailnesia.com", "mailcatch.com", "mintemail.com",
  "spamgourmet.com", "temp-mail.org", "temp-mail.ru", "temp-mail.com",
  "guerrillamailblock.com", "guerrillamail.net", "guerrillamail.org",
  "guerrillamail.biz", "guerrillamail.co", "guerrillamail.de",
  "guerrillamail.se", "grr.la", "duck.com"
];

function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return DISPOSABLE_DOMAINS.includes(domain);
}

const benefits = [
  { t: "Real ownership", d: "No micromanagement. We trust you to run your own experiments and own the results.", icon: UserCheck },
  { t: "Learning & growth budget", d: "Want to read a book, take a course, or attend a conference? We foot the bill.", icon: BookOpen },
  { t: "Remote-friendly culture", d: "Work from wherever you produce your best output. We prioritize outcomes over office hours.", icon: Globe },
  { t: "Work on real brands", d: "Scale paid ad accounts and organic search channels for ambitious global clients with real budgets.", icon: Briefcase },
  { t: "Fast career progression", d: "In our high-leverage team, your impact is recognized, valued, and rewarded instantly.", icon: TrendingUp },
  { t: "Honest feedback culture", d: "Direct, constructive, and kind communication that helps you improve every single day.", icon: MessageSquare }
];

const fitQuestions = [
  "Am I willing to keep learning even when things are going well?",
  "Do I take ownership without making excuses?",
  "Am I comfortable with honest feedback?",
  "Do I want to grow fast and take on more responsibility?",
  "Do I care about real results, not just ticking tasks off a list?"
];

const openJobs = [
  {
    title: "Senior Paid Ads Specialist",
    type: "Full-Time · Remote",
    desc: "Oversee PPC strategies for our eCommerce and Lead Gen portfolios. You'll own campaign structures, conversion audits, and Performance Max testing.",
    duties: [
      "Manage search, shopping, and Performance Max ad accounts with monthly spends up to $50k.",
      "Diagnose attribution issues and implement server-side tracking (GTM).",
      "Draft conversion-first landing page specs and copy vectors.",
      "Formulate weekly ad asset refreshes and ad script angles."
    ],
    requirements: [
      "3+ years managing client-facing Google Ads campaigns.",
      "Proficient in Google Tag Manager, GA4, and Shopify/CRM integrations.",
      "Clear, revenue-focused communication skills."
    ]
  },
  {
    title: "Senior SEO Strategist",
    type: "Full-Time · Remote",
    desc: "Lead organic acquisition strategies for SaaS and D2C clients. Direct audits, keywords mapping, content brief pipelines, and high-quality link building.",
    duties: [
      "Identify high-impact commercial search terms.",
      "Resolve indexing issues, speed bottlenecks, and semantic schemas.",
      "Manage external copywriting networks and review content drafts.",
      "Coordinate outreach campaigns for digital PR and backlink acquisition."
    ],
    requirements: [
      "3+ years agency-side SEO experience.",
      "Proven track record scaling organic traffic into actual conversions.",
      "Familiar with SEO tools (Ahrefs, Semrush, Screaming Frog)."
    ]
  }
];

function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (isDisposableEmail(email)) {
      setError("Temporary or disposable email addresses are not allowed. Please use a work or personal email.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      // POST as multipart/form-data to our PHP backend (no Content-Type header —
      // the browser sets it automatically with the correct boundary for FormData).
      const response = await fetch("https://api.asraxmedia.com/apply.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send application. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      {/* 1 — HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center pt-24 pb-[100px] max-md:py-[40px] text-white"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.65), rgba(26, 26, 26, 0.85)), url('/img/team-office.jpg')` }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative w-full text-center">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow text-brand-glow">CAREERS</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
              We're building a team of growth-obsessed people.
            </h1>
            <p className="mt-6 text-lg text-neutral-300 sm:text-xl text-balance">
              AsraxMedia isn't just a place to work — it's a place to grow, lead, and do the best work of your career.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#current-openings" className="btn-brand">See Open Positions →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — WHO WE ARE SECTION */}
      <section className="section-content bg-background border-t border-border">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl border border-border shadow-lg">
            <img
              src="/img/team-office.jpg"
              alt="AsraX Culture & Collaboration"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">We operate on transparency & results.</h2>
            <div className="mt-6 space-y-4 text-base text-ink-soft leading-relaxed">
              <p>
                We sit on the same side of the table as our clients. We reject the legacy agency model of hiding behind impressions and clicks. We align our performance goals with their actual business pipeline.
              </p>
              <p>
                This requires a team of self-directed professionals who run experiments, speak the raw truth, and continually challenge baseline standards to find major growth levers.
              </p>
              <p>
                We don't care about what hours you work or where you log in from. If you need to walk the dog, go for a run, or pick up your kids at 2 PM, do it. We measure outputs, not inputs.
              </p>
              <p>
                We're a small group of senior executioners. There is no bureaucracy to hide behind, no endless alignment meetings, and no PowerPoint slides. We brainstorm, make a decision, ship it, and look at the data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — WHY WORK HERE SECTION */}
      <section className="section-content bg-surface border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">WHY ASRAX</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What makes AsraxMedia different to work at.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.t} className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-brand hover:shadow-card transition-all duration-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — ARE YOU THE RIGHT FIT SECTION */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">IS THIS YOU?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Working at AsraxMedia isn't for everyone.</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Ask yourself these questions honestly. If you answer "yes" to all five, you will love working with us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fitQuestions.map((q, i) => (
              <div key={i} className="flex gap-4 items-start rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground font-bold text-lg">
                  0{i + 1}
                </div>
                <p className="text-sm font-semibold leading-relaxed text-ink">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CURRENT OPENINGS SECTION */}
      <section id="current-openings" className="section-content bg-surface border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">OPEN ROLES</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Current Openings</h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {openJobs.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-8 text-center text-ink-soft font-medium">
                No open roles right now — submit your details below and we'll reach out.
              </div>
            ) : (
              openJobs.map((job, idx) => {
                const isOpen = activeJob === idx;
                return (
                  <div key={job.title} className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveJob(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left font-bold text-foreground cursor-pointer"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl">{job.title}</h3>
                        <p className="text-xs text-brand mt-1 font-semibold uppercase tracking-wider">{job.type}</p>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-ink-soft transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-border/40 pt-4 space-y-6 text-sm text-ink-soft">
                        <p className="text-base text-ink leading-relaxed">{job.desc}</p>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">What you will do:</h4>
                            <ul className="space-y-2">
                              {job.duties.map((duty) => (
                                <li key={duty} className="flex gap-2.5 items-start">
                                  <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                                  <span className="leading-normal">{duty}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">What we look for:</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req) => (
                                <li key={req} className="flex gap-2.5 items-start">
                                  <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                                  <span className="leading-normal">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border/40 text-right">
                          <a href="#apply-form" className="btn-brand py-2 text-xs flex items-center gap-1.5 w-fit ml-auto">
                            Apply <ArrowRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 6 — DON'T SEE YOUR ROLE FORM */}
      <section id="apply-form" className="section-content bg-surface border-b border-border">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Apply Now</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">Don't see a role that fits?</h2>
              <p className="mt-6 text-ink-soft leading-relaxed">
                We are always looking for exceptional media buyers, SEO strategists, content copywriters, visual creators, and growth developers.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Submit your details and CV here. Our team reviews incoming general applications every week and will reach out if a matching portfolio opens up.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10">
              {sent ? (
                <div className="grid place-items-center py-16 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white text-2xl font-bold">✓</div>
                  <h2 className="mt-6 text-2xl font-bold">Application Sent</h2>
                  <p className="mt-2 text-ink-soft max-w-md">Thanks for reaching out! Our team will review your details and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500 border border-red-500/20">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                      <input type="text" name="name" required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                      <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role Interested In *</label>
                      <select name="role_of_interest" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                        <option>Paid Ads Specialist</option>
                        <option>SEO Strategist</option>
                        <option>Copywriter / Content Lead</option>
                        <option>Graphic Designer</option>
                        <option>Web Developer</option>
                        <option>Other / Growth Lead</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload CV *</label>
                      <input
                        type="file"
                        name="resume"
                        required
                        accept=".pdf,.docx"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
                      />
                      <p className="text-[10px] text-muted-foreground mt-1">Accepted formats: PDF, DOCX · Max size: 5 MB.</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why do you want to join AsraX? *</label>
                    <textarea name="why_join" rows={4} required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Tell us briefly about your background and what you bring to the table." />
                  </div>



                  <button type="submit" disabled={submitting} className="btn-brand w-full flex items-center justify-center gap-2 disabled:opacity-70">
                    {submitting ? (
                      <>
                        Sending Application... <Loader className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Application <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — CULTURE PHOTO STRIP */}
      <section className="relative overflow-hidden w-full p-0 m-0">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[250px] p-0 m-0">
          {[
            "/img/team-office.jpg",
            "/img/about-hero.jpg",
            "/img/reporting-intro.jpg",
            "/img/content-intro.jpg"
          ].map((url, idx) => (
            <div key={idx} className="h-full w-full overflow-hidden">
              <img src={url} alt="AsraX Culture" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* 8 — FINAL CTA */}
      <FinalCTA
        heading="Ready to do the best work of your career?"
        sub="Browse our openings or submit a general application. Senior guidance, full remote freedom."
        btnText="See Open Positions"
        btnLink="#current-openings"
        anchor={true}
      />
    </SiteShell>
  );
}
