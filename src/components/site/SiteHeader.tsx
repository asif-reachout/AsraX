import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { to: "/services/google-ads", label: "Google Ads" },
  { to: "/services/seo", label: "SEO" },
  { to: "/services/social-media", label: "Social Media Marketing" },
  { to: "/services/content", label: "Content & Creative" },
  { to: "/services/reporting", label: "Performance Reporting" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AsraX Media" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-soft hover:text-foreground">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-brand">Book a Free Strategy Call</Link>
        </div>

        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</div>
            {services.map((s) => (
              <MobileLink key={s.to} to={s.to} onClick={() => setOpen(false)}>{s.label}</MobileLink>
            ))}
            <MobileLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</MobileLink>
            <MobileLink to="/careers" onClick={() => setOpen(false)}>Careers</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-brand mt-3">Book a Free Strategy Call</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground"
      activeProps={{ className: "rounded-full px-4 py-2 text-sm font-medium text-foreground" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary">
      {children}
    </Link>
  );
}
