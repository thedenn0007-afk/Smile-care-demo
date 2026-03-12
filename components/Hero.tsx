"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle, ChevronDown, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0d2b4e 0%, #1a4a7a 40%, #2E86DE 75%, #00a87a 100%)",
          }}
        />

        {/* Animated mesh blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,150,0.6) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(46,134,222,0.8) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#F9FBFC"
            />
          </svg>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block" />
      <div className="absolute top-32 right-32 w-40 h-40 border border-white/10 rounded-full hidden lg:block" />

      {/* Floating medical cross icons */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] text-white/10 text-6xl font-bold hidden xl:block select-none"
      >
        +
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[8%] text-white/10 text-4xl font-bold hidden xl:block select-none"
      >
        +
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              Bangalore's Trusted Dental Care
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Healthy{" "}
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#7DEDC8",
                }}
              >
                Smiles
              </span>
              <br />
              Start Here
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/75 mb-8 max-w-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Professional dental care with modern technology and experienced
              dentists. Your comfort is our priority at SmileCare, Indiranagar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => handleScroll("#appointment")}
                className="flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-secondary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl shadow-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-white/15 border border-white/30 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Call Clinic
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20dental%20services%20at%20SmileCare%20Dental%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1db954] transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-green-500/20"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: "Sterilized Equipment" },
                { icon: Clock, text: "Mon–Sat 9AM–8PM" },
                { icon: Star, text: "4.9★ Rated Clinic" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/70 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Icon className="w-4 h-4 text-accent" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 max-w-md ml-auto">
              <div className="mb-6">
                <div
                  className="text-sm font-semibold text-primary uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Why Choose Us
                </div>
                <h3
                  className="text-2xl font-bold text-textDark"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Excellence in Dental Care
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { number: "10+", label: "Years Experience", color: "text-primary" },
                  { number: "5000+", label: "Happy Patients", color: "text-accent" },
                  { number: "4", label: "Expert Doctors", color: "text-primary" },
                  { number: "4.9★", label: "Google Rating", color: "text-yellow-500" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl p-4 shadow-card border border-secondary"
                  >
                    <div
                      className={`text-3xl font-bold ${stat.color} mb-1`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xs text-muted"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary rounded-2xl">
                <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-textDark"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    100% Safe & Sterile
                  </div>
                  <div
                    className="text-xs text-muted"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    WHO certified sterilization protocols
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="flex flex-col items-center gap-2 mt-12 cursor-pointer"
          onClick={() => handleScroll("#services")}
        >
          <span
            className="text-white/50 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore Services
          </span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
