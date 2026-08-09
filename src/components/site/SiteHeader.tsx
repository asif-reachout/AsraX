import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { to: "/services/website-development", label: "Website Development" },
  { to: "/services/content", label: "Content Marketing" },
  { to: "/services/seo", label: "SEO / AEO / GEO" },
  { to: "/services/google-ads", label: "Paid Ads" },
  { to: "/services/social-media", label: "Social Media Marketing" },
  { to: "/services/reporting", label: "Performance Reporting" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on page transition
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AsraX Media" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${isServicesActive
                  ? "text-brand font-semibold bg-brand/10"
                  : "text-ink-soft hover:text-foreground hover:bg-surface/50"
                }`}
            >
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-soft hover:text-foreground hover:bg-surface/50 transition-colors"
                      activeProps={{ className: "block rounded-xl px-4 py-3 text-sm font-semibold text-brand bg-brand/10" }}
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

        {/* Mobile Hamburger Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground transition-all hover:bg-surface/80 active:scale-95 lg:hidden cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay (Backdrop) */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Side Drawer Panel (Slides from right-to-left) */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-[300px] bg-background border-l border-border/60 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-border/40">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <img src={logo} alt="AsraX Media" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground transition-all hover:bg-surface/80 active:scale-95 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
          <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
          <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>

          {/* Mobile Collapsible Services Section */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileSvcOpen(!mobileSvcOpen)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${isServicesActive
                  ? "text-brand font-semibold bg-brand/10"
                  : "text-ink-soft hover:text-foreground hover:bg-surface/50"
                }`}
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileSvcOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ml-4 flex flex-col gap-1 border-l border-border/60 pl-3 ${mobileSvcOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0 pointer-events-none"
                }`}
            >
              {services.map((s) => (
                <MobileLink key={s.to} to={s.to} onClick={() => setOpen(false)}>
                  {s.label}
                </MobileLink>
              ))}
            </div>
          </div>

          <MobileLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</MobileLink>
          <MobileLink to="/careers" onClick={() => setOpen(false)}>Careers</MobileLink>
          <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

          <Link to="/contact" onClick={() => setOpen(false)} className="btn-brand mt-6 text-center">
            Book a Free Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground hover:bg-surface/50"
      activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-brand bg-brand/10" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft hover:text-foreground hover:bg-surface/50 transition-colors"
      activeProps={{ className: "rounded-xl px-4 py-3 text-sm font-semibold text-brand bg-brand/10" }}
    >
      {children}
    </Link>
  );
}
