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
      eyebrow="Google Ads"
      title="Turn clicks into paying customers."
      subtitle="We build Search, Performance Max, and Shopping campaigns engineered around your ROAS — not just clicks. Less wasted spend. More real customers."
      heroImage="/img/google-ads-hero.jpg"
      introHeading="What does Google Ads actually look like?"
      introParagraphs={[
        "Most brands don't have a Google Ads problem. They have an account-structure problem, a tracking problem, or a strategy problem — and the spend keeps disappearing into the same leaks.",
        "We fix the foundation first, then scale. Every campaign is built around one number — the one that actually grows your business. Then we test, optimise, and report on it every single week.",
        "Our team behaves like strategic operators, not just agency vendors. We analyze purchase margins, historical LTV metrics, and offline conversions to ensure our bidding algorithm targets absolute buyers."
      ]}
      introImage="/img/google-ads-intro.jpg"
      features={[
        { title: "Account Audit & Map", desc: "Identify and plug leaks in your legacy campaigns." },
        { title: "Conversion Setup", desc: "Full GTM and GA4 validation ensuring every dollar is tracked." },
        { title: "Campaign Structure", desc: "Performance Max, Search, and Shopping setups based on buyer intent." },
        { title: "Copy & Creative Refreshes", desc: "Weekly content hooks, angles, and graphic designs." },
        { title: "Landing Page Directives", desc: "Wireframes and guidelines engineered for high CVR." },
        { title: "Weekly Optimisation", desc: "Daily bid management, negative keywords mapping, and scaling." }
      ]}
      processHeading="How we run your Google Ads"
      steps={[
        { title: "Audit & Goal Setting", body: "We pull apart your current account, agree on key metrics, and verify conversion tracking." },
        { title: "Build & Structure", body: "We rebuild your campaigns and audiences around buyer intent rather than defaults." },
        { title: "Launch & Learning", body: "We launch campaigns and monitor closely. The first two weeks provide key optimization data." },
        { title: "Optimise & Scale", body: "Every week we adjust bids, creatives, and budgets, sending a plain-English progress report." }
      ]}
      results={[
        { value: "3.2x", label: "Average ROAS Lift" },
        { value: "-46%", label: "CPA Reduction" },
        { value: "48/mo", label: "Qualified Leads" }
      ]}
      testimonial={{
        quote: "AsraX took over our Google Ads after months of wasted spend. Within 60 days they cut our cost per lead in half and doubled the volume. They actually report on revenue, not just clicks.",
        author: "Daniel R.",
        role: "Founder, Radiant Skin Co.",
        image: "/img/test-daniel.jpg"
      }}
      faqs={[
        { q: "How quickly will I see results?", a: "Most accounts see meaningful movement within the first 30–45 days, with full optimisation impact landing in months 2–3." },
        { q: "What's the minimum engagement?", a: "$1,000 / month, plus your ad spend. We don't take projects under that — it doesn't leave enough room to do the work properly." },
        { q: "Who will I be working with?", a: "A senior strategist, supported by a specialist team. You won't be passed to a junior account manager." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period. We'd rather earn your renewal every month than lock you in." },
        { q: "What happens if I'm not happy with the results?", a: "We talk. We dig into the data, agree on what to change, and if we're still not the right fit, you walk — no penalties." }
      ]}
      finalHeading="Ready to grow with Google Ads?"
    />
  ),
});
