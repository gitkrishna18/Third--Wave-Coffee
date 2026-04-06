"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent, branchInfo } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-coffee.png"
          alt="Third Wave Coffee Noida – barista crafting specialty latte art"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-24 pb-16">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {heroContent.badges.map((badge, i) => (
            <span
              key={badge}
              className="flex items-center gap-2.5 text-sm text-latte-light/90 tracking-wide"
            >
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-caramel" />
              )}
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-warm-white leading-[1.1] tracking-tight max-w-3xl mx-auto text-balance whitespace-pre-line"
        >
          {heroContent.headline}
        </motion.h1>

        {/* Subheading — narrower for readability */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 text-base md:text-lg text-latte-light/85 max-w-xl mx-auto leading-relaxed"
        >
          {heroContent.subheading}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={heroContent.primaryCTA.href}
            id="hero-order-now"
            className="bg-caramel text-warm-white px-9 py-4 rounded-full text-base font-semibold btn-hover hover:bg-espresso-light min-w-[180px] text-center"
          >
            {heroContent.primaryCTA.label}
          </a>
          <a
            href={heroContent.secondaryCTA.href}
            id="hero-visit-cafe"
            className="border-2 border-warm-white/30 hover:border-warm-white/60 text-warm-white px-9 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white/10 min-w-[180px] text-center"
          >
            {heroContent.secondaryCTA.label}
          </a>
        </motion.div>

        {/* Hours */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-sm text-latte-light/60 tracking-wide"
        >
          {branchInfo.hours}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-warm-white/25 flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 rounded-full bg-warm-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
