import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — AsraX Media" },
      { name: "description", content: "Social that builds belief, not just followers. Strategy, content, and community for LinkedIn, Instagram, and Meta." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Social Media Marketing"
      title="Build your brand and fill your pipeline."
      subtitle="Strategy, content, and community for LinkedIn, Instagram, and Meta — so your brand stops scrolling past people and starts staying with them."
      heroImage="/img/social-media-hero.jpg"
      introHeading="What does Social Media actually look like?"
      introParagraphs={[
        "Most brands post for the sake of posting. The result is a feed full of content that nobody remembers, nobody acts on, and nobody buys from.",
        "We build social as a sales asset. Every post earns its place by either building belief, starting conversations, or driving real action — and the content compounds over time into a brand people trust before they ever talk to you.",
        "We handle content templates, text copywriting, visual editing, scheduling, and community routing tasks under a single streamlined system."
      ]}
      introImage="/img/social-media-intro.jpg"
      features={[
        { title: "Platform Optimisation", desc: "Build brand assets and profile templates across networks." },
        { title: "Monthly Content Calendars", desc: "Define post topics, dates, and campaign themes." },
        { title: "Static & Video Content", desc: "Produce visual graphics, infographics, reels, and shorts." },
        { title: "Captions for Buyers", desc: "Write captions focused on building authority and driving messages." },
        { title: "Community Management", desc: "Filter comments and direct queries to CRM booking pipelines." },
        { title: "Channel Performance Audits", desc: "Trace views, followers, click-through rates, and enquiries." }
      ]}
      processHeading="How we run your Social Media"
      steps={[
        { title: "Brand Audit & Research", body: "We study target profiles and define brand communication rules." },
        { title: "Pillars & Calendar", body: "We construct key content themes and calendar scheduling blocks." },
        { title: "Create & Produce", body: "We produce the visual and textual assets (captions, images, video)." },
        { title: "Review & Adjust", body: "We monitor post analytics and update formats weekly to optimize engagement." }
      ]}
      results={[
        { value: "12,000", label: "LinkedIn Followers" },
        { value: "60+", label: "Inbound Leads / Q1" },
        { value: "3x", label: "Branded Search Lift" }
      ]}
      testimonial={{
        quote: "I was skeptical about personal branding. AsraX handled the writing while keeping my voice 100% authentic. The inbound inquiries we are getting are high-quality decision-makers.",
        author: "Robert H.",
        role: "CEO, Aero Logistics",
        image: "/img/test-robert.jpg"
      }}
      faqs={[
        { q: "How quickly will I see results?", a: "Expect engagement growth within the first 30 days and meaningful inbound leads or brand traction from months 2–3 onwards." },
        { q: "What's the minimum engagement?", a: "$1,000 / month. Social only works when it's consistent — anything less means inconsistent output." },
        { q: "Who will I be working with?", a: "A content strategist, a copywriter, and a designer — all coordinated under one senior lead." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "We review the data together, adjust the strategy, and if we're still not the right fit, you walk." }
      ]}
      finalHeading="Ready to grow with social media?"
    />
  ),
});
