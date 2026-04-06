"use client";

import AnimatedSection from "./AnimatedSection";
import { features } from "@/data/siteData";

export default function Features() {
  return (
    <section id="features" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Why People Love It</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            More than just coffee
          </h2>
          <p className="section-subtext">
            From the first sip to the last crumb — here&apos;s what makes every
            visit worth it.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="group bg-warm-white rounded-2xl p-7 border border-latte-light/20 card-hover h-full">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-[15px] text-espresso mb-2">
                  {feature.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
