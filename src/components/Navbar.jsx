"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, branchInfo } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-md shadow-espresso/5 py-2.5"
          : "bg-transparent py-4 lg:py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          aria-label="Third Wave Coffee Home"
        >
          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
            ☕
          </span>
          <div className="flex flex-col">
            <span
              className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? "text-espresso" : "text-warm-white"
              }`}
            >
              {branchInfo.brandName}
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-caramel" : "text-latte-light/80"
              }`}
            >
              {branchInfo.branchName}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-all duration-200 relative pb-1
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-caramel after:transition-all after:duration-300
                  ${
                    isActive
                      ? isScrolled
                        ? "text-espresso after:w-full"
                        : "text-warm-white after:w-full"
                      : isScrolled
                      ? "text-espresso/60 hover:text-espresso after:w-0 hover:after:w-full"
                      : "text-warm-white/70 hover:text-warm-white after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#order"
            className="bg-caramel text-warm-white px-5 py-2.5 rounded-full text-sm font-semibold btn-hover hover:bg-espresso-light"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 origin-center ${
              isMobileOpen
                ? "rotate-45 translate-y-2 bg-espresso"
                : isScrolled
                ? "bg-espresso"
                : "bg-warm-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isMobileOpen
                ? "opacity-0 scale-0"
                : isScrolled
                ? "bg-espresso"
                : "bg-warm-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 origin-center ${
              isMobileOpen
                ? "-rotate-45 -translate-y-2 bg-espresso"
                : isScrolled
                ? "bg-espresso"
                : "bg-warm-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-cream/98 backdrop-blur-sm z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.1 }}
                  className={`text-2xl font-heading font-semibold transition-colors ${
                    activeSection === link.href
                      ? "text-caramel"
                      : "text-espresso hover:text-caramel"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#order"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1 }}
                className="mt-4 bg-caramel text-warm-white px-8 py-3.5 rounded-full text-lg font-semibold btn-hover"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
