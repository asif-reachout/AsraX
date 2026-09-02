import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Agency — AsraX Media" },
      { name: "description", content: "Content and paid social built around leads, not only likes. Strategy, community management, and Meta/LinkedIn campaigns tied to pipeline." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Social Media Marketing"
      title="Social Media Marketing Agency For Real Growth"
      subtitle="Content and paid social built around leads, not only likes."
      heroImage="/img/social-media-hero.jpg"
      introHeading="What Does A Social Media Marketing Agency Actually Manage?"
      introParagraphs={[
        "Social media can look busy without creating real business impact. Content gets published, ads run across platforms, and engagement numbers increase but without a clear connection to leads and revenue, it's difficult to know what's actually moving the business forward.",
        "That's where we approach social differently. We connect your content, paid campaigns, and audience insights to your actual growth goals.",
        "A senior strategist stays involved throughout the process, helping shape strategies around meaningful outcomes not just likes and followers. You get clear weekly updates, practical insights, and a flexible partnership focused on creating measurable growth."
      ]}
      introImage="/img/social-media-intro.jpg"
      featuresHeading="Every Platform, Built Around One Goal: Your Growth"
      features={[
        { title: "Social Media Strategy", desc: "Platforms, posting cadence, and content pillars built around your actual customers, with clarity on why each platform is used and what it should achieve." },
        { title: "Content Creation & Scheduling", desc: "Posts, captions, and creative produced and scheduled around what performs, not just what fills a calendar." },
        { title: "Organic Social Media Management", desc: "Day-to-day posting, replies, and community engagement handled by a real person, building trust with your existing audience without relying on paid spend." },
        { title: "Paid Social Advertising", desc: "Boosted posts and ad campaigns built around your sales goals, with every dollar tracked back to leads and conversions." },
        { title: "Social Media Analytics & Reporting", desc: "Reporting tied directly to pipeline and revenue, delivered as a plain-English update, not a dashboard you interpret alone." },
        { title: "Facebook And Instagram Marketing", desc: "Your Meta presence managed across Feed, Stories, and Reels, with organic content and paid campaigns working together instead of competing for attention." },
        { title: "LinkedIn Marketing", desc: "Your company page and B2B campaigns built around real pipeline, reaching the job titles and companies that actually matter to your business." }
      ]}
      processHeading="From Zero Presence To Real Results"
      processLead="Getting started with your social media marketing agency is straightforward, and built to take you from wherever you are today to a presence that actually converts."
      steps={[
        { title: "Discovery Call", body: "We learn where your brand stands, what you're trying to achieve, and what's preventing your current approach from working." },
        { title: "Strategy & Audit", body: "We review your existing platforms, content, and competitors to uncover gaps and opportunities, creating a strategy built around where your business can grow." },
        { title: "Content Rollout", body: "Your content calendar, community management, and paid social go live together, built around the platforms your audience actually uses." },
        { title: "Performance & Scale", body: "Your social performance is measured beyond likes and followers, connecting audience growth to the business outcomes that matter." }
      ]}
      /* Stats and testimonial intentionally omitted — client is supplying real figures and a real quote. */
      faqs={[
        { q: "When will I start seeing results?", a: "Your content and community strategy can begin going live within weeks. Meaningful momentum in engagement, audience growth, and pipeline typically builds over the first 90 days as we learn, optimize, and refine what works." },
        { q: "Am I locked into a long-term contract?", a: "No. We believe partnerships should be built on value, not commitments. You work with us on a flexible monthly basis without long-term lock-ins." },
        { q: "Can you guarantee follower growth?", a: "We focus on building the right audience, not chasing vanity metrics. While no one can honestly guarantee follower numbers, we focus on meaningful engagement, brand growth, and measurable business impact." },
        { q: "What's included in the monthly investment?", a: "Your plan includes strategy, content creation, scheduling, community management, and reporting. Paid social ad spend is handled separately when campaigns are part of your growth strategy." },
        { q: "What happens if it's not the right fit?", a: "There are no unnecessary commitments. If the partnership isn't creating value for your business, you have the flexibility to move forward in a different direction." }
      ]}
      finalHeading="Ready For Social Media Built Around Your Growth?"
      finalSub="Book a free strategy call and see what a presence built around leads, not just followers, looks like for you."
    />
  ),
});
