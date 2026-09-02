import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Loader, ChevronDown, UserCheck, BookOpen, Globe, Briefcase, TrendingUp, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { SiteShell } from "@/components/site/SiteShell";

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
  { t: "Real Ownership", d: "No micromanagement you run your own experiments and own the results.", icon: UserCheck },
  { t: "Learning & Growth Budget", d: "Want to read a book, take a course, or attend a conference? That gets covered.", icon: BookOpen },
  { t: "Hands-On, In-Person Collaboration", d: "You get direct access to strategic expertise, so decisions happen faster and challenges are solved with confidence.", icon: Globe },
  { t: "Work On Real Brands", d: "You'll run paid ad accounts and organic channels for ambitious clients with real budgets, not filler accounts.", icon: Briefcase },
  { t: "Fast Career Progression", d: "We prioritise outcomes over processes, using data and performance insights to keep growth moving forward.", icon: TrendingUp },
  { t: "Honest Feedback Culture", d: "Every conversation is focused on clarity, collaboration, and finding better ways to achieve your goals.", icon: MessageSquare }
];

const fitQuestions = [
  "Am I willing to keep learning as platforms, algorithms, and channels keep changing?",
  "Am I comfortable owning a campaign's results, not just executing the tasks inside it?",
  "Can I hear direct feedback on my work without getting defensive?",
  "Do I want more client responsibility, not less, as I prove myself?",
  "Do I care more about the client's revenue than the vanity metrics that look good in a report?"
];

// Openings on hold per client — empty list renders the "no open roles" state.
const openJobs: { title: string; type: string; desc: string; duties: string[]; requirements: string[] }[] = [];

function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedAt, setLoadedAt] = useState(0);

  useEffect(() => { setLoadedAt(Math.floor(Date.now() / 1000)); }, []);

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
              Grow Your Career The Way Our Clients Grow
            </h1>
            <p className="mt-6 text-lg text-neutral-300 sm:text-xl text-balance">
              You'll be joining a team built on one belief: that the businesses you help grow deserve people who actually own the outcome, not just the task.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#current-openings" className="btn-brand">See Current Openings →</a>
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
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">AsraX Media Runs On Ownership And Honesty</h2>
            <div className="mt-6 space-y-4 text-base text-ink-soft leading-relaxed">
              <p>
                We work alongside ambitious brands to help them grow through smart strategy, continuous experimentation, and meaningful execution. Every decision is guided by transparency, accountability, and a shared focus on delivering measurable results not just staying busy.
              </p>
              <p>
                If this sounds interesting to you, join our team now.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about" className="btn-brand">About Us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — WHY WORK HERE SECTION */}
      <section className="section-content bg-surface border-y border-border">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">WHY ASRAX MEDIA?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why Brands Choose Us as Their Growth Partner</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">Six principles behind how we work.</p>
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
            <p className="eyebrow">ARE YOU READY TO OWN THE OUTCOME?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Before You Apply, Ask Yourself This</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              A few simple questions can reveal whether our approach fits how you like to work.
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
                No open roles right now submit your details below and we'll reach out.
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
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">Don't See A Role That Fits Yet?</h2>
              <p className="mt-6 text-ink-soft leading-relaxed">
                You can still get on our radar. Submit your details and CV below, and you'll hear from us the moment a matching opening comes up.
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
                  {/* Honeypot — hidden from humans, bots fill it */}
                  <input type="text" name="website_confirm" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="form_loaded_at" value={loadedAt} />
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

    </SiteShell>
  );
}
