"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    emoji: "🦷",
    title: "Teeth Cleaning",
    desc: "Professional scaling and polishing to remove plaque, tartar, and stains for a fresh, healthy smile.",
    color: "#2E86DE",
    bg: "#E8F1FA",
  },
  {
    emoji: "✨",
    title: "Teeth Whitening",
    desc: "Advanced whitening treatments to brighten your smile by up to 8 shades in a single session.",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    emoji: "🔬",
    title: "Root Canal Treatment",
    desc: "Pain-free RCT with modern rotary instruments to save infected teeth and relieve discomfort.",
    color: "#EF4444",
    bg: "#FEE2E2",
  },
  {
    emoji: "🦷",
    title: "Dental Implants",
    desc: "Permanent tooth replacement that looks and functions like natural teeth — titanium quality.",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    emoji: "😁",
    title: "Braces & Orthodontics",
    desc: "Metal, ceramic, and invisible aligners to straighten teeth and correct bite issues for all ages.",
    color: "#2E86DE",
    bg: "#DBEAFE",
  },
  {
    emoji: "💫",
    title: "Smile Design",
    desc: "Cosmetic dentistry to craft your ideal smile using veneers, bonding, and reshaping techniques.",
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    emoji: "👶",
    title: "Pediatric Dentistry",
    desc: "Gentle, child-friendly dental care in a comfortable environment to build lifelong healthy habits.",
    color: "#00C896",
    bg: "#D1FAE5",
  },
  {
    emoji: "🩺",
    title: "Tooth Extraction",
    desc: "Safe and painless extractions performed with precision, including surgical wisdom tooth removal.",
    color: "#6B7280",
    bg: "#F3F4F6",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(46,134,222,0.15)" }}
      className="service-card group bg-white rounded-2xl p-6 border border-secondary transition-all duration-300 cursor-default"
      style={{ boxShadow: "0 4px 24px rgba(46,134,222,0.06)" }}
    >
      {/* Icon */}
      <div
        className="service-icon w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{ backgroundColor: service.bg }}
      >
        {service.emoji}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-textDark mb-2 group-hover:text-primary transition-colors"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-muted leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {service.desc}
      </p>

      {/* Learn More */}
      <div
        className="mt-4 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: service.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        Learn more
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Comprehensive{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              Dental
            </span>{" "}
            Treatments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From routine cleanings to complex restorations, we offer a full spectrum of
            dental services under one roof.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p
            className="text-muted mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Not sure which treatment you need?
          </p>
          <a
            href="tel:+919876543210"
            className="btn-primary inline-flex"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            📞 Call for Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
