import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/google-ads")({
  head: () => ({
    meta: [
      { title: "Paid Marketing Agency — AsraX Media" },
      { name: "description", content: "One team owns every platform you run ads on — Google, Meta, LinkedIn, TikTok, Bing — and ties every penny of spend back to your revenue." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Paid Marketing"
      title="Paid Marketing Agency for Ambitious Brands"
      subtitle="One team owns every platform you run ads on, and ties every penny of spend directly back to your revenue."
      heroImage="/img/google-ads-hero.jpg"
      introHeading="What Paid Marketing Partners Should Be Managing For You?"
      introParagraphs={[
        "A paid marketing partner manages every paid channel your customers might see you on — Google Search, Performance Max, Shopping, Meta, LinkedIn, Bing and TikTok — as one connected budget instead of five disconnected accounts nobody's tying back to revenue.",
        "Paid media only works when spend, tracking and strategy move together. Without that, budget goes out the door, impressions and clicks look fine on a dashboard, but pipeline doesn't move — and the gap is often invisible until months of spend are already committed.",
        "That's the gap this closes. A dedicated strategist owns your account directly, campaigns get built around revenue and pipeline instead of vanity clicks, reporting comes weekly, written in plain language, and you're never locked into a contract if it's not working."
      ]}
      introImage="/img/google-ads-intro.jpg"
      featuresHeading="Everything Included in Your Paid Marketing Plan"
      features={[
        { title: "Google Ads Agency", desc: "Your Search, Shopping and Performance Max campaigns get built around buyer intent, not default targeting — capturing demand across Search, Display and YouTube from a single campaign." },
        { title: "Meta Ads Agency", desc: "Facebook and Instagram campaigns built to reach people already primed to buy, with placements across Feed, Stories and Reels and spend shifted toward whichever format converts." },
        { title: "LinkedIn Ads Agency", desc: "B2B pipeline built by targeting the exact job titles and company sizes that match your ideal customer, with lead gen forms your sales team can actually use." },
        { title: "TikTok Ads Agency", desc: "DTC and ecommerce campaigns built around the platform's native content style and tied back to real purchases, not just views." },
        { title: "Bing Ads Agency", desc: "Campaigns set up to capture the traffic your competitors skip — lower competition than Google Search, and often the easiest incremental win in your budget." },
        { title: "PPC Management", desc: "Your account structured, tracked and optimized as one system, with weekly bid and budget adjustments tied to what's actually converting." }
      ]}
      processHeading="How We Manage Your Paid Marketing"
      processLead="Getting started with your paid marketing partners is straightforward, and built around your business from day one."
      steps={[
        { title: "Discovery Call", body: "You walk us through your goals, your current spend, and where performance has been stalling." },
        { title: "Account Audit & Setup", body: "Your existing accounts, tracking and conversion data get audited and rebuilt, so nothing gets optimized on broken numbers." },
        { title: "Campaign Build & Launch", body: "Your campaigns get structured around buyer intent and launched across the platforms that fit your business and budget." },
        { title: "Testing & Early Optimization", body: "Your first weeks of data get used to cut what's underperforming and double down on what's converting." },
        { title: "Reporting & Scale", body: "You see results in plain weekly reporting, and as performance holds, your budget scales into what's working." }
      ]}
      /* Stats and testimonial intentionally omitted — client is supplying real figures and a real quote. */
      faqs={[
        { q: "How quickly will I see results?", a: "The first weeks reveal what's working and what needs adjustment. As data compounds, we optimize toward stronger performance and sustainable growth." },
        { q: "What's the minimum budget to work with you?", a: "We recommend a minimum monthly investment of $1,000 across ad spend and management. That gives us enough room to gather meaningful data, test strategies, and optimize toward real business growth — not guesswork." },
        { q: "Who will I be working with?", a: "You work directly with a strategist from day one, who stays hands-on with your account as it grows." },
        { q: "Do you sign monthly or yearly contracts?", a: "Monthly. You renew because the results earn it, not because you're contractually stuck." },
        { q: "What happens if I'm not happy with the results?", a: "No unnecessary commitments, no hidden restrictions. We focus on proving value through performance and continuous improvement." }
      ]}
      finalHeading="Let's Put One Team Behind Your Entire Paid Budget"
      finalSub="Schedule a conversation about your numbers — no pitch, just a clear look at where the opportunity is."
    />
  ),
});
