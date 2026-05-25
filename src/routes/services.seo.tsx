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
      title="SEO that compounds into a growth engine."
      subtitle="Technical SEO, content strategy, and authority building that turn your site into a steady source of qualified, ready-to-buy traffic."
      introHeading="What SEO looks like at AsraX."
      introParagraphs={[
        "SEO isn't about ranking for keywords nobody buys from. It's about owning the search queries your best customers actually type in — and being the obvious answer when they do.",
        "We build SEO as a long-term growth asset: a strong technical base, content built around buyer intent, and authority signals that compound month after month.",
      ]}
      features={[
        "Full technical SEO audit",
        "Keyword & buyer-intent research",
        "On-page optimisation & site structure",
        "Content strategy & briefs",
        "Backlink & authority building",
        "Monthly ranking & traffic reporting",
      ]}
      approachHeading="Our approach to SEO."
      approachParagraph="We don't chase rankings for the sake of rankings. We chase the rankings that bring buyers. Every keyword we target is mapped to a stage of your funnel, every piece of content has a job to do, and every backlink we build moves a real metric — leads, pipeline, revenue."
      processHeading="How we run SEO at AsraX."
      steps={[
        { title: "Audit & opportunity mapping", body: "We audit your site, your current rankings, and your competition — then map the highest-leverage SEO opportunities for the next 12 months." },
        { title: "Technical foundation", body: "We fix the issues holding your site back — site speed, crawlability, indexing, structured data, and internal linking." },
        { title: "Content strategy & production", body: "We build a content calendar around buyer intent and your sales funnel, then write or brief every piece." },
        { title: "Authority building", body: "We earn backlinks through outreach, digital PR, and partnerships — never spam, never bought." },
        { title: "Monthly reporting & iteration", body: "Every month you get clear reporting on rankings, traffic, and conversions — plus the next 30 days of the plan." },
      ]}
      resultsHeading="Real SEO results we've delivered."
      results={[
        "127% growth in organic traffic over 6 months for a B2B SaaS",
        "First-page rankings for 38 buyer-intent keywords in 9 months",
        "Organic became the #1 lead source within 12 months",
      ]}
      packages={[
        { name: "Starter", price: "$1,000 / mo", bullets: [
          "Technical SEO audit & fixes",
          "Up to 4 optimised pages / month",
          "Monthly reporting",
          "1 strategy call / month",
        ]},
        { name: "Growth", price: "$1,800 / mo", popular: true, bullets: [
          "Full technical SEO",
          "4–6 SEO-optimised content pieces / month",
          "Outreach & backlink building",
          "2 strategy calls / month",
        ]},
        { name: "Scale", price: "From $3,000 / mo", bullets: [
          "Aggressive content & link strategy",
          "Digital PR & partnership outreach",
          "Custom dashboard & KPI tracking",
          "Dedicated senior strategist",
        ]},
      ]}
      faqs={[
        { q: "How quickly will I see results?", a: "SEO is a long game. Expect early movement in months 2–3 and meaningful traffic / lead growth from months 4–6 onwards." },
        { q: "What's the minimum engagement?", a: "$1,000 / month with a recommended 6-month commitment, because anything shorter rarely gives SEO time to compound." },
        { q: "Who will I be working with?", a: "A senior SEO strategist plus a content team. Every piece is reviewed by a strategist, not a junior." },
        { q: "Do you sign monthly or yearly contracts?", a: "Month-to-month after the first 6 months. We don't lock you in beyond that." },
        { q: "What happens if I'm not happy with the results?", a: "We review the plan together. SEO has clear leading indicators — if we're not hitting them, we adjust. If we're still not the right fit, you walk." },
      ]}
      finalHeading="Ready to grow with SEO?"
    />
  ),
});
