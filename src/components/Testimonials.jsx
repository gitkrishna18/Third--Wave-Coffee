"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { testimonials } from "@/data/siteData";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-caramel" : "text-cream-dark"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">What People Say</span>
          <h2 className="section-heading text-3xl md:text-4xl">
            Loved by coffee people
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-warm-white rounded-2xl p-8 md:p-10 shadow-sm border border-latte-light/15 text-center"
                >
                  {/* Avatar Initials */}
                  <div className="w-12 h-12 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-5">
                    <span className="font-heading font-bold text-caramel text-sm">
                      {testimonials[current].initials}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-espresso text-base md:text-lg leading-relaxed mb-6 font-medium">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  <StarRating rating={testimonials[current].rating} />

                  <div className="mt-4">
                    <p className="font-heading font-semibold text-espresso text-[15px]">
                      {testimonials[current].name}
                    </p>
                    <p className="text-warm-gray text-sm mt-0.5">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-5 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-latte-light/40 flex items-center justify-center text-charcoal-light hover:bg-espresso hover:text-warm-white hover:border-espresso transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "bg-caramel w-7"
                          : "bg-latte-light/60 w-2 hover:bg-caramel/40"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-latte-light/40 flex items-center justify-center text-charcoal-light hover:bg-espresso hover:text-warm-white hover:border-espresso transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
