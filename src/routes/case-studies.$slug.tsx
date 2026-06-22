import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  services: string;
  duration: string;
  headline: string;
  bgImage: string;
  challengeLeft: string;
  challengeParagraphs: string[];
  approach: string[];
  resultsText: string;
  stats: { label: string; value: string }[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  testimonialImage: string;
}

const caseStudyData: Record<string, CaseStudy> = {
  "d2c-skincare": {
    slug: "d2c-skincare",
    clientName: "Radiant Skin Co.",
    industry: "D2C Skincare",
    services: "Google Ads & CRO",
    duration: "3 Months",
    headline: "3.2x ROAS in 90 days",
    bgImage: "/img/case-d2c.jpg",
    challengeLeft: "Scaling ad spend while maintaining profitability was a bottleneck. Broken GA4 tracking led to misattributed data, and high-frequency ad fatigue caused CPA to spike.",
    challengeParagraphs: [
      "Our client was spending thousands per month on Google Ads without a clear picture of their real return on ad spend. Fragmented tracking meant Google was claiming conversions that didn't show up in Shopify.",
      "Furthermore, creative assets had not been updated in over six months, leading to ad fatigue and a sharp rise in acquisition costs.",
      "They needed a clean tag infrastructure and a structured campaign layout built around real revenue metrics."
    ],
    approach: [
      "Fixed conversion attribution using custom Google Tag Manager tags and server-side tracking.",
      "Consolidated fragmented ad campaigns into structured Performance Max and Search campaigns.",
      "Introduced weekly creative refresh cycles, introducing high-performing video hooks and user-generated content.",
      "Implemented budget scaling rules based on real-time ROAS targets rather than legacy budgets."
    ],
    resultsText: "By restructuring their campaign portfolio and scaling profitable segments, we helped Radiant Skin Co. achieve a record-breaking quarter. Conversions rose by 118% while CPA dropped by 46%.",
    stats: [
      { label: "ROAS LIFT", value: "3.2x" },
      { label: "CPA REDUCTION", value: "-46%" },
      { label: "REVENUE GROWTH", value: "+118%" }
    ],
    testimonialQuote: "AsraX took over our Google Ads after months of wasted spend. Within 60 days they cut our cost per lead in half and doubled the volume. They report on actual revenue, not just vanity metrics.",
    testimonialAuthor: "Daniel R.",
    testimonialRole: "Founder, Radiant Skin Co.",
    testimonialImage: "/img/test-daniel.jpg"
  },
  "b2b-saas": {
    slug: "b2b-saas",
    clientName: "SignaFlow SaaS",
    industry: "B2B SaaS",
    services: "Technical SEO & Content Strategy",
    duration: "6 Months",
    headline: "127% Organic Traffic Growth in 6 Months",
    bgImage: "/img/case-b2b.jpg",
    challengeLeft: "SignaFlow had a high ad budget but zero organic presence. Their website had slow load times, poor indexing, and content that targeted generic, high-difficulty terms.",
    challengeParagraphs: [
      "SignaFlow was completely dependent on paid search ads to drive pipeline, leading to escalating customer acquisition costs (CAC) that ate away at their software margins.",
      "A deep crawl revealed significant technical errors: slow core web vitals, missing sitemaps, and legacy redirect loops.",
      "Their content program was also targeting top-of-funnel queries rather than intent-mapped transactional searches."
    ],
    approach: [
      "Conducted a comprehensive technical SEO audit to resolve core Web Vitals issues, schema markups, and crawl budget leaks.",
      "Mapped their content plan to high-intent transactional keywords, building out 'Alternative-to' comparison guides and template pages.",
      "Launched a targeted link-building campaign to build domain authority through premium industry publications.",
      "Refined internal linking structures to pass link juice to primary conversion landing pages."
    ],
    resultsText: "Organic search quickly became SignaFlow's top acquisition source. Organic traffic jumped 127%, resulting in a 74% increase in monthly demo bookings.",
    stats: [
      { label: "ORGANIC TRAFFIC", value: "+127%" },
      { label: "TOP-3 KEYWORDS", value: "38" },
      { label: "DEMO BOOKINGS", value: "+74%" }
    ],
    testimonialQuote: "They rebuilt our content engine around buyer intent. Organic search is now the number one lead source in our business, and our cost per acquisition is at an all-time low.",
    testimonialAuthor: "James K.",
    testimonialRole: "Marketing Director, SignaFlow",
    testimonialImage: "/img/test-james.jpg"
  },
  "real-estate": {
    slug: "real-estate",
    clientName: "Aura Properties",
    industry: "Real Estate Agency",
    services: "Local Search & Google Ads",
    duration: "4 Months",
    headline: "48 Qualified Leads / Month at $22 CPL",
    bgImage: "/img/case-realestate.jpg",
    challengeLeft: "Aura Properties was relying on expensive, generic listing portals that produced low-intent leads. They lacked direct-to-consumer acquisition channels, resulting in high fees and slow sales cycles.",
    challengeParagraphs: [
      "Relying on aggregator portals meant the client was competing head-to-head with hundreds of other brokers for the same buyers.",
      "Their direct ad campaigns were targeting too broad an audience, leading to thousands of dollars wasted on unqualified phone calls.",
      "They needed a direct landing page funnel and geographically targeted campaign structures that focused on high-net-worth postcodes."
    ],
    approach: [
      "Created hyper-targeted geo-location search campaigns focusing on affluent zip codes and search queries indicating moving intent.",
      "Designed high-converting landing pages tailored to specific property developments, using social proof and virtual tour CTAs.",
      "A/B tested lead forms to request pre-qualification details (budget, timeframe) to filter out low-intent users.",
      "Integrated CRM pipelines to trigger instant notifications for agents, ensuring follow-ups occurred within 5 minutes."
    ],
    resultsText: "Within 4 months Aura Properties established a robust lead pipeline, delivering an average of 48 pre-qualified leads per month at a stable Cost Per Lead (CPL) of $22.",
    stats: [
      { label: "COST PER LEAD", value: "$22" },
      { label: "LEADS DELIVERED", value: "48/mo" },
      { label: "SHOW RATE", value: "62%" }
    ],
    testimonialQuote: "We were paying thousands to listing portals for dead-end leads. AsraX helped us cut our CPL in half and build a pipeline that we fully own. Our sales team is busier than ever.",
    testimonialAuthor: "Priya M.",
    testimonialRole: "Sales Director, Aura Properties",
    testimonialImage: "/img/test-priya.jpg"
  },
  "local-service": {
    slug: "local-service",
    clientName: "Prime HVAC Solutions",
    industry: "Local Home Services",
    services: "Performance Max & LSAs",
    duration: "3 Months",
    headline: "4.6x Return on Ad Spend in Q1",
    bgImage: "/img/case-localservice.jpg",
    challengeLeft: "With intense local competition, Prime HVAC was struggling to get visibility during off-peak seasons. They spent thousands on generic search terms that generated non-serviceable clicks.",
    challengeParagraphs: [
      "Local service businesses face rising ad competition. For Prime HVAC, ad clicks were climbing, but actual calls booked remained stagnant.",
      "They were targeting generic informational terms like 'how to fix furnace' rather than high-ticket buyer search phrases like 'furnace replacement near me'.",
      "They needed a tightened local service ad structure coupled with high-converting call funnels."
    ],
    approach: [
      "Configured Google Local Services Ads (LSA) to guarantee top-of-page placement and pay per phone call.",
      "Developed local Performance Max campaigns combining customer list matching with location asset targeting.",
      "Launched seasonal promotion-focused landing pages to drive immediate AC replacements during peak months.",
      "Optimized ad schedules to match the business hours of their service call desk to maximize conversion rates."
    ],
    resultsText: "Our targeted local strategies unlocked massive efficiency. Q1 revenue grew by 212%, achieving an overall ROAS of 4.6x across their ad accounts.",
    stats: [
      { label: "ROAS ACHIEVED", value: "4.6x" },
      { label: "REVENUE GROWTH", value: "+212%" },
      { label: "JOB BOOKING RATE", value: "41%" }
    ],
    testimonialQuote: "They didn't just buy clicks; they bought phone calls. The quality of jobs we've booked since AsraX stepped in has transformed our bottom line. Highly recommended.",
    testimonialAuthor: "Mark S.",
    testimonialRole: "General Manager, Prime HVAC",
    testimonialImage: "/img/test-mark.jpg"
  },
  "founder-linkedin": {
    slug: "founder-linkedin",
    clientName: "Aero Logistics CEO",
    industry: "Founder LinkedIn Brand",
    services: "LinkedIn Authority Building",
    duration: "6 Months",
    headline: "60+ Inbound Enquiries from Organic LinkedIn",
    bgImage: "/img/case-founder.jpg",
    challengeLeft: "The CEO of Aero Logistics wanted to build industry authority and drive enterprise deals but lacked the time and copywriting structure to publish content consistently.",
    challengeParagraphs: [
      "Outbound sales calls were delivering diminishing returns. B2B enterprise buyers wanted relationships and authority before booking calls.",
      "The CEO possessed decades of supply chain expertise but had no structured method to translate this into high-impact social content.",
      "They needed a strategic content framework, dynamic post-editing cycles, and disciplined connection engagement."
    ],
    approach: [
      "Interviewed the founder weekly to extract raw industry insights, stories, and strong perspectives.",
      "Created a disciplined content schedule of 4 high-impact weekly posts combining supply chain analyses with personal career lessons.",
      "Optimized the founder's LinkedIn profile for conversions, redirecting profile views to a custom calendar link.",
      "Engaged daily with key decision-makers (COOs, VP of Logistics) in target accounts through structured commenting."
    ],
    resultsText: "Over 6 months, the founder's audience grew by 11.2k followers, yielding 60+ direct enterprise sales enquiries and a 3x lift in branded search volumes.",
    stats: [
      { label: "FOLLOWER INCREASE", value: "+11.2k" },
      { label: "INBOUND ENQUIRIES", value: "60+" },
      { label: "PROFILE VIEWS", value: "+450%" }
    ],
    testimonialQuote: "I was skeptical about personal branding. AsraX handled the writing while keeping my voice 100% authentic. The inbound inquiries we are getting are high-quality decision-makers.",
    testimonialAuthor: "Robert H.",
    testimonialRole: "CEO, Aero Logistics",
    testimonialImage: "/img/test-robert.jpg"
  },
  "saas-conversion": {
    slug: "saas-conversion",
    clientName: "MetricsHub SaaS",
    industry: "SaaS Conversion",
    services: "CRO & Copywriting",
    duration: "2 Months",
    headline: "Landing Page CVR from 1.7% → 4.9%",
    bgImage: "/img/case-conversion.jpg",
    challengeLeft: "MetricsHub was driving high traffic through Google Ads, but their landing pages were converting at only 1.7%. High traffic costs meant they were barely breaking even.",
    challengeParagraphs: [
      "The client was spending over $10k per month on ads, but their primary signup page was leaky and unoptimized.",
      "Users were overwhelmed by feature explanations, complex onboarding flows, and a total lack of initial social proof.",
      "They needed a simplified user flow, conversion-focused layout hierarchy, and copy centered around buyer problems."
    ],
    approach: [
      "Redesigned the landing page structure using a single-focus, conversion-optimized hierarchy.",
      "Rewrote headline copy to focus on customer pain points rather than dry software feature descriptions.",
      "Replaced stock graphics with high-fidelity interactive product screenshots showing the product value in under 5 seconds.",
      "Embedded micro-testimonials right next to primary sign-up forms to handle objections in real-time."
    ],
    resultsText: "Without adding a single dollar to the ad budget, we nearly tripled MetricsHub's trial sign-up volume, reducing CAC by 42% and generating over 180% more MQLs.",
    stats: [
      { label: "CONVERSION RATE", value: "4.9%" },
      { label: "CAC REDUCTION", value: "-42%" },
      { label: "MQL VOLUME", value: "+183%" }
    ],
    testimonialQuote: "Our conversion rate was holding us back. AsraX solved it by rewriting our landing pages and tightening the copy. It's like we unlocked a brand new ad account.",
    testimonialAuthor: "Sarah T.",
    testimonialRole: "VP Product, MetricsHub",
    testimonialImage: "/img/test-sarah.jpg"
  }
};

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const study = caseStudyData[params.slug];
    return {
      meta: [
        { title: study ? `${study.headline} — ${study.clientName} | AsraX Media` : "Case Study | AsraX Media" },
        { name: "description", content: study ? study.resultsText : "Case study details." },
      ],
    };
  },
  component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
  const { slug } = useParams({ from: "/case-studies/$slug" });
  const study = caseStudyData[slug];

  if (!study) {
    return (
      <SiteShell>
        <section className="section-hero-cta text-center bg-background">
          <div className="container-x">
            <h1 className="text-4xl font-bold">Case Study Not Found</h1>
            <p className="mt-4 text-ink-soft">The case study you are looking for does not exist.</p>
            <Link to="/case-studies" className="btn-brand mt-6">Back to Case Studies</Link>
          </div>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      {/* 1. Hero (Background = client image + dark overlay) */}
      <section
        className="relative overflow-hidden bg-cover bg-center section-hero-cta flex min-h-[400px] items-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url('${study.bgImage}')` }}
      >
        <div className="container-x w-full">
          <div className="max-w-4xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-glow hover:text-white transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
            <p className="eyebrow text-brand-glow">CASE STUDY</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
              How we helped {study.clientName} achieve {study.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Overview Strip (Client, Industry, Services Delivered, Duration) */}
      <section className="bg-surface section-stats border-y border-border/10">
        <div className="container-x">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-center md:text-left">
            <div>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Client</p>
              <p className="mt-2 text-base font-bold text-foreground">{study.clientName}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Industry</p>
              <p className="mt-2 text-base font-bold text-foreground">{study.industry}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Services Delivered</p>
              <p className="mt-2 text-base font-bold text-foreground">{study.services}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Duration</p>
              <p className="mt-2 text-base font-bold text-foreground">{study.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Challenge (Two-column: left = 2-3 paragraphs, right = client image) */}
      <section className="section-content bg-background">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">THE CHALLENGE</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-balance text-foreground">Where they were before AsraxMedia.</h2>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p className="text-base font-semibold text-ink">{study.challengeLeft}</p>
                {study.challengeParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-border shadow-lg">
              <img
                src={study.bgImage}
                alt={`${study.clientName} Challenge backdrop`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach (3-4 numbered steps explaining strategy) */}
      <section className="section-content bg-surface">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">OUR APPROACH</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">What we did and why.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {study.approach.map((step, i) => (
              <div key={i} className="flex gap-5 items-start rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground font-bold">
                  0{i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-soft leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Results (Dark/red background, 3-4 large bold numbers) */}
      <section className="section-content bg-foreground text-background border-t border-border">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow text-brand-glow">THE RESULTS</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-white">What we achieved together.</h2>
              <p className="mt-6 text-background/70 leading-relaxed">
                {study.resultsText}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-background/10 bg-background/5 p-6 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-brand-glow leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-background/60 font-semibold uppercase tracking-wider mt-4">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial (Client photo left, large italic quote center, bold name + company below) */}
      {study.testimonialQuote && study.testimonialAuthor && (
        <section className="section-content bg-surface border-y border-border">
          <div className="container-x">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:text-left text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-brand bg-white shrink-0 shadow-md">
                {study.testimonialImage ? (
                  <img src={study.testimonialImage} alt={study.testimonialAuthor} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand text-white font-bold text-xl uppercase">
                    {study.testimonialAuthor.split(" ").map(n => n[0]).join("").substring(0, 2)}
                  </div>
                )}
              </div>
              <div>
                <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed text-balance text-ink italic">
                  "{study.testimonialQuote}"
                </blockquote>
                <cite className="block mt-6 not-italic">
                  <span className="block font-bold text-lg text-foreground">{study.testimonialAuthor}</span>
                  <span className="block text-sm text-brand font-semibold tracking-wider uppercase mt-1">{study.testimonialRole}</span>
                </cite>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. CTA */}
      <FinalCTA
        heading={`Want results like ${study.clientName} got?`}
        sub="Let's build a tailored growth system for your brand. Rolling monthly contracts, senior strategy."
        btnText="Book Your Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
