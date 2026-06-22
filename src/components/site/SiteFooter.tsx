import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Mail, CheckCircle, AlertCircle, Loader } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useCallback } from "react";

// Mailchimp config — u is the public account identifier (safe to expose)
const MC_U  = "ca6a47748b206dfd3e20d75fa";
const MC_ID = "5e76804856";
const MC_SERVER = "us3";

type FormState = "idle" | "loading" | "success" | "error";

function NewsletterForm() {
  const [email, setEmail]     = useState("");
  const [state, setState]     = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;

    setState("loading");

    // Mailchimp JSONP — works on any static host, no server required
    const callbackName = `mc_cb_${Date.now()}`;
    const url =
      `https://${MC_SERVER}.list-manage.com/subscribe/post-json` +
      `?u=${MC_U}&id=${MC_ID}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;

    const script = document.createElement("script");
    script.src = url;

    const timeout = setTimeout(() => {
      cleanup();
      setState("error");
      setMessage("Request timed out. Please try again.");
    }, 10000);

    function cleanup() {
      clearTimeout(timeout);
      delete (window as any)[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    (window as any)[callbackName] = (data: { result: string; msg: string }) => {
      cleanup();
      if (data.result === "success") {
        setState("success");
        setEmail("");
        setMessage("You're subscribed! 🎉");
      } else {
        setState("error");
        // Clean up Mailchimp's HTML-heavy error messages
        const msg = data.msg?.replace(/<[^>]+>/g, "").replace(/^\d+ - /, "") ?? "Something went wrong.";
        setMessage(msg.includes("already subscribed") ? "You're already subscribed!" : msg);
      }
    };

    document.body.appendChild(script);
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
              <Mail className="h-4 w-4" /> hello@asraxmedia.com
            </a>
            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href="#"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#"><Instagram className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#"><Facebook className="h-4 w-4" /></SocialIcon>
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

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="grid h-9 w-9 place-items-center rounded-full border border-background/15 text-background/80 transition-colors hover:border-brand hover:text-brand">
      {children}
    </a>
  );
}
