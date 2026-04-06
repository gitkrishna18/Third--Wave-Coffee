"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { ambienceImages } from "@/data/siteData";

export default function Ambience() {
  return (
    <section id="gallery" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">The Space</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            Where great coffee meets great vibes
          </h2>
          <p className="section-subtext">
            Modern interiors, warm lighting, and thoughtful spaces — designed
            for everything from quick catch-ups to deep work sessions.
          </p>
        </AnimatedSection>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {ambienceImages.map((img, i) => (
            <AnimatedSection
              key={img.src}
              delay={i * 0.06}
              className={`${
                i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="group relative rounded-xl overflow-hidden img-hover">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={i === 0 ? 800 : 400}
                  height={i === 0 ? 600 : 400}
                  className="w-full h-full object-cover"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="text-warm-white text-sm font-medium">
                    {img.alt}
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
