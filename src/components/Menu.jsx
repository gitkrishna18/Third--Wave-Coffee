"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { menuCategories } from "@/data/siteData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Menu Highlights</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            Curated for every craving
          </h2>
          <p className="section-subtext">
            A preview of our favorites — from signature brews to freshly baked
            treats.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {menuCategories.map((cat, i) => (
              <button
                key={cat.name}
                id={`menu-tab-${i}`}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-espresso text-warm-white shadow-lg shadow-espresso/15"
                    : "bg-warm-white text-charcoal-light hover:bg-latte-light/60 hover:text-espresso border border-latte-light/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Menu Items — Card Grid with Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="group bg-warm-white rounded-xl overflow-hidden border border-latte-light/15 card-hover flex items-stretch"
              >
                {/* Thumbnail Image */}
                <div className="relative w-24 sm:w-28 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="112px"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0 p-4 flex items-start gap-3">
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-[15px] text-espresso truncate">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span
                          className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            item.tag === "Bestseller"
                              ? "bg-caramel/15 text-caramel-dark"
                              : item.tag === "Popular"
                              ? "bg-sage/15 text-sage-dark"
                              : item.tag === "Must Try"
                              ? "bg-espresso/10 text-espresso-light"
                              : "bg-latte/20 text-charcoal-light"
                          }`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-warm-gray text-[13px] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Price */}
                  <span className="flex-shrink-0 font-heading font-bold text-caramel text-[15px] pt-0.5">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm text-warm-gray">
          Prices and availability may vary. Visit the café for the full menu.
        </p>
      </div>
    </section>
  );
}
