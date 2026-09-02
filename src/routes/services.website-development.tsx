import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — AsraX Media" },
      { name: "description", content: "Websites built to convert, not just to look good. Clear calls to action and clean tracking, so the traffic your campaigns generate actually turns into leads." },
    ],
  }),
  // ponytail: placeholder hero/intro images — swap for real website-development shots
  component: () => (
    <ServicePage
      eyebrow="Website Development"
      title="A site built to convert, not just to look good."
      subtitle="Every page is built around clear calls to action and clean tracking, so the traffic your other campaigns generate actually turns into leads."
      heroImage="/img/home-hero.jpg"
      introHeading="What does Website Development actually look like?"
      introParagraphs={[
        "Most sites are designed to be admired. Yours needs to be designed to sell. A visitor should know within seconds what you do, who it's for, and what happens next.",
        "You get a site built around clear calls to action and clean tracking, so the traffic your other campaigns generate actually turns into leads instead of leaking out the back door.",
        "Speed, mobile, and search fundamentals are handled up front not bolted on later so your paid, organic, and content spend all lands somewhere that converts."
      ]}
      introImage="/img/team-office.jpg"
      features={[
        { title: "Conversion-First Design", desc: "Layouts, offers, and calls to action mapped to how your buyers actually decide." },
        { title: "Clean Tracking Setup", desc: "GA4, conversion events, and call/form tracking wired correctly from day one." },
        { title: "Fast, Mobile-First Build", desc: "Core Web Vitals in the green on the devices your customers actually use." },
        { title: "SEO-Ready Foundation", desc: "Clean structure, metadata, and schema so search work compounds instead of fighting the build." },
        { title: "Landing Pages For Campaigns", desc: "Dedicated pages for paid and content campaigns, not a generic homepage." },
        { title: "Handover & Support", desc: "You own the site and can edit it. We stay on for changes, tests, and fixes." }
      ]}
      processHeading="How we run your website build"
      steps={[
        { title: "Discovery", body: "We map your offer, your buyers, and the actions the site needs to drive." },
        { title: "Structure & Copy", body: "Page map, wireframes, and copy built around calls to action, not filler." },
        { title: "Build & Track", body: "Design and development, with analytics and conversion tracking wired in." },
        { title: "Launch & Improve", body: "Go live, watch real behaviour, and test the pages that carry the most traffic." }
      ]}
      /* Stats and testimonial omitted — no client-supplied figures or quote for this service yet. */
      faqs={[
        { q: "How long does a build take?", a: "Most sites go live in 4–8 weeks, depending on page count and how quickly content and approvals come back." },
        { q: "Do I own the website?", a: "Yes. You own the site, the domain, the hosting, and every analytics account we set up." },
        { q: "Can you work with our existing site?", a: "Yes. If the foundation is sound we rebuild the pages that matter and fix tracking rather than starting from scratch." },
        { q: "Will it be easy for my team to edit?", a: "Yes. You get a CMS your team can use and a walkthrough at handover." },
        { q: "Do you handle hosting and maintenance?", a: "We can. Hosting, updates, and ongoing conversion testing are available as a monthly add-on." }
      ]}
      finalHeading="Ready for a site that converts?"
    />
  ),
});
