import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/content")({
  head: () => ({
    meta: [
      { title: "Content Marketing Agency — AsraX Media" },
      { name: "description", content: "From content strategy to execution, we help brands build trust and generate leads through high-quality content built for search, AI answers, and real buyers." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Content Marketing"
      title="Content Marketing Agency That Creates Content That Converts"
      subtitle="From content strategy to execution, we help brands build trust and generate leads through high-quality content."
      heroImage="/img/content-hero.jpg"
      introHeading="What Does an SEO Content Agency Actually Do?"
      introParagraphs={[
        "An SEO content agency helps businesses create and optimize content that improves search visibility, attracts the right audience, and drives measurable growth. From keyword research and content strategy to blog creation, website copy, and AI-focused optimization, these agencies build content designed for both search engines and real users.",
        "Modern SEO content goes beyond ranking on Google. It focuses on SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) to ensure your brand appears in traditional search results, AI answers, and emerging search experiences."
      ]}
      introImage="/img/content-intro.jpg"
      featuresHeading="Everything included in your Content Marketing plan."
      features={[
        { title: "Landing Page Copywriting", desc: "Conversion-focused landing pages that engage visitors and drive action." },
        { title: "Ad Creative Directions", desc: "Ad scripts, static designs, video frames, hooks, and copy angles built to drive engagement and conversions." },
        { title: "SEO Blogs & Copy", desc: "SEO-optimized blogs and copy that improve rankings, attract traffic, and engage your audience." },
        { title: "LinkedIn Thought Leadership", desc: "B2B content marketing that builds LinkedIn authority and audience trust." },
        { title: "Email Sequences", desc: "Automated email sequences built to nurture prospects and increase conversions." },
        { title: "Brand Positioning Guides", desc: "Brand positioning guides that define your message, voice, and market identity." }
      ]}
      processHeading="How We Turn Content Into Growth"
      steps={[
        { title: "Strategy & Audit", body: "Analyze goals, audience, and content gaps to build winning strategies." },
        { title: "Funnel Planning", body: "Map content funnels that nurture leads and drive B2B conversions." },
        { title: "Production & Creation", body: "Create blogs, emails, case studies, and SaaS content that performs." },
        { title: "Distribution & Pitching", body: "Distribute content through channels that build reach and authority." }
      ]}
      /* Stats and testimonial intentionally omitted — client is supplying real figures and a real quote. */
      faqs={[
        { q: "How long does it take to see content marketing results?", a: "Content marketing is a long-term growth strategy. While some improvements in engagement and visibility can appear early, consistent SEO growth, authority building, and lead generation typically develop over time with ongoing optimization." },
        { q: "What is the minimum engagement required?", a: "Our engagement depends on your goals, content needs, and growth stage. We create flexible plans covering services like blogs, website copy, email sequences, lead magnets, case studies, and other B2B content assets." },
        { q: "Who will manage my content strategy and creation?", a: "You'll work with a dedicated team handling strategy, research, content creation, SEO optimization, and performance improvements to ensure every piece aligns with your business goals." },
        { q: "Do you offer monthly or long-term content marketing plans?", a: "Yes. We offer flexible engagement options based on your requirements, from ongoing monthly content support to long-term strategies focused on SEO, authority, and sustainable growth." },
        { q: "What if the content strategy doesn't deliver the expected results?", a: "We continuously analyze performance, gather insights, and optimize our approach. Our goal is to improve content effectiveness through data-driven strategy, testing, and refinement." }
      ]}
      finalHeading="Let's Build a Content Strategy"
      finalSub="Get a free content audit and strategy discussion."
    />
  ),
});
