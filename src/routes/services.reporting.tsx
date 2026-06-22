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
      eyebrow="Reporting"
      title="Clear numbers. Sharper decisions."
      subtitle="Monthly reports, live dashboards, and strategy calls that turn your marketing data into the next clear move."
      heroImage="/img/reporting-hero.jpg"
      introHeading="What does Performance Reporting actually look like?"
      introParagraphs={[
        "Most agency reports are 30 pages of pretty charts that nobody reads. They tell you what happened but not what to do next.",
        "We do the opposite. Clean numbers, plain English, one page that tells you what's working, what isn't, and exactly what we're changing next. Built for founders who want to actually make decisions, not decode dashboards.",
        "We connect live APIs to your operational tools so marketing decisions are measured directly against sales growth."
      ]}
      introImage="/img/reporting-intro.jpg"
      features={[
        { title: "Custom Dashboards", desc: "Integrate Google Ads, GA4, Meta, and CRM into one interface." },
        { title: "Monthly Executive Reports", desc: "One-page analyses summarizing key numbers in plain English." },
        { title: "Channel Breakdowns", desc: "Granular cost-per-acquisition and lead reviews per network." },
        { title: "Pipeline Tracking", desc: "A/B testing, revenue calculations, and LTV attribution." },
        { title: "Quarterly Strategy Reviews", desc: "Align plans, budgets, and scaling projections every 90 days." },
        { title: "Strategist Direct Access", desc: "Always-on communication channels via Slack or WhatsApp." }
      ]}
      processHeading="How we run your Performance Reporting"
      steps={[
        { title: "KPI Alignment", body: "We map out the 5–10 primary metrics that directly impact your pipeline." },
        { title: "Dashboard Setup", body: "We connect ad accounts, CRM, and GA4 into a single live interface." },
        { title: "Monthly Analysis", body: "Every month, you receive a concise analysis summarizing results, spend, and actions." },
        { title: "Quarterly Roadmap", body: "Every 90 days, we conduct a strategy alignment session to project budgets." }
      ]}
      results={[
        { value: "30 min", label: "Reporting Overhead" },
        { value: "$4,200/mo", label: "Wasted Spend Identified" },
        { value: "100%", label: "Pipeline Visibility" }
      ]}
      testimonial={{
        quote: "Our previous agencies sent screenshots of impressions. AsraX sends a one-page report on pipeline and ROI. Night and day.",
        author: "Priya M.",
        role: "SaaS COO",
        image: "/img/test-priya.jpg"
      }}
      faqs={[
        { q: "How quickly will I see results?", a: "Your dashboard is live in 14–21 days. Your first executive report lands within the first month." },
        { q: "What's the minimum engagement?", a: "$1,000 / month — enough scope to build a real reporting asset, not a one-off audit." },
        { q: "Who will I be working with?", a: "A senior strategist who runs your reporting and strategy calls, supported by an analyst." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "We adjust the dashboards, the reporting cadence, or the focus areas. If we're still not the right fit, you walk." }
      ]}
      finalHeading="Ready to make sharper decisions?"
    />
  ),
});
