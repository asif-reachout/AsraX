import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO, GEO & AEO Agency — AsraX Media" },
      { name: "description", content: "Technical fixes, content and authority that turn search into pipeline — across Google and AI answer engines like ChatGPT and Gemini." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="SEO, GEO & AEO"
      title="SEO, GEO & AEO Agency Built Around Revenue, Not Rankings Alone"
      subtitle="Technical fixes, content and authority that turn search into pipeline."
      heroImage="/img/seo-hero.jpg"
      introHeading="What Does An SEO, GEO & AEO Agency Actually Manage?"
      introParagraphs={[
        "Strong growth starts with a strong foundation. We improve the technical health of your website — from site speed and indexing to structured data — so search engines and AI platforms can understand your business.",
        "From there, we create content around the topics your audience is actively searching for, helping turn organic visibility into qualified leads.",
        "We strengthen your authority through high-quality links and digital PR, while optimizing your content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), making it easier for AI platforms like ChatGPT and Gemini to discover, understand, and reference your brand."
      ]}
      introImage="/img/seo-intro.jpg"
      featuresHeading="Everything Included In Your SEO, GEO & AEO Plan"
      features={[
        { title: "Technical Audit & Fixes", desc: "Your crawl budget, core web vitals, speed, and redirects get optimized from day one." },
        { title: "Intent Keyword Research", desc: "We prioritize search intent over search volume, so your content reaches the right people at the right time." },
        { title: "On-Page SEO, GEO & AEO Optimization", desc: "We refine your page structure, headings, and markup so your content is easier for both search engines and your audience to understand." },
        { title: "Content Engine Plans", desc: "We plan content around the questions, challenges, and decisions your audience is already searching for." },
        { title: "Premium Link Building", desc: "We grow your search presence through quality partnerships and digital PR, avoiding shortcuts that create long-term risks." },
        { title: "Detailed Metric Reporting", desc: "We monitor your visibility, rankings, and conversions to continuously improve your search strategy and results." }
      ]}
      processHeading="How We Run Your Search Growth"
      processLead="Getting started with your SEO agency is straightforward, and built to cover both traditional search and how AI engines read your site."
      steps={[
        { title: "Discovery Call", body: "Together, we identify your goals, market position, and visibility gaps to create a clear path forward." },
        { title: "Strategy & Audit", body: "Your technical SEO, content performance, and AI search visibility are reviewed together to uncover gaps and define the next steps." },
        { title: "Execute & Build Authority", body: "We launch technical enhancements, optimized content, and outreach strategies while building schema into your pages from day one." },
        { title: "Reporting & Scale", body: "You get a clear view of your rankings, traffic, and AI visibility in one place, helping us measure progress and scale what's working." }
      ]}
      /* Stats and testimonial intentionally omitted — client is supplying real figures and a real quote. */
      faqs={[
        { q: "How fast does SEO show results?", a: "Technical improvements and schema updates are usually implemented within 4–8 weeks. As content and authority grow, rankings and traffic build over the following 3–6 months. We also optimise pages for AEO from the start, helping your brand gain visibility in AI platforms alongside traditional search growth." },
        { q: "What's the minimum engagement?", a: "None. You stay on a rolling monthly agreement, not a long-term lock-in — though SEO genuinely needs a few months to build momentum before results can be fairly judged." },
        { q: "Who owns the account — a strategist or a tool?", a: "A dedicated senior strategist owns every account, not software running on autopilot. Tools handle the heavy lifting — crawling, monitoring, and surfacing signals — but every recommendation that ships gets reviewed and approved by a human who understands your business." },
        { q: "How quickly will GEO show impact?", a: "Answer-first restructuring and schema fixes can register in 3 to 6 weeks. Steady citation presence across AI engines typically builds over 3 to 6 months, as entity authority and topical depth compound — tracked inside your weekly reporting, alongside your traditional search metrics." },
        { q: "How is AEO different from waiting on traditional rankings?", a: "AI answer engines can start citing well-structured content faster than Google fully re-ranks a page, since they're pulling direct answers rather than re-crawling and re-scoring an entire site. That's why AEO-ready structure often shows visibility gains before traditional SEO metrics catch up." }
      ]}
      finalHeading="Ready To Grow With SEO?"
      finalSub="Book a free strategy call — no pitch, just a useful conversation about your numbers."
    />
  ),
});
