import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, Check, Eye, Target, UserCheck, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      { title: "About AsraX Media — Who We Are" },
      { name: "description", content: "Your business growth partner — here to build something you believe in. Founded by Asra Saleem in 2022, AsraX Media runs paid, organic, content, and web as one connected growth engine." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    t: "Transparency",
    b: "You always know exactly where your budget goes, every single month.",
    icon: Eye
  },
  {
    t: "Results",
    b: "You get campaigns that get judged on revenue and leads, not impressions.",
    icon: Target
  },
  {
    t: "Accountability",
    b: "If something isn't working, you get told, and it gets fixed.",
    icon: UserCheck
  },
  {
    t: "Solutions",
    b: "You get strategic thinking paired with fast execution, every time.",
    icon: Zap
  },
];

const faqs = [
  {
    q: "Why should I choose AsraX Media as my growth partner?",
    a: "Because we treat every project like it's our own brand on the line — combining strategy, creativity, and data to build marketing that actually earns trust and drives growth."
  },
  {
    q: "What industries and markets does AsraX Media serve?",
    a: "We work with e-commerce, B2B, healthcare, and local service brands across the globe, tailoring our approach to what actually drives results in each industry."
  },
  {
    q: "How do you ensure the strategy fits my brand's voice and goals?",
    a: "We take time upfront to understand your brand identity, audience, and objectives, then shape every campaign and piece of content around what makes your brand distinct."
  },
  {
    q: "Do you offer customized strategies or one-size-fits-all packages?",
    a: "Every strategy we build is shaped around your specific goals, audience, and industry — nothing here is templated or copy-pasted from another client's playbook."
  },
  {
    q: "What size businesses do you work with?",
    a: "We partner with brands that are serious about growth, whether you're building a strategy from scratch or scaling something that's already working."
  },
  {
    q: "What can I expect from working with AsraX Media?",
    a: "A team that treats your business like our own — proactive communication, strategies built around your goals, and a genuine investment in seeing your brand grow."
  }
];

const team = [
  {
    name: "Asra Saleem",
    role: "Founder & CEO",
    img: team1,
    bio: "Motivator and a watchful leader. My responsibility is to uphold the vision of AsraX Media and maintain the integrity of my team. I focus on fostering a healthy team environment and promoting positive energy among everyone involved in AsraX Media's progress. I encourage open communication and value talent."
  },
  {
    name: "Yashfeen Alamgir",
    role: "Business Development & Client Acquisition",
    img: team2,
    bio: "Yashfeen is responsible for building meaningful client relationships and identifying opportunities that drive business growth at AsraX Media. A quick learner with a detail-oriented mindset, always striving to deliver high-quality results while adapting to new challenges and industries. Outside of work, she has a passion for traveling, baking, cooking, and reading non-fiction."
  },
  {
    name: "Hamza Nadeem",
    role: "PPC Team Lead",
    img: team3,
    bio: "Hamza leads the PPC team at AsraX Media, managing paid campaigns from strategy to execution and end results. A textile graduate who found his passion in digital marketing, he has spent the past 4 years as a PPC expert, driving qualified conversions and increasing return on investment for his clients. Beyond campaigns, he is a former university handball captain and a national referee at the Pakistan Handball Federation."
  },
  {
    name: "Mubarra Sadaf",
    role: "Content Writer & Editor",
    img: team4,
    bio: "Mubarra brings 3 years of experience crafting blogs, website content, email campaigns, and social media writing. She values clarity, creativity, and a research-driven approach, refining every piece for accuracy, brand consistency, and impact. In her downtime she enjoys sketching, painting, and exploring historic places."
  },
  {
    name: "Waleed Rashid",
    role: "Content & Outreach Specialist",
    img: team5,
    bio: "Waleed is responsible for digital marketing, content strategy, brand storytelling, social media marketing, and outreach campaigns at AsraX Media. He combines creativity with data-driven strategy to create engaging content, strengthen brand presence, and drive measurable business growth. Outside work he is a visual storyteller and technology enthusiast."
  }
];

