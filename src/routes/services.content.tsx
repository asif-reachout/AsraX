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
      eyebrow="Content Marketing"
      title="Attract, educate, and convert ideal clients."
      subtitle="Landing pages, ad creatives, blogs, and LinkedIn content — written around your buyer, designed to convert."
      heroImage="/img/content-hero.jpg"
      introHeading="What does Content Marketing actually look like?"
      introParagraphs={[
        "Most content is written for search engines, social algorithms, or the founder's ego — and it shows. It reads like everyone else's, sells like nobody's.",
        "We write content for the one person who matters: your buyer. Every page, ad, and post is built around their problem, their language, and the next step we want them to take.",
        "We focus on creating conversion assets (e.g. landing page layouts, email workflows, digital sales pitches) rather than just pushing out bulk text."
      ]}
      introImage="/img/content-intro.jpg"
      features={[
        { title: "Landing Page Copywriting", desc: "Design page wireframes and write landing page copy optimized for conversions." },
        { title: "Ad Creative Directions", desc: "Script static ads, video frames, hooks, and body copy angles." },
        { title: "SEO Blogs & Copy", desc: "Formulate in-depth guides answering customer transaction questions." },
        { title: "LinkedIn Thought Leadership", desc: "Construct B2B content that positions the founder as an authority." },
        { title: "Email Sequences", desc: "Build automated sequences to nurture leads from fit-checks to calls." },
        { title: "Brand Positioning Guides", desc: "Develop copy standards and unique angles to differentiate your brand." }
      ]}
      processHeading="How we run your Content Marketing"
      steps={[
        { title: "Strategy & Audit", body: "We study target buyer objectives, extract insights, and map out hooks." },
        { title: "Funnel Planning", body: "We align content pieces across the customer acquisition funnel stages." },
        { title: "Production & Creation", body: "Our copy and design team crafts the visual and textual marketing assets." },
        { title: "Distribution & Pitching", body: "We format assets directly into campaign workflows and ad accounts." }
      ]}
      results={[
        { value: "4.9%", label: "Landing Page CVR" },
        { value: "23", label: "Booked Calls / 60d" },
        { value: "-38%", label: "CPL Reduction" }
      ]}
      testimonial={{
        quote: "Our conversion rate was holding us back. AsraX solved it by rewriting our landing pages and tightening the copy. It's like we unlocked a brand new ad account.",
        author: "Sarah T.",
        role: "VP Product, MetricsHub",
        image: "/img/test-sarah.jpg"
      }}
      faqs={[
        { q: "How quickly will I see results?", a: "Landing pages and ad copy typically move metrics within 30 days. Long-form content compounds over 60–90+ days." },
        { q: "What's the minimum engagement?", a: "$1,000 / month — enough scope to build a real asset, not one-off pieces." },
        { q: "Who will I be working with?", a: "A senior strategist who runs your account, supported by writers and designers in your brand voice." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "Revisions are unlimited within scope. If we're not delivering, we re-scope or you walk — no penalties." }
      ]}
      finalHeading="Ready to grow with content that sells?"
    />
  ),
});
