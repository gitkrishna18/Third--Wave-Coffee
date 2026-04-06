"use client";

import AnimatedSection from "./AnimatedSection";
import { branchInfo } from "@/data/siteData";

export default function Visit() {
  return (
    <section id="visit" className="section-padding bg-espresso relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="text-caramel font-semibold text-[13px] tracking-[0.15em] uppercase">
            Find Us
          </span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-warm-white">
            Visit the café
          </h2>
          <p className="mt-4 text-latte-light/70 max-w-2xl mx-auto">
            Walk in, sit down, and let a great cup of coffee set the tone.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info Card */}
          <AnimatedSection direction="left">
            <div className="bg-espresso-light/50 backdrop-blur-sm rounded-2xl p-8 border border-latte/10 h-full flex flex-col">
              {/* Address */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-lg text-warm-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address
                </h3>
                <p className="text-latte-light/80 text-sm leading-relaxed">
                  {branchInfo.address}
                </p>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-lg text-warm-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <a
                  href={`tel:${branchInfo.phone}`}
                  className="text-caramel hover:text-latte transition-colors text-lg font-medium"
                >
                  {branchInfo.phoneFormatted}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-lg text-warm-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h3>
                <p className="text-latte-light/80">{branchInfo.hours}</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href={branchInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions"
                  className="flex-1 bg-caramel text-warm-white px-6 py-3.5 rounded-full text-sm font-semibold text-center btn-hover hover:bg-espresso-light"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${branchInfo.phone}`}
                  id="call-now"
                  className="flex-1 border-2 border-latte/30 text-warm-white px-6 py-3.5 rounded-full text-sm font-semibold text-center hover:border-caramel hover:bg-caramel/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 h-full min-h-[400px]">
              <iframe
                src={branchInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Third Wave Coffee Noida Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
