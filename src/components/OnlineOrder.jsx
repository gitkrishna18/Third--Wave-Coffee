"use client";

import AnimatedSection from "./AnimatedSection";
import { orderOptions } from "@/data/siteData";

export default function OnlineOrder() {
  return (
    <section id="order" className="section-padding bg-cream">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Get Your Fix</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            Craving your coffee fix?
          </h2>
          <p className="section-subtext">
            Order your way — delivered, picked up, or we&apos;ll sort it over a
            call.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {orderOptions.map((option, i) => (
            <AnimatedSection key={option.title} delay={i * 0.1}>
              <div className="group bg-warm-white rounded-2xl p-7 text-center border border-latte-light/15 card-hover flex flex-col h-full">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="font-heading font-semibold text-[15px] text-espresso mb-1.5">
                  {option.title}
                </h3>
                <p className="text-warm-gray text-sm mb-5 flex-grow leading-relaxed">
                  {option.description}
                </p>
                <a
                  href={option.href}
                  id={`order-${option.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block bg-espresso text-warm-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-caramel transition-colors duration-300"
                >
                  {option.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Platform callout */}
        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="text-warm-gray text-sm">
            Also available on{" "}
            <span className="font-semibold text-espresso/70">Swiggy</span>
            {" "}and{" "}
            <span className="font-semibold text-espresso/70">Zomato</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
