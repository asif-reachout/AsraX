import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA({ heading = "Ready to grow?", sub = "Let's build a strategy designed around your numbers." }: { heading?: string; sub?: string }) {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-20 text-background sm:px-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow text-brand-glow">Let's talk</p>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl md:text-6xl">{heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-background/70 sm:text-lg">{sub}</p>
          <Link to="/contact" className="btn-brand mt-8">
            Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
