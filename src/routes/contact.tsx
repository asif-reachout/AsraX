import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle, MapPin, Loader } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AsraX Media — Book a free strategy call" },
      { name: "description", content: "Book a free 30-minute strategy call with AsraX Media. No pitch — just a useful conversation about your growth." },
    ],
  }),
  component: ContactPage,
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

function ContactPage() {
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
      const response = await fetch("https://api.asraxmedia.com/contact.php", {
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
      setError("Failed to send message. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl">
              Book a free <span className="text-gradient-brand">strategy call.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl text-balance">
              30 minutes. No pitch. We'll look at your numbers, find the biggest growth levers, and tell you exactly what we'd do — whether you hire us or not.
            </p>
          </div>

          <div className="hidden lg:flex lg:h-full lg:flex-col lg:justify-center">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rotate-6 rounded-4xl bg-brand/10 transition-transform hover:rotate-12 blur-sm" />
              <div className="absolute inset-0 -rotate-3 rounded-4xl bg-brand/5 transition-transform hover:-rotate-6 blur-sm" />
              <div className="relative flex aspect-square flex-col items-center justify-center gap-6 rounded-4xl border border-border bg-card p-10 shadow-2xl text-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-card ${i === 1 ? 'bg-brand' : i === 2 ? 'bg-emerald-500' : 'bg-blue-600'} text-white shadow-sm`}>
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand">Growth Catalyst</p>
                  <p className="mt-2 text-xl font-bold leading-tight">Scale your brand with expert precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-24 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          {sent ? (
            <div className="grid place-items-center py-24 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-brand text-brand-foreground text-2xl font-bold">✓</div>
              <h2 className="mt-6 text-3xl font-bold">Thanks — we'll be in touch.</h2>
              <p className="mt-3 max-w-md text-ink-soft">Expect a reply within one business day with a link to book your strategy call.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {error && (
                <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500 border border-red-500/20">
                  {error}
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company" name="company" />
                <Field label="Website" name="website" placeholder="https://" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary goal</label>
                <select name="primary_goal" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                  <option>Scale paid ads (Google / Meta)</option>
                  <option>Grow organic traffic (SEO)</option>
                  <option>Build a social presence</option>
                  <option>Improve content & creative</option>
                  <option>Better reporting & strategy</option>
                  <option>Full-funnel growth partner</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monthly marketing budget</label>
                <select name="marketing_budget" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about your business</label>
                <textarea name="business_details" rows={4} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" placeholder="A few sentences about where you are and where you want to go." />
              </div>

              <button type="submit" disabled={submitting} className="btn-brand w-full flex items-center justify-center gap-2 disabled:opacity-70">
                {submitting ? (
                  <>
                    Sending... <Loader className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send & book a call <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your enquiry. We never share your data.</p>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <InfoCard icon={Mail} title="Email" value="hello@asraxmedia.com" href="mailto:hello@asraxmedia.com" />
          <InfoCard icon={MessageCircle} title="WhatsApp" value="Quick chat — same-day reply" href="#" />
          <InfoCard icon={MapPin} title="Markets" value="US · UK · Canada · Australia · UAE" />

          <div className="rounded-3xl border border-border bg-foreground p-8 text-background">
            <p className="eyebrow text-brand-glow">What happens next</p>
            <ol className="mt-5 space-y-4 text-sm">
              {[
                "We reply within 1 business day.",
                "Quick 15-min fit call to understand your goals.",
                "30-min strategy call with a senior strategist.",
                "You get a written growth plan — yours to keep.",
              ].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-xs font-bold text-brand-foreground">{i + 1}</span>
                  <span className="text-background/85">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-brand"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="text-base font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition-all hover:-translate-y-0.5">{inner}</a> : inner;
}
