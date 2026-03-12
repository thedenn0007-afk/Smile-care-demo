"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kavya Reddy",
    location: "Koramangala, Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    treatment: "Teeth Whitening",
    review:
      "I had my teeth whitening done at SmileCare and the results are just amazing! Dr. Priya was extremely professional and the entire experience was pain-free. My smile looks 10 years younger. Highly recommend this clinic to everyone!",
    date: "December 2024",
    color: "#2E86DE",
  },
  {
    name: "Arjun Patel",
    location: "Whitefield, Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    treatment: "Dental Implants",
    review:
      "After losing a tooth in an accident, I was very anxious about implants. Dr. Suresh made the entire process so comfortable and explained every step clearly. Three months later, it feels completely natural. Best dental clinic in Bangalore without doubt!",
    date: "January 2025",
    color: "#00C896",
  },
  {
    name: "Meera Krishnan",
    location: "Indiranagar, Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    treatment: "Braces Treatment",
    review:
      "I've been getting braces treatment for my daughter here for over a year. Dr. Anjali is wonderful with kids — so patient and gentle. The staff is always smiling and welcoming. The clinic is super clean and modern. Couldn't be happier!",
    date: "February 2025",
    color: "#EC4899",
  },
  {
    name: "Rohan Shetty",
    location: "HSR Layout, Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    treatment: "Root Canal Treatment",
    review:
      "Had a terrible toothache and was dreading root canal. Dr. Rahul was so skilled — I barely felt anything! The clinic uses the latest technology, which really makes a difference. Follow-up care was excellent too. Thank you SmileCare!",
    date: "March 2025",
    color: "#F59E0B",
  },
  {
    name: "Deepika Nair",
    location: "Jayanagar, Bangalore",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    treatment: "Smile Design",
    review:
      "I always felt self-conscious about my smile. After the smile design treatment with Dr. Priya, I can't stop smiling! The veneers look completely natural. The entire team at SmileCare is caring and professional. Life-changing experience!",
    date: "March 2025",
    color: "#8B5CF6",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F9FBFC 0%, #E8F1FA 100%)" }}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Patient Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            What Our{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              Patients
            </span>{" "}
            Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span
              className="text-muted text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              4.9/5 from 200+ Google reviews
            </span>
          </motion.div>
        </div>

        {/* Featured / Large testimonial */}
        <div className="mb-8">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 max-w-3xl mx-auto border border-secondary relative"
            style={{ boxShadow: "0 8px 40px rgba(46,134,222,0.12)" }}
          >
            <Quote
              className="absolute top-8 right-8 w-10 h-10 opacity-10"
              style={{ color: testimonials[activeIndex].color }}
            />

            <div className="flex items-start gap-5 mb-6">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-2xl object-cover shadow-md flex-shrink-0"
              />
              <div>
                <h4
                  className="text-lg font-bold text-textDark"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {testimonials[activeIndex].name}
                </h4>
                <p
                  className="text-sm text-muted mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {testimonials[activeIndex].location}
                </p>
                <div className="flex items-center gap-3">
                  <StarRating rating={testimonials[activeIndex].rating} />
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: testimonials[activeIndex].color + "15",
                      color: testimonials[activeIndex].color,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {testimonials[activeIndex].treatment}
                  </span>
                </div>
              </div>
            </div>

            <p
              className="text-textDark leading-relaxed text-lg italic"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
            >
              &quot;{testimonials[activeIndex].review}&quot;
            </p>

            <p
              className="text-xs text-muted mt-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {testimonials[activeIndex].date} · Google Review
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-secondary flex items-center justify-center hover:bg-secondary hover:border-primary transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-textDark" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all rounded-full ${
                  i === activeIndex ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-secondary flex items-center justify-center hover:bg-secondary hover:border-primary transition-all"
          >
            <ChevronRight className="w-5 h-5 text-textDark" />
          </button>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                i === activeIndex ? "bg-secondary" : "hover:bg-secondary/50"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className={`w-10 h-10 rounded-full object-cover border-2 transition-all ${
                  i === activeIndex ? "border-primary" : "border-transparent"
                }`}
              />
              <span
                className="text-xs text-muted text-center hidden md:block"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