const chooseUsItems = [
  { t: "No Long-Term Lock-In Contracts", d: "Our partnership gets earned month-by-month, never through a legal lock-in." },
  { t: "Full Transparency On Every Spend", d: "You always know exactly where every penny of your budget is going." },
  { t: "A Direct Line From Day One", d: "You work directly with the person managing your account — not a rotating point of contact." },
  { t: "Weekly Reporting You Can Actually Understand", d: "You get plain-English reports summarizing the numbers that matter." },
  { t: "Strategy Built Around Revenue", d: "Your strategy gets optimized for pipeline value, not vanity impressions." },
  { t: "Real Experience Behind Every Account", d: "You're working with people who've scaled brands before, not learning on your budget." }
];

function AboutPage() {
  const teamRef = useRevealOnScroll();

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
              Who <span className="text-gradient-brand">We Are</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 sm:text-xl text-balance">
              Your business growth partner — here to build something you believe in.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-brand">Book a Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
            </div>
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
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built From The Ground Up</h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>
                AsraX Media was founded by Asra Saleem, who began her career in 2020 as a freelance Paid Ads specialist, helping businesses get real results from every dollar of ad spend. As client trust grew, so did the scope of the work — SEO, AEO, Social Media Marketing, Content Marketing, and Website Development were added, one capability at a time, each built to the same standard as the first.
              </p>
              <p>
                That growing reliability became AsraX Media in 2022, a full growth partner instead of a single-service freelancer. Today, that same relentless focus on results carries through every account, run as one connected growth engine for ambitious brands across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — VALUES SECTION */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow">OUR STANDARDS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The Standards You Can Hold Us To</h2>
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
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your Growth, Powered by Brilliant Humans</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Every client gets senior eyes on it. Meet the strategists you'll actually be working with.
            </p>
          </div>
          {/* Uniform photo tiles; the bio slides up over the photo on hover/focus.
              Touch devices get the bio underneath instead, since there is no hover. */}
          <div ref={teamRef} className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <article
                key={member.name}
                tabIndex={0}
                style={{ transitionDelay: `${i * 90}ms` }}
                className="team-card group w-full max-w-sm flex-1 basis-72 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-card focus:outline-none focus-visible:border-brand focus-visible:shadow-card"
              >
                <div className="relative aspect-4/5 overflow-hidden bg-surface">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-focus-visible:scale-105 group-focus-visible:grayscale-0"
                  />

                  {/* name plate — always readable, fades out as the bio comes up */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-neutral-950/90 to-transparent p-5 pt-12 transition-opacity duration-300 max-lg:hidden lg:group-hover:opacity-0 lg:group-focus-visible:opacity-0">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-glow">{member.role}</p>
                  </div>

                  {/* bio overlay — desktop hover/focus only */}
                  <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-neutral-950/92 p-6 opacity-0 transition-all duration-300 max-lg:hidden lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-glow">{member.role}</p>
                    <p className="mt-3 max-h-52 overflow-y-auto text-sm leading-relaxed text-neutral-300">{member.bio}</p>
                  </div>
                </div>

                {/* touch/small screens: no hover, so show it inline */}
                <div className="p-5 lg:hidden">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — WHY CLIENTS CHOOSE US */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">WHY ASRAX MEDIA</p>
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

      {/* 6 — FAQ */}
      <section className="section-content bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The Questions You're Probably Already Asking</h2>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-semibold hover:text-brand">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-ink-soft leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7 — FINAL CTA */}
      <FinalCTA
        heading="Ready to work with a team invested in your growth?"
        sub="30 minutes. No pitch. We'll look at your numbers and tell you where the leverage is."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}

// Fades the team cards up as the section scrolls into view. Cards are only
// hidden once JS is running, so with JS off they render normally.
function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(container.children);
    cards.forEach((card) => card.classList.add("is-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("is-pending");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return ref;
}
