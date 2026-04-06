"use client";

import AnimatedSection from "./AnimatedSection";

export default function Loyalty() {
  return (
    <section id="loyalty" className="section-padding bg-cream">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative bg-gradient-to-br from-espresso via-espresso-light to-espresso rounded-2xl p-10 md:p-14 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-caramel/8 rounded-full -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-sage/8 rounded-full translate-y-1/3 -translate-x-1/5" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <span className="text-caramel font-semibold text-[13px] tracking-[0.15em] uppercase">
                  Your Daily Ritual
                </span>
                <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl text-warm-white leading-tight">
                  Make every visit count
                </h2>
                <p className="mt-4 text-latte-light/70 max-w-md text-[15px] leading-relaxed">
                  Great coffee is better when it&apos;s a habit. Order through
                  the app for easy reorders, exclusive offers, and a
                  personalized coffee experience.
                </p>
              </div>

              {/* App preview / CTA */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="bg-warm-white/8 backdrop-blur-sm rounded-2xl px-8 py-6 border border-warm-white/8 text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <p className="text-warm-white font-heading font-semibold text-lg mb-1">
                    Order on the App
                  </p>
                  <p className="text-latte-light/50 text-sm mb-5">
                    Skip queues. Earn rewards.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-caramel text-warm-white px-8 py-3 rounded-full text-sm font-semibold btn-hover hover:bg-latte"
                  >
                    Download App
                  </a>
                  <p className="text-latte-light/35 text-xs mt-3">
                    Available on iOS & Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
