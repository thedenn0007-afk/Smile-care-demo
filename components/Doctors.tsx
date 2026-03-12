"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Star, Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Priya Sharma",
    degree: "BDS, MDS – Orthodontics",
    experience: "12+ years",
    specialization: "Braces, Aligners & Malocclusion",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
    patients: "1800+",
    tags: ["Orthodontics", "Aligners", "Smile Design"],
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    name: "Dr. Rahul Mehta",
    degree: "BDS – General Dentistry",
    experience: "8+ years",
    specialization: "Implants & Restorative Care",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    patients: "1400+",
    tags: ["Implants", "Root Canal", "Extractions"],
    color: "#2E86DE",
    bg: "#E8F1FA",
  },
  {
    name: "Dr. Anjali Nair",
    degree: "BDS, MDS – Pedodontics",
    experience: "7+ years",
    specialization: "Children & Preventive Dentistry",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.9,
    patients: "1200+",
    tags: ["Pediatric", "Preventive", "Fluoride"],
    color: "#00C896",
    bg: "#D1FAE5",
  },
  {
    name: "Dr. Suresh Iyer",
    degree: "BDS, MDS – Oral Surgery",
    experience: "15+ years",
    specialization: "Oral Surgery & Maxillofacial",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5.0,
    patients: "2100+",
    tags: ["Surgery", "Wisdom Tooth", "Implants"],
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
];

export default function Doctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="doctors" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Meet Our Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Our{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              Expert
            </span>{" "}
            Dentists
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our highly qualified team brings expertise, empathy, and excellence to every
            patient interaction.
          </motion.p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-secondary transition-all duration-300"
              style={{ boxShadow: "0 4px 24px rgba(46,134,222,0.07)" }}
            >
              {/* Photo Header */}
              <div
                className="relative h-52 flex items-end p-5"
                style={{ background: `linear-gradient(135deg, ${doc.bg}, white)` }}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="absolute top-4 right-4 w-24 h-24 rounded-2xl object-cover shadow-lg border-2 border-white"
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: doc.color + "15" }}
                >
                  <GraduationCap className="w-5 h-5" style={{ color: doc.color }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-textDark mb-0.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: doc.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {doc.degree}
                </p>
                <p
                  className="text-sm text-muted mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {doc.specialization}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: doc.bg,
                        color: doc.color,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span
                      className="text-sm font-semibold text-textDark"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {doc.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-muted" />
                    <span
                      className="text-xs text-muted"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {doc.experience}
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-xs text-muted"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {doc.patients} patients
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
