"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Armchair, Shield, Coffee, Zap, Clock, Wifi, Car } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "Digital X-Ray & OPG",
    desc: "Low-radiation digital radiography for precise diagnosis with instant results.",
    color: "#2E86DE",
    bg: "#E8F1FA",
  },
  {
    icon: Armchair,
    title: "Modern Dental Chairs",
    desc: "Ergonomic, fully-adjustable chairs with built-in LED lighting for maximum comfort.",
    color: "#00C896",
    bg: "#D1FAE5",
  },
  {
    icon: Shield,
    title: "Sterilization Equipment",
    desc: "Class B autoclave and WHO-certified sterilization for all instruments between procedures.",
    color: "#EF4444",
    bg: "#FEE2E2",
  },
  {
    icon: Coffee,
    title: "Comfortable Waiting Area",
    desc: "Relaxing lounge with refreshments, magazines, and a calming, anxiety-free ambience.",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    desc: "State-of-the-art dental laser for minimally invasive gum treatments and whitening.",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    icon: Clock,
    title: "Flexible Appointments",
    desc: "Extended hours on weekdays and Saturdays to fit your busy schedule.",
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    icon: Wifi,
    title: "Cashless & EMI Options",
    desc: "Accepts all major cards, UPI, insurance plans, and 0% EMI financing available.",
    color: "#2E86DE",
    bg: "#DBEAFE",
  },
  {
    icon: Car,
    title: "Parking Available",
    desc: "Convenient dedicated parking space for two-wheelers and four-wheelers.",
    color: "#6B7280",
    bg: "#F3F4F6",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="facilities"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #E8F1FA 0%, #F9FBFC 100%)" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Facilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            World-Class{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              Infrastructure
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Equipped with the latest dental technology to ensure precise, efficient, and
            comfortable treatments.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(46,134,222,0.13)" }}
              className="bg-white rounded-2xl p-6 border border-secondary transition-all duration-300"
              style={{ boxShadow: "0 4px 16px rgba(46,134,222,0.06)" }}
            >
              <div
                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.bg }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3
                className="text-base font-bold text-textDark mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm text-muted leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {[
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=300&fit=crop&q=80",
            "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=300&h=300&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&q=80",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop&q=80",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=300&fit=crop&q=80",
            "https://placehold.co/300x300/DBEAFE/1D4ED8?text=Treatment+Room&font=montserrat",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square">
              <img
                src={src}
                alt={`Clinic photo ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
