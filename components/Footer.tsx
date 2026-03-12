"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Twitter, Youtube, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Book Appointment", href: "#appointment" },
];

const services = [
  "Teeth Cleaning",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Orthodontics",
  "Smile Design",
  "Pediatric Dentistry",
  "Tooth Extraction",
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Twitter, href: "#", label: "Twitter / X", color: "#1DA1F2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1f38 0%, #0d2b4e 50%, #1a3a5c 100%)" }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#F9FBFC" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 bg-white rounded-xl shadow-md flex items-center justify-center border border-white/20">
                <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8C14 8 8 14 8 22C8 28 10 32 12 36C14 40 14 56 20 56C24 56 24 46 32 46C40 46 40 56 44 56C50 56 50 40 52 36C54 32 56 28 56 22C56 14 50 8 44 8C40 8 36 11 32 11C28 11 24 8 20 8Z" fill="#2E86DE" opacity="0.15"/>
                  <path d="M20 8C14 8 8 14 8 22C8 28 10 32 12 36C14 40 14 56 20 56C24 56 24 46 32 46C40 46 40 56 44 56C50 56 50 40 52 36C54 32 56 28 56 22C56 14 50 8 44 8C40 8 36 11 32 11C28 11 24 8 20 8Z" stroke="#2E86DE" strokeWidth="3.5" strokeLinejoin="round"/>
                  <circle cx="24" cy="22" r="3" fill="#00C896"/>
                  <circle cx="40" cy="22" r="3" fill="#00C896"/>
                </svg>
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#ffffff", lineHeight: 1 }}>
                    Smile
                  </span>
                  <span style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "#7DEDC8", lineHeight: 1 }}>
                    Care
                  </span>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#2E86DE", lineHeight: 1.2 }}>
                  Dental Clinic
                </div>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Bangalore's most trusted dental clinic since 2014. Modern technology,
              experienced dentists, and a commitment to your smile.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <s.icon className="w-4 h-4 text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="w-3 h-px bg-primary/50 group-hover:w-5 group-hover:bg-primary transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="w-3 h-px bg-accent/50 group-hover:w-5 group-hover:bg-accent transition-all" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p
                  className="text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  #25 Dental Street, Indiranagar,<br />Bangalore – 560038
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@smilecare-dental.in"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  info@smilecare-dental.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p
                    className="text-sm text-white/60"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Mon – Sat: 9 AM – 8 PM
                  </p>
                  <p
                    className="text-sm text-white/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-white/40 flex items-center gap-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} SmileCare Dental Clinic. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            in Bangalore.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
