"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { aboutContent } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-espresso/10">
                <Image
                  src="/images/about-cafe.png"
                  alt="Third Wave Coffee café interior"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-sage/10 rounded-2xl -z-10" />
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-caramel/10 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Text Side */}
          <AnimatedSection direction="right" delay={0.15}>
            <div>
              <span className="section-label">
                {aboutContent.sectionLabel}
              </span>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
                {aboutContent.headline}
              </h2>
              {aboutContent.description.map((para, i) => (
                <p
                  key={i}
                  className="mt-5 text-charcoal-light leading-relaxed text-base md:text-lg"
                >
                  {para}
                </p>
              ))}

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {aboutContent.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-heading font-bold text-2xl md:text-3xl text-caramel">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-warm-gray">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
