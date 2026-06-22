import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useCallback } from "react";

type FormState = "idle" | "loading" | "success" | "error";

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

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;

    if (isDisposableEmail(email)) {
      setState("error");
      setMessage("Temporary or disposable email addresses are not allowed.");
      return;
    }

    setState("loading");

    try {
      const body = new FormData();
      body.append("email", email);
      body.append("website", ""); // honeypot — always empty for real users

      const res = await fetch("/subscribe.php", { method: "POST", body });
      const data = await res.json() as { result: string; msg: string };

      if (data.result === "success") {
        setState("success");
        setEmail("");
        setMessage("You're subscribed! 🎉");
      } else {
        setState("error");
        setMessage(data.msg || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }, [email, state]);

  if (state === "success") {
    return (
      <div className="mt-6 flex max-w-sm items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-5 py-4">
        <CheckCircle className="h-5 w-5 shrink-0 text-brand-glow" />
        <p className="text-sm text-background/80">{message}</p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-background/15 bg-background/5 p-1.5"
      >
        {/* Honeypot — hidden from humans, bots fill this and get blocked */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: "none" }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          placeholder="you@company.com"
          className="flex-1 bg-transparent px-3 text-sm text-background placeholder:text-background/40 focus:outline-none"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground disabled:opacity-60"
        >
          {state === "loading" ? (
            <><Loader className="h-3 w-3 animate-spin" /> Subscribing…</>
          ) : "Subscribe"}
        </button>
      </form>
      {state === "error" && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3 w-3" /> {message}
        </p>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img src={logo} alt="AsraX Media" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm text-background/70">
              Turning Brands into Beliefs. The growth partner for ambitious brands across the US, UK, Canada, Australia & UAE.
            </p>
            <NewsletterForm />
            <p className="mt-2 text-xs text-background/50">One practical growth tip a week. No fluff.</p>
          </div>

          <FooterCol title="Services">
            <FooterLink to="/services/google-ads">Google Ads</FooterLink>
            <FooterLink to="/services/seo">SEO</FooterLink>
            <FooterLink to="/services/social-media">Social Media</FooterLink>
            <FooterLink to="/services/content">Content & Creative</FooterLink>
            <FooterLink to="/services/reporting">Performance Reporting</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/case-studies">Case Studies</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <a href="mailto:hello@asraxmedia.com" className="flex items-center gap-2 text-sm text-background/70 hover:text-background">
              <Mail className="h-4 w-4 shrink-0" /> hello@asraxmedia.com
            </a>
            <a href="https://wa.me/447986952432" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 hover:text-background">
              <Phone className="h-4 w-4 shrink-0" /> +44 7986 952432
            </a>
            <p className="flex items-start gap-2 text-sm text-background/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>78 Whalebone Grove,<br />Romford, RM6 8BL</span>
            </p>
            <div className="mt-2 flex items-center gap-3">
              <SocialIcon href="https://www.linkedin.com/company/asrax-media" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-background/50">© {new Date().getFullYear()} AsraX Media. All rights reserved.</p>
          <p className="text-xs text-background/50">Turning Brands into Beliefs.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">{title}</h4>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-background/70 transition-colors hover:text-background">
      {children}
    </Link>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-background/15 text-background/80 transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}
