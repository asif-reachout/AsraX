import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/reporting")({
  head: () => ({
    meta: [
      { title: "Performance Reporting Agency — AsraX Media" },
      { name: "description", content: "One report that ties ads, SEO, and social back to the same number: your revenue. Weekly dashboards, plain-English summaries, senior strategist reviews." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Performance Reporting"
      title="Performance Reporting Agency Built Around Your Revenue"
      subtitle="You've stared at separate dashboards for ads, SEO, and social with no one connecting the dots. Here, one report ties every channel back to the same number: your revenue."
      heroImage="/img/reporting-hero.jpg"
      introHeading="What Does A Performance Reporting Agency Actually Deliver?"
      introParagraphs={[
        "You've probably experienced marketing that feels disconnected. Google Ads, SEO, social media, and analytics all live in separate dashboards, making it difficult to see what's actually driving growth. Reports are filled with clicks, impressions, and reach, but rarely answer the questions that matter most: Are we generating qualified leads? Is the business growing?",
        "That's where we work differently. We bring your marketing performance into one clear view, connecting every channel to the metrics that matter.",
        "You'll work with a senior strategist who turns complex data into practical insights, provides regular updates in plain English, and helps you make confident, informed decisions. No long-term contracts just transparent reporting that earns your trust through measurable progress."
      ]}
      introImage="/img/reporting-intro.jpg"
      featuresHeading="Every Number, Tied Back To One Picture"
      features={[
        { title: "Weekly Reporting Dashboards", desc: "One weekly view across ads, SEO and social, plus real-time alerts the moment spend, CPA or conversions move outside range." },
        { title: "Revenue & Pipeline Attribution", desc: "We connect your marketing spend to real business outcomes, using A/B testing, LTV attribution, and multi-touch modeling to understand what truly drives conversions." },
        { title: "Custom KPI Tracking", desc: "We turn your marketing data into a clear growth roadmap with channel performance insights and strategic budget guidance." },
        { title: "Cross-Channel Reporting", desc: "Your paid, organic and social performance shown side by side, plus a one-page monthly executive summary in plain English." },
        { title: "Monthly Strategy Reviews", desc: "Regular check-ins with a senior strategist, plus a deeper quarterly review to align plans, budgets and scaling projections every 90 days." }
      ]}
      processHeading="Here's How You Get Started"
      processLead="Getting started with your performance reporting agency is straightforward, and built around your business from day one."
      steps={[
        { title: "Discovery Call", body: "You share your goals, current reporting setup, and where visibility into your numbers is falling short today." },
        { title: "Strategy & Audit", body: "Your existing dashboards, tracking, and data sources get reviewed, so reporting gets built around what's actually happening." },
        { title: "Dashboard & System Launch", body: "Your custom dashboards and reporting cadence go live, connected to the channels and numbers that matter most." },
        { title: "Reporting & Scale", body: "You see results in plain weekly reporting, and as your numbers grow, your reporting scales alongside them." }
      ]}
      /* Stats and testimonial intentionally omitted — client is supplying real figures and a real quote. */
      faqs={[
        { q: "How is your reporting different from checking each platform individually?", a: "Platform dashboards only tell part of the story. We bring your Google Ads, Meta, SEO, and social performance into one clear view, connecting every channel to the leads, pipeline, and revenue that matter most to your business." },
        { q: "Will I have access to the data behind the reports?", a: "Yes. You'll receive a clear, plain-English summary of the key insights, along with full access to your dashboards whenever you want to explore the data in more detail." },
        { q: "How often will I receive performance updates?", a: "You'll receive clear weekly performance updates, so you're never left guessing. Every quarter, we also review your strategy, priorities, and growth opportunities to keep your marketing moving in the right direction." },
        { q: "What if I decide to stop the reporting service?", a: "There are no long-term contracts or lock-ins. If your needs change, you can cancel anytime simple, flexible, and without unnecessary penalties." }
      ]}
      finalHeading="Ready For Reporting You Can Actually Trust?"
      finalSub="Book a free strategy call no pitch, just a clear look at what your numbers actually mean."
    />
  ),
});
