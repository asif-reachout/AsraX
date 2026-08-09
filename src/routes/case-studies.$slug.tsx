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
  proof?: { label: string; src: string }[];
}

const caseStudyData: Record<string, CaseStudy> = {
  "montessori-toys": {
    slug: "montessori-toys",
    clientName: "Montessori Toys",
    industry: "Toys / E-commerce",
    services: "PPC Ads Management",
    duration: "1.5 Years",
    headline: "ROAS from 209.93% to 338.43%",
    bgImage: "/img/case-d2c.jpg",
    challengeLeft: "Montessori Toys was running paid ad campaigns but underperforming relative to their industry and niche competitors.",
    challengeParagraphs: [
      "In the tracked period, the account generated 3.64K clicks, 3.19K purchases, and a 209.93% ROAS on £1.52K of spend — decent, but not reflecting the sales volume the niche typically supports.",
      "The client wasn't seeing sales volume in line with their industry or their direct competitors in the same niche. Worse, the sales they were getting were coming at a high cost.",
      "Budget was leaking into traffic that wasn't converting efficiently, while lower-quality keywords quietly ate into spend without contributing meaningful return."
    ],
    approach: [
      "Full account audit: assessed the account end-to-end to identify exactly where budget was being wasted and what structural mistakes were holding performance back.",
      "Conversion tracking setup: fixed and properly configured conversion tracking, since accurate data is the foundation for every decision that follows.",
      "Keyword optimization: doubled down on high-performing keywords driving quality traffic, while cutting or restructuring the keywords exhausting budget without returns.",
      "Shopping campaign focus: once the foundation was fixed, shifted focus to Shopping campaigns specifically, working to make them consistently profitable."
    ],
    resultsText: "ROAS climbed from 209.93% to 338.43% — every pound spent now returns significantly more revenue than before. That came alongside major scale in spend (£1.52K to £11.1K), clicks and purchases, so the account grew and got more profitable at the same time.",
    stats: [
      { label: "ACTUAL ROAS", value: "338.43%" },
      { label: "PURCHASES", value: "37.7K" },
      { label: "CLICKS", value: "29.9K" }
    ],
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    testimonialImage: "",
    proof: [
      { label: "Before", src: "/img/case/montessori-before.png" },
      { label: "After", src: "/img/case/montessori-after.png" }
    ]
  },
  "greensonic": {
    slug: "greensonic",
    clientName: "Greensonic",
    industry: "Marine Industry",
    services: "PPC Ads Management",
    duration: "8+ Months",
    headline: "0 to 1.61K conversions from a standing start",
    bgImage: "/img/case-b2b.jpg",
    challengeLeft: "Greensonic came to us with no existing PPC presence — no campaigns, no ad spend, no conversion data, and no impressions.",
    challengeParagraphs: [
      "This meant building the entire paid acquisition channel from the ground up rather than optimizing something already in motion.",
      "As a business in a niche industry, Greensonic needed to generate real, measurable conversions from paid ads — but had no prior campaign history, no conversion tracking, and no data to build on.",
      "The challenge wasn't fixing an underperforming account; it was proving that PPC could work for their specific market from a standing start."
    ],
    approach: [
      "Foundational setup: campaign structure, conversion tracking, and attribution built from scratch, since no historical data existed to work from.",
      "Niche audience research: researched and targeted the specific audience segments relevant to the marine industry, given the absence of any prior targeting data.",
      "Conversion-first campaign design: campaigns optimized explicitly around driving conversions rather than early-stage metrics like clicks or impressions alone.",
      "Iterative optimization: continuously refined targeting, bids, and creative as conversion data started to build over the following months."
    ],
    resultsText: "Within 8 months, Greensonic went from no paid presence at all to 1.61K conversions from 525K impressions at a healthy 2.56% conversion rate on €2.46K of spend — proving out a paid acquisition channel in a niche market where none previously existed.",
    stats: [
      { label: "CONVERSIONS", value: "1.61K" },
      { label: "IMPRESSIONS", value: "525K" },
      { label: "CONVERSION RATE", value: "2.56%" }
    ],
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    testimonialImage: "",
    proof: [
      { label: "Before", src: "/img/case/greensonic-before.png" },
      { label: "After", src: "/img/case/greensonic-after.png" }
    ]
  },
  "ecommerce-clothing": {
    slug: "ecommerce-clothing",
    clientName: "E-Commerce Clothing Brand",
    industry: "Clothing / E-commerce",
    services: "Facebook & Social Media Management",
    duration: "2 Months",
    headline: "7.61 purchase ROAS on Facebook",
    bgImage: "/img/case-conversion.jpg",
    challengeLeft: "The brand had an existing Facebook ad presence but was seeing weak return on spend.",
    challengeParagraphs: [
      "Sales volume was low relative to budget, and the sales that did come through were costly to acquire — the account was consistently burning through budget without efficient output.",
      "The core problem was cost inefficiency: the client wasn't just getting fewer sales than expected, the sales they did get were expensive to acquire.",
      "Budget was being exhausted without a proportional return, raising concerns about whether Facebook ads could be made profitable for the business."
    ],
    approach: [
      "Campaign restructure: rebuilt campaign and ad set structure to isolate top-performing audiences from underperforming ones exhausting budget.",
      "Creative and targeting refresh: refreshed ad creative and audience targeting to improve CTR and reduce cost per result.",
      "ROAS-focused optimization: shifted budget allocation toward ad sets delivering the strongest purchase ROAS, cutting spend on low-return segments."
    ],
    resultsText: "By the end of Q2 2025, the account delivered a 7.61 purchase ROAS across 43.5M impressions, with cost per purchase as low as Rs 406.24. Alongside ad performance, total sales reached PKR 53,081,604 across 18,200 orders, and average order value grew 94% quarter-over-quarter.",
    stats: [
      { label: "PURCHASE ROAS", value: "7.61" },
      { label: "PURCHASES", value: "9,100+" },
      { label: "AOV GROWTH", value: "+94%" }
    ],
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    testimonialImage: "",
    proof: [
      { label: "Ad account performance (Q2 2025)", src: "/img/case/clothing-ads.png" },
      { label: "Store performance (Q2 2025)", src: "/img/case/clothing-sales.png" }
    ]
  },
  "maranatha-pediatrics": {
    slug: "maranatha-pediatrics",
    clientName: "Maranatha Pediatrics",
    industry: "Healthcare (Pediatrics)",
    services: "Social Media Management & PPC",
    duration: "1.5+ Years",
    headline: "Cost per conversion down from $44.80 to $12.64",
    bgImage: "/img/case-localservice.jpg",
    challengeLeft: "Maranatha Pediatrics was running paid ad campaigns but seeing limited traction — a 6.19% CTR and $44.80 per conversion, with only 7 conversions over the tracked period.",
    challengeParagraphs: [
      "Ad spend was going out, but conversion volume wasn't matching the investment. The core issue wasn't visibility — it was efficiency. The client was paying a premium for each conversion relative to the volume they were getting back.",
      "Social was no stronger. Visibility and engagement were limited, educational content was published inconsistently, and awareness among parents searching for reliable pediatric information online was low.",
      "Without a refined audience, a stronger digital identity, or a structured content strategy behind the campaigns, the account was underperforming its budget."
    ],
    approach: [
      "Month 1 — audience refinement: focused on social media management to rebuild and refine the target audience, ensuring ad spend was reaching the right people before pushing for volume.",
      "Month 2 — conversion focus: shifted campaign priorities toward converting the now better-targeted audience, optimizing creative and targeting on early performance signals.",
      "Month 3 — scaling: with a validated audience and improving conversion rate, scaled spend and campaign reach to grow conversion volume sustainably.",
      "Educational content marketing: content parents genuinely find useful — parenting guidance, child wellness, seasonal illness prevention, school health, nutrition, hydration, sleep habits and preventive care — rather than promotional graphics.",
      "Consistent brand identity: every post used the same visual system — bright healthcare colours, child-friendly illustrations, readable typography and clear Maranatha branding — to build recall across platforms.",
      "Community engagement and website support: an active publishing schedule with a clear call to action on every asset, turning engagement into clinic website visits and patient enquiries."
    ],
    resultsText: "Cost per conversion dropped from $44.80 to $12.64 — roughly 3.5x more conversions for every dollar spent. CTR rose from 6.19% to 10.39%, impressions grew from ~1K to 34.7K, and conversions went from 7 to 1,220. Across 18+ months of social management, the clinic also built stronger brand recognition, consistent educational publishing, higher engagement, and more website traffic from social.",
    stats: [
      { label: "COST PER CONVERSION", value: "$12.64" },
      { label: "CONVERSIONS", value: "1,220" },
      { label: "CTR", value: "10.39%" }
    ],
    testimonialQuote: "The consistent educational content helped strengthen our online presence and made it easier for parents to engage with our clinic and access reliable pediatric information.",
    testimonialAuthor: "Maranatha Pediatrics",
    testimonialRole: "Healthcare Client",
    testimonialImage: "",
    proof: [
      { label: "Educational campaign — school health", src: "/img/case/maranatha-social-1.jpg" },
      { label: "Educational campaign — seasonal health", src: "/img/case/maranatha-social-2.jpg" },
      { label: "Educational campaign — preventive care", src: "/img/case/maranatha-social-3.jpg" }
    ]
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

      {/* 5b. Proof — screenshots straight from the ad accounts */}
      {study.proof && (
        <section className="section-content bg-background border-t border-border">
          <div className="container-x">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow">THE PROOF</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Straight from the account.</h2>
            </div>
            <div className={`grid gap-6 ${study.proof.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {study.proof.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <figcaption className="border-b border-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-brand">
                    {shot.label}
                  </figcaption>
                  <img src={shot.src} alt={`${study.clientName} — ${shot.label}`} className="w-full" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

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
