"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { coffeeExperience } from "@/data/siteData";

export default function CoffeeExperience() {
  return (
    <section
      id="experience"
      className="section-padding bg-espresso relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <AnimatedSection direction="left">
            <div>
              <span className="text-caramel font-semibold text-[13px] tracking-[0.15em] uppercase">
                {coffeeExperience.sectionLabel}
              </span>
              <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-warm-white leading-tight">
                {coffeeExperience.headline}
              </h2>

              <div className="mt-10 space-y-7">
                {coffeeExperience.features.map((feature, i) => (
                  <div key={feature.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-caramel/15 flex items-center justify-center text-caramel font-heading font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base text-warm-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-latte-light/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Image Side */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/25">
                <Image
                  src="/images/barista.png"
                  alt="Third Wave Coffee barista crafting espresso"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-5 -left-5 bg-caramel/90 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[180px]">
                <p className="text-warm-white font-heading font-semibold text-sm">
                  100% Arabica
                </p>
                <p className="text-warm-white/70 text-xs mt-0.5">
                  Sourced from India&apos;s finest estates
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
