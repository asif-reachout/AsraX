import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Real Numbers, Real Strategy | AsraX Media" },
      { name: "description", content: "Straightforward takes on paid, organic, and everything between — from the team running the accounts." },
    ],
  }),
  component: BlogPage,
});

// ponytail: static page, no posts yet. Add a CMS/MDX loader when the client sends articles.
function BlogPage() {
  return (
    <SiteShell>
      <section
        className="relative overflow-hidden bg-cover bg-center pt-24 pb-[100px] max-md:py-[40px] text-white"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.65), rgba(26, 26, 26, 0.85)), url('/img/about-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative max-w-4xl">
          <p className="eyebrow text-brand-glow">BLOG</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-balance sm:text-6xl md:text-7xl text-white">
            Real Numbers, Real Strategy — <span className="text-gradient-brand">No Fluff</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl text-balance">
            Straightforward takes on paid, organic, and everything between.
          </p>
        </div>
      </section>

      <section className="section-content bg-background">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-card p-10 text-center text-ink-soft">
            First articles are on the way. Subscribe below and they'll land in your inbox.
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Ready To Put These Ideas To Work?"
        sub="Book a free strategy call and turn this into an actual plan for your business."
        btnText="Book a Free Strategy Call"
        btnLink="/contact"
      />
    </SiteShell>
  );
}
