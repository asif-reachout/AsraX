import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Target, UserCheck, Zap } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";
import team1 from "@/assets/team/team-1.png";
import team2 from "@/assets/team/team-2.png";
import team3 from "@/assets/team/team-3.png";
import team4 from "@/assets/team/team-4.png";
import team5 from "@/assets/team/team-5.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AsraX Media — Growth partner, not just an agency" },
      { name: "description", content: "AsraX Media is the growth partner for ambitious brands. We invest in your numbers like they're ours." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    t: "Transparency",
    b: "You'll always know where your budget goes.",
    icon: Eye
  },
  {
    t: "Results",
    b: "We celebrate revenue and leads, not impressions.",
    icon: Target
  },
  {
    t: "Accountability",
    b: "If something isn't working, we own it and fix it.",
    icon: UserCheck
  },
  {
    t: "Solutions",
    b: "Strategic thinking and fast execution, every time.",
    icon: Zap
  },
];

const team = [
  {
    name: "Asra Saleem",
    role: "Founder & CEO",
    img: team1
  },
  {
    name: "Yashfeen Alamgir",
    role: "Business Developer",
    img: team2
  },
  {
    name: "Hamza Nadeem",
    role: "Sr Paid Ads Lead",
    img: team3
  },
  {
    name: "Mubarra Sadaf",
    role: "Content Specialist",
    img: team4
  },
  {
    name: "Waleed Rashid",
    role: "Content & Outreach Specialist",
    img: team5
  }
];

const chooseUsItems = [
  { t: "No long-term lock-in contracts", d: "We earn your partnership month-by-month, not through legal lock-ins." },
  { t: "Full transparency on every spend", d: "Always know exactly where every dollar of your marketing budget is going." },
  { t: "Dedicated account manager from day one", d: "A direct line of communication with a senior manager, not a junior coordinator." },
  { t: "Weekly reporting you can actually understand", d: "Plain English performance reports summarizing key pipeline numbers and results." },
  { t: "Strategy built around revenue", d: "We optimize campaigns for pipeline value and booking volumes, not vanity impressions." },
  { t: "Senior strategists only", d: "Work directly with experienced growth operators who have scaled brands before." }
];

function AboutPage() {
  return (
    <SiteShell>
      {/* 1 — HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center pt-24 pb-[100px] max-md:py-[40px] text-white flex min-h-[400px] items-center"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.65), rgba(26, 26, 26, 0.85)), url('/img/about-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-brand-glow">ABOUT US</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              We turn marketing budgets into <span className="text-gradient-brand">growth engines.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 sm:text-xl text-balance">
              AsraxMedia is a global growth partner for ambitious brands — built on transparency, accountability, and results.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — OUR STORY SECTION */}
      <section className="section-content bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl border border-border shadow-lg">
            <img
              src="/img/team-office.jpg"
              alt="AsraX Media Team Office"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built by operators, for operators.</h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>
                AsraX Media was founded on a frustration we kept seeing — talented founders pouring money into ad accounts and content calendars without anyone owning the number that actually mattered.
              </p>
              <p>
                We built the agency we wished we could have hired: senior strategists, full-stack execution, weekly transparency, and a relentless focus on the metrics that move pipeline and revenue.
              </p>
              <p>
                Today, we work with brands across the US, UK, Canada, Australia, and the UAE — running their Google Ads, SEO, social, content, and reporting as one connected growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — VALUES SECTION */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow">OUR VALUES</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Four standards we won't compromise.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-brand transition-colors duration-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — MEET THE TEAM SECTION */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow">THE TEAM</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The people behind your growth.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-brand transition-all duration-200">
                <div className="aspect-4/5 overflow-hidden bg-surface">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — WHY CLIENTS CHOOSE US */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">WHY ASRAX</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why brands trust us with their growth.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {chooseUsItems.map((item) => (
              <div key={item.t} className="flex gap-4 items-start rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">{item.t}</h4>
                  <p className="text-sm text-ink-soft mt-1 leading-normal">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — FINAL CTA */}
      <FinalCTA
        heading="Ready to work with a team invested in your growth?"
        sub="30 minutes. No pitch. We'll look at your numbers and tell you where the leverage is."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
