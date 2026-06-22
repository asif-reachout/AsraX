import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services — AsraX Media" },
      { name: "description", content: "SEO that compounds. Technical SEO, content strategy, and authority building that turn your site into a steady source of qualified, ready-to-buy traffic." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="SEO"
      title="Build traffic you own — no ad spend required."
      subtitle="Technical SEO, content strategy, and authority building that turn your site into a steady source of qualified, ready-to-buy traffic."
      heroImage="/img/seo-hero.jpg"
      introHeading="What does SEO actually look like?"
      introParagraphs={[
        "SEO isn't about ranking for keywords nobody buys from. It's about owning the search queries your best customers actually type in — and being the obvious answer when they do.",
        "We build SEO as a long-term growth asset: a strong technical base, content built around buyer intent, and authority signals that compound month after month.",
        "Our team manages technical infrastructure, on-page content production pipelines, and manual white-hat link acquisition campaigns under a single unified growth strategy."
      ]}
      introImage="/img/seo-intro.jpg"
      features={[
        { title: "Technical Audit & Fixes", desc: "Optimize crawl budget, core web vitals, speed, and redirects." },
        { title: "Intent Keyword Research", desc: "Target high-intent search phrases aligned to transaction cycles." },
        { title: "On-Page SEO Optimization", desc: "Revise page headers, semantic styling, and structured markups." },
        { title: "Content Engine Plans", desc: "Establish search briefs and calendars mapped to buyer priorities." },
        { title: "Premium Link Building", desc: "Acquire domain authority through manual digital PR outreach." },
        { title: "Detailed Metric Reporting", desc: "Track conversions, keywords visibility, and keyword rankings." }
      ]}
      processHeading="How we run your SEO"
      steps={[
        { title: "Audit & Fixes", body: "We resolve indexing issues, site speed bottlenecks, and semantic structures." },
        { title: "Strategy & Mapping", body: "We research and organize keywords into transactional, commercial, and informational funnels." },
        { title: "Execute Content", body: "We draft high-quality content briefs and build internal linking pathways." },
        { title: "Report & Scale", body: "Every month, you receive a concise analysis summarizing traffic growth and organic leads." }
      ]}
      results={[
        { value: "+127%", label: "Organic Traffic Growth" },
        { value: "38", label: "Top-3 Ranking Keywords" },
        { value: "+74", label: "Monthly Demo Bookings" }
      ]}
      testimonial={{
        quote: "They rebuilt our content engine around buyer intent. Organic search is now the #1 lead source in our business.",
        author: "James K.",
        role: "B2B Marketing Lead",
        image: "/img/test-james.jpg"
      }}
      faqs={[
        { q: "How quickly will I see results?", a: "SEO is a long game. Expect early movement in months 2–3 and meaningful traffic / lead growth from months 4–6 onwards." },
        { q: "What's the minimum engagement?", a: "$1,000 / month with a recommended 6-month commitment, because anything shorter rarely gives SEO time to compound." },
        { q: "Who will I be working with?", a: "A senior SEO strategist plus a content team. Every piece is reviewed by a strategist, not a junior." },
        { q: "Do you sign monthly or yearly contracts?", a: "Month-to-month after the first 6 months. We don't lock you in beyond that." },
        { q: "What happens if I'm not happy with the results?", a: "We review the plan together. SEO has clear leading indicators — if we're not hitting them, we adjust. If we're still not the right fit, you walk." }
      ]}
      finalHeading="Ready to compound your organic traffic?"
    />
  ),
});
