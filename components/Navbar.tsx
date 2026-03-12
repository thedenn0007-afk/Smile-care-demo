"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Tooth SVG Icon */}
            <div className="w-11 h-11 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow border border-secondary">
              <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8C14 8 8 14 8 22C8 28 10 32 12 36C14 40 14 56 20 56C24 56 24 46 32 46C40 46 40 56 44 56C50 56 50 40 52 36C54 32 56 28 56 22C56 14 50 8 44 8C40 8 36 11 32 11C28 11 24 8 20 8Z" fill="#2E86DE" opacity="0.15"/>
                <path d="M20 8C14 8 8 14 8 22C8 28 10 32 12 36C14 40 14 56 20 56C24 56 24 46 32 46C40 46 40 56 44 56C50 56 50 40 52 36C54 32 56 28 56 22C56 14 50 8 44 8C40 8 36 11 32 11C28 11 24 8 20 8Z" stroke="#2E86DE" strokeWidth="3.5" strokeLinejoin="round"/>
                <circle cx="24" cy="22" r="3" fill="#00C896"/>
                <circle cx="40" cy="22" r="3" fill="#00C896"/>
              </svg>
            </div>

            {/* Text */}
            <div className="leading-tight">
              <div className="flex items-baseline gap-1">
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: scrolled ? "#1A1A1A" : "#ffffff", lineHeight: 1 }}>
                  Smile
                </span>
                <span style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: scrolled ? "#2E86DE" : "#7DEDC8", lineHeight: 1 }}>
                  Care
                </span>
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: scrolled ? "#2E86DE" : "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>
                Dental Clinic
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? scrolled
                        ? "text-primary bg-secondary"
                        : "text-white bg-white/15"
                      : scrolled
                      ? "text-textDark hover:text-primary hover:bg-secondary"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold text-primary bg-secondary px-4 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => handleNavClick("#appointment")}
              className="btn-primary text-sm py-2.5 px-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-textDark hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8 mt-4">
                <div className="font-heading font-800 text-xl text-textDark" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  SmileCare
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-secondary rounded-lg">
                  <X className="w-5 h-5 text-textDark" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary bg-secondary"
                        : "text-textDark hover:text-primary hover:bg-secondary"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
                <a
                  href="tel:+919876543210"
                  className="btn-secondary justify-center text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
                <button
                  onClick={() => handleNavClick("#appointment")}
                  className="btn-primary justify-center text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
