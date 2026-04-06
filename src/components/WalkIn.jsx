"use client";

import AnimatedSection from "./AnimatedSection";
import { walkInSection, branchInfo } from "@/data/siteData";

export default function WalkIn() {
  return (
    <section id="walkin" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label">No Reservations</span>
            <h2 className="section-heading text-3xl md:text-4xl">
              {walkInSection.headline}
            </h2>
            <p className="section-subtext text-base">
              {walkInSection.subtext}
            </p>
          </AnimatedSection>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {walkInSection.points.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.1}>
                <div className="bg-warm-white rounded-xl p-6 text-center border border-latte-light/20 card-hover h-full">
                  <div className="text-3xl mb-3">{point.icon}</div>
                  <h3 className="font-heading font-semibold text-espresso text-[15px] mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTAs */}
          <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={branchInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-caramel text-warm-white px-7 py-3.5 rounded-full text-sm font-semibold btn-hover hover:bg-espresso-light min-w-[160px] text-center"
            >
              Get Directions
            </a>
            <a
              href={`tel:${branchInfo.phone}`}
              className="border-2 border-espresso/15 text-espresso px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:border-caramel hover:text-caramel min-w-[160px] text-center"
            >
              Call Store
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
