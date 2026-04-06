"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { topPicks } from "@/data/siteData";

export default function TopPicks() {
  return (
    <section id="top-picks" className="section-padding bg-cream">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Customer Favorites</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            Most loved by regulars
          </h2>
          <p className="section-subtext">
            The items people come back for — again and again.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topPicks.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div className="group bg-warm-white rounded-2xl overflow-hidden border border-latte-light/20 card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Tag Badge */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-espresso/80 text-warm-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-base text-espresso leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-heading font-bold text-caramel text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
