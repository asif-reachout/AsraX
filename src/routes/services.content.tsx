import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/content")({
  head: () => ({
    meta: [
      { title: "Content & Creative — AsraX Media" },
      { name: "description", content: "Landing pages, ad creatives, blogs, and LinkedIn content — written around your buyer, designed to convert." },
    ],
  }),
  component: () => (
    <ServicePage
      title="Content and creative that actually sell."
      subtitle="Landing pages, ad creatives, blogs, and LinkedIn content — written around your buyer, designed to convert."
      introHeading="What content and creative looks like at AsraX."
      introParagraphs={[
        "Most content is written for search engines, social algorithms, or the founder's ego — and it shows. It reads like everyone else's, sells like nobody's.",
        "We write content for the one person who matters: your buyer. Every page, ad, and post is built around their problem, their language, and the next step we want them to take.",
      ]}
      features={[
        "Landing pages that convert",
        "Ad copy & creative (static + video scripts)",
        "Blog & SEO content",
        "LinkedIn & founder content",
        "Email sequences & nurture flows",
        "Brand messaging & positioning",
      ]}
      approachHeading="Our approach to content."
      approachParagraph="Good content sounds like one person talking to another, not a brand talking at the world. We write with a clear point of view, sharp positioning, and a real call to action — so every piece either moves your reader closer to buying, or it doesn't ship."
      processHeading="How we run Content & Creative at AsraX."
      steps={[
        { title: "Buyer & message research", body: "We interview you, study your buyers, and dig into your competitors to find the language that actually lands." },
        { title: "Strategy & content plan", body: "We map the pieces of content needed across your funnel — top, middle, and bottom — and the order they should be produced in." },
        { title: "Writing & design", body: "Our writers and designers build every piece in your brand voice, around the metric we're trying to move." },
        { title: "Review & launch", body: "You review, we refine, and we ship — with clear publishing or campaign briefs for your team or your ad platforms." },
        { title: "Performance review", body: "Every month we look at what each piece is doing — opens, conversions, pipeline — and iterate." },
      ]}
      resultsHeading="Real content results we've delivered."
      results={[
        "A new landing page lifted conversion rate from 1.7% to 4.9% in 30 days",
        "Founder LinkedIn content generated 23 booked calls in 60 days",
        "Rewritten ad copy cut CPL by 38% with no change to spend",
      ]}
      packages={[
        { name: "Starter", price: "$1,000 / mo", bullets: [
          "Up to 4 long-form pieces / month",
          "Ad copy & creative briefs",
          "Brand voice document",
          "Monthly content call",
        ]},
        { name: "Growth", price: "$1,800 / mo", popular: true, bullets: [
          "8 content pieces / month",
          "Landing pages & ad creative",
          "LinkedIn / founder content",
          "Email & nurture flows",
        ]},
        { name: "Scale", price: "From $3,000 / mo", bullets: [
          "Full content engine across channels",
          "Dedicated senior writer",
          "Video scripts & ad creative at scale",
          "Quarterly messaging review",
        ]},
      ]}
      faqs={[
        { q: "How quickly will I see results?", a: "Landing pages and ad copy typically move metrics within 30 days. Long-form content compounds over 60–90+ days." },
        { q: "What's the minimum engagement?", a: "$1,000 / month — enough scope to build a real asset, not one-off pieces." },
        { q: "Who will I be working with?", a: "A senior strategist who runs your account, supported by writers and designers in your brand voice." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "Revisions are unlimited within scope. If we're not delivering, we re-scope or you walk — no penalties." },
      ]}
      finalHeading="Ready to grow with content that sells?"
    />
  ),
});
