"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Users, Heart } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience", icon: Award, color: "#2E86DE" },
  { number: "5000+", label: "Happy Patients", icon: Users, color: "#00C896" },
  { number: "4", label: "Expert Dentists", icon: Heart, color: "#EC4899" },
  { number: "4.9★", label: "Google Rating", icon: CheckCircle, color: "#F59E0B" },
];

const features = [
  "State-of-the-art digital X-ray & OPG",
  "Painless injections with topical anesthesia",
  "WHO-approved sterilization protocols",
  "EMI & insurance-friendly payment options",
  "Weekend and evening appointments",
  "Child-friendly, anxiety-free environment",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #E8F1FA 0%, #F9FBFC 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image / Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80"
                alt="SmileCare Dental Clinic interior"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge – experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-cardHover border border-secondary"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-textDark"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                  >
                    10+ Years
                  </div>
                  <div
                    className="text-xs text-muted"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Serving Bangalore
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge – patients */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-cardHover border border-secondary"
            >
              <div className="text-center">
                <div
                  className="text-2xl font-bold text-accent"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                >
                  5000+
                </div>
                <div
                  className="text-xs text-muted"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Happy Patients
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              About SmileCare
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold text-textDark mb-5 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Your Comfort is Our{" "}
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#2E86DE",
                }}
              >
                Priority
              </span>
            </h2>

            <p
              className="text-muted text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              SmileCare Dental Clinic provides comprehensive dental treatments using
              modern equipment and experienced dentists. Founded in 2014 in Indiranagar,
              Bangalore, our mission is to deliver comfortable and high-quality dental
              care to every patient.
            </p>

            <p
              className="text-muted text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We believe a healthy smile transforms lives. That's why we combine
              cutting-edge technology with a gentle, patient-first approach — ensuring
              every visit is as comfortable as possible.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span
                    className="text-sm text-textDark"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {feat}
                  </span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#appointment");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn-primary"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book Your Visit →
            </button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 text-center shadow-card border border-secondary"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: stat.color + "15" }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  color: stat.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm text-muted"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
