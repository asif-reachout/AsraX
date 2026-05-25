import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/reporting")({
  head: () => ({
    meta: [
      { title: "Performance Reporting & Strategy — AsraX Media" },
      { name: "description", content: "Live dashboards, monthly reports, and quarterly strategy. Turn marketing data into your next clear move." },
    ],
  }),
  component: () => (
    <ServicePage
      title="Clear numbers. Sharper decisions."
      subtitle="Monthly reports, live dashboards, and strategy calls that turn your marketing data into the next clear move."
      introHeading="What reporting and strategy looks like at AsraX."
      introParagraphs={[
        "Most agency reports are 30 pages of pretty charts that nobody reads. They tell you what happened but not what to do next.",
        "We do the opposite. Clean numbers, plain English, one page that tells you what's working, what isn't, and exactly what we're changing next. Built for founders who want to actually make decisions, not decode dashboards.",
      ]}
      features={[
        "Custom KPI dashboard (live)",
        "Monthly executive report",
        "Channel-by-channel breakdown",
        "ROAS, CPL, LTV & pipeline tracking",
        "Quarterly strategy reviews",
        "Always-on strategist access",
      ]}
      approachHeading="Our approach to reporting."
      approachParagraph="We start with the questions you actually need answered: Where is growth coming from? What's wasting spend? What should we double down on? Every dashboard and every report is built around those questions — not around what's easy to export."
      processHeading="How we run Performance Reporting & Strategy at AsraX."
      steps={[
        { title: "Discovery & KPI mapping", body: "We agree on the 5–10 numbers that actually matter for your business, and build everything else around them." },
        { title: "Dashboard build", body: "We connect your ad platforms, GA4, CRM, and any other sources into a single live dashboard you can open at any time." },
        { title: "Monthly executive reporting", body: "Every month you get a tight, plain-English report — what happened, why, and what we're doing next." },
        { title: "Quarterly strategy review", body: "Every 90 days we step back, review the bigger picture, and lock in the next quarter's plan." },
        { title: "Always-on strategist access", body: "Got a quick question between reports? You message us, we respond — no waiting until the next cycle." },
      ]}
      resultsHeading="Real reporting results we've delivered."
      results={[
        "Founders cut reporting time from 6 hours / week to 30 minutes / month",
        "Identified a wasted-spend channel that was burning $4,200 / month",
        "Tied marketing back to revenue for the first time in the company's history",
      ]}
      packages={[
        { name: "Starter", price: "$1,000 / mo", bullets: [
          "Live dashboard for 1 channel",
          "Monthly executive report",
          "1 strategy call / month",
          "Email support",
        ]},
        { name: "Growth", price: "$1,800 / mo", popular: true, bullets: [
          "Multi-channel dashboard",
          "Monthly executive report",
          "2 strategy calls / month",
          "WhatsApp / Slack access",
        ]},
        { name: "Scale", price: "From $3,000 / mo", bullets: [
          "Full-funnel attribution & LTV tracking",
          "Custom executive dashboard",
          "Quarterly board-ready reports",
          "Dedicated senior strategist",
        ]},
      ]}
      faqs={[
        { q: "How quickly will I see results?", a: "Your dashboard is live in 14–21 days. Your first executive report lands within the first month." },
        { q: "What's the minimum engagement?", a: "$1,000 / month — enough scope to build a real reporting asset, not a one-off audit." },
        { q: "Who will I be working with?", a: "A senior strategist who runs your reporting and strategy calls, supported by an analyst." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "We adjust the dashboards, the reporting cadence, or the focus areas. If we're still not the right fit, you walk." },
      ]}
      finalHeading="Ready to make sharper decisions?"
    />
  ),
});
