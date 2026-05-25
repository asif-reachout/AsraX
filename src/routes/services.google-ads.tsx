import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/google-ads")({
  head: () => ({
    meta: [
      { title: "Google Ads Management — AsraX Media" },
      { name: "description", content: "Google Ads built around ROAS. Search, Performance Max, and Shopping campaigns engineered for real customers — not just clicks." },
    ],
  }),
  component: () => (
    <ServicePage
      title="Google Ads that pay for themselves."
      subtitle="We build Search, Performance Max, and Shopping campaigns engineered around your ROAS — not just clicks. Less wasted spend. More real customers."
      introHeading="What Google Ads looks like at AsraX."
      introParagraphs={[
        "Most brands don't have a Google Ads problem. They have an account-structure problem, a tracking problem, or a strategy problem — and the spend keeps disappearing into the same leaks.",
        "We fix the foundation first, then scale. Every campaign is built around one number — the one that actually grows your business. Then we test, optimise, and report on it every single week.",
      ]}
      features={[
        "Account audit & opportunity report",
        "Conversion tracking & GA4 setup",
        "Search, Performance Max & Shopping campaigns",
        "Ad copy, creative & extensions",
        "Landing page recommendations",
        "Weekly optimisation & reporting",
      ]}
      approachHeading="Our approach to Google Ads."
      approachParagraph="We don't chase clicks. We chase customers. Every account is run by a senior strategist who treats your budget like their own — testing constantly, killing what doesn't work, and doubling down on what does. You'll always know what's being spent, what it's returning, and what we're changing next."
      processHeading="How we run Google Ads at AsraX."
      steps={[
        { title: "Audit & goal setting", body: "We pull apart your current account (or set up a clean new one), agree on the metric we're moving, and lock in tracking." },
        { title: "Account structure & tracking", body: "We rebuild your campaigns, audiences, and conversions around how buyers actually move — not Google's default templates." },
        { title: "Launch & 14-day learning window", body: "We launch, then watch closely. The first two weeks are where data tells us what to scale and what to cut." },
        { title: "Weekly optimisation & reporting", body: "Every week we adjust bids, creatives, audiences, and budgets — and send a plain-English report showing what changed and why." },
        { title: "Quarterly strategy review", body: "Every 90 days we step back, look at the bigger picture, and lock in the next quarter's plan." },
      ]}
      resultsHeading="Real Google Ads results we've delivered."
      results={[
        "3.2x ROAS in 90 days for a D2C skincare brand",
        "48 qualified leads / month at $22 CPL for a real estate agency",
        "Cut wasted ad spend by 41% for a SaaS company while doubling demos booked",
      ]}
      packages={[
        { name: "Starter", price: "$1,000 / mo", bullets: [
          "Up to $5,000 / month ad budget managed",
          "1 campaign type (Search, PMax, or Shopping)",
          "Weekly optimisation & monthly reporting",
          "1 strategy call / month",
        ]},
        { name: "Growth", price: "$1,800 / mo", popular: true, bullets: [
          "Up to $20,000 / month ad budget managed",
          "Multiple campaign types & A/B testing",
          "Weekly reporting & landing-page recommendations",
          "2 strategy calls / month",
        ]},
        { name: "Scale", price: "From $3,000 / mo", bullets: [
          "Unlimited ad budget managed",
          "Full-funnel Google Ads strategy",
          "Weekly reporting + custom dashboard",
          "Dedicated senior strategist & priority support",
        ]},
      ]}
      faqs={[
        { q: "How quickly will I see results?", a: "Most accounts see meaningful movement within the first 30–45 days, with full optimisation impact landing in months 2–3." },
        { q: "What's the minimum engagement?", a: "$1,000 / month, plus your ad spend. We don't take projects under that — it doesn't leave enough room to do the work properly." },
        { q: "Who will I be working with?", a: "A senior strategist, supported by a specialist team. You won't be passed to a junior account manager." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period. We'd rather earn your renewal every month than lock you in." },
        { q: "What happens if I'm not happy with the results?", a: "We talk. We dig into the data, agree on what to change, and if we're still not the right fit, you walk — no penalties." },
      ]}
      finalHeading="Ready to grow with Google Ads?"
    />
  ),
});
