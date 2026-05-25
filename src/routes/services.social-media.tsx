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
      title="Social media that builds belief, not just followers."
      subtitle="Strategy, content, and community for LinkedIn, Instagram, and Meta — so your brand stops scrolling past people and starts staying with them."
      introHeading="What social media looks like at AsraX."
      introParagraphs={[
        "Most brands post for the sake of posting. The result is a feed full of content that nobody remembers, nobody acts on, and nobody buys from.",
        "We build social as a sales asset. Every post earns its place by either building belief, starting conversations, or driving real action — and the content compounds over time into a brand people trust before they ever talk to you.",
      ]}
      features={[
        "Channel & audience strategy",
        "Monthly content calendar",
        "Static & video content production",
        "Captions written for your buyer",
        "Engagement & community management",
        "Monthly performance reporting",
      ]}
      approachHeading="Our approach to social."
      approachParagraph="Social media is not a billboard — it's a relationship. We write and design content that sounds like a real human, leads with a clear point of view, and gives your audience a reason to come back. We measure success by saves, shares, replies, and pipeline — not by likes."
      processHeading="How we run Social Media at AsraX."
      steps={[
        { title: "Strategy & positioning", body: "We define the brand voice, the audience, and the 3–4 content pillars that will run across every post." },
        { title: "Content calendar", body: "Every month you get a clear calendar mapped to your goals — launches, campaigns, evergreen content, and engagement posts." },
        { title: "Production", body: "We write, design, and edit every piece — static posts, carousels, short-form video, and stories." },
        { title: "Engagement & community", body: "We respond to DMs and comments in your brand voice (or guide your team to), so attention turns into conversations." },
        { title: "Monthly reporting & iteration", body: "Each month we review what worked, what didn't, and double down on the formats that drove real engagement and leads." },
      ]}
      resultsHeading="Real social media results we've delivered."
      results={[
        "Grew a founder's LinkedIn from 800 to 12,000 followers in 6 months",
        "Generated 60+ inbound client enquiries from organic LinkedIn content in Q1",
        "3x increase in branded search after 90 days of consistent social",
      ]}
      packages={[
        { name: "Starter", price: "$1,000 / mo", bullets: [
          "1 channel (LinkedIn or Instagram)",
          "12 posts / month",
          "Captions, design & scheduling",
          "Monthly reporting",
        ]},
        { name: "Growth", price: "$1,800 / mo", popular: true, bullets: [
          "2 channels",
          "20 posts + 4 short-form videos / month",
          "Engagement & community management",
          "2 strategy calls / month",
        ]},
        { name: "Scale", price: "From $3,000 / mo", bullets: [
          "Full multi-channel content engine",
          "Founder thought leadership program",
          "Short-form video at scale",
          "Custom dashboard & dedicated strategist",
        ]},
      ]}
      faqs={[
        { q: "How quickly will I see results?", a: "Expect engagement growth within the first 30 days and meaningful inbound leads or brand traction from months 2–3 onwards." },
        { q: "What's the minimum engagement?", a: "$1,000 / month. Social only works when it's consistent — anything less means inconsistent output." },
        { q: "Who will I be working with?", a: "A content strategist, a copywriter, and a designer — all coordinated under one senior lead." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly, with a 30-day notice period." },
        { q: "What happens if I'm not happy with the results?", a: "We review the data together, adjust the strategy, and if we're still not the right fit, you walk." },
      ]}
      finalHeading="Ready to grow with social media?"
    />
  ),
});
