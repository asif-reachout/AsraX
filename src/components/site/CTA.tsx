import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA({
  heading = "Ready to grow your business?",
  sub = "Book a free 30-minute strategy call — no commitments, just clarity.",
  btnText = "Book Your Free Call",
  btnLink = "/contact",
  anchor = false
}: {
  heading?: string;
  sub?: string;
  btnText?: string;
  btnLink?: string;
  anchor?: boolean;
}) {
  return (
    <section className="bg-brand text-brand-foreground text-center section-hero-cta">
      <div className="container-x flex flex-col items-center">
        <h2 className="text-4xl font-bold text-balance sm:text-5xl md:text-6xl">{heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-brand-foreground/80 sm:text-lg text-balance">{sub}</p>
        
        {anchor ? (
          <a href={btnLink} className="btn-white mt-8">
            {btnText} <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link to={btnLink} className="btn-white mt-8">
            {btnText} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
