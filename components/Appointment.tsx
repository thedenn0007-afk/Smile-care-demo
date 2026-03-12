"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Phone, MessageCircle, CheckCircle, User, Mail, Clock } from "lucide-react";

const services = [
  "Teeth Cleaning",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Orthodontics",
  "Smile Design",
  "Pediatric Dentistry",
  "Tooth Extraction",
  "General Checkup",
  "Other",
];

export default function Appointment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="appointment"
      className="section-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d2b4e 0%, #1a4a7a 50%, #2E86DE 100%)",
      }}
    >
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(0,200,150,0.3) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left – Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-2 text-sm font-semibold mb-5 uppercase tracking-widest border border-white/20"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book Appointment
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Schedule Your{" "}
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#7DEDC8",
                }}
              >
                Dental Visit
              </span>
            </h2>
            <p
              className="text-white/70 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book an appointment online or reach us directly. We&apos;ll confirm your slot
              within 30 minutes during clinic hours.
            </p>

            {/* Quick contact */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Call Us Directly
                  </div>
                  <div
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +91 98765 43210
                  </div>
                </div>
                <div className="ml-auto text-white/40 group-hover:text-white transition-colors">→</div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/40 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    WhatsApp Enquiry
                  </div>
                  <div
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Quick response guaranteed
                  </div>
                </div>
                <div className="ml-auto text-white/40 group-hover:text-[#25D366] transition-colors">→</div>
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 p-4 bg-white/8 border border-white/15 rounded-2xl">
              <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <div
                  className="text-sm font-semibold text-white mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Clinic Hours
                </div>
                <div
                  className="text-white/60 text-sm space-y-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <div>Mon – Sat: 9:00 AM – 8:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-textDark mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                  >
                    Appointment Requested!
                  </h3>
                  <p
                    className="text-muted mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Thank you, {form.name}! We&apos;ll confirm your appointment on {form.phone} within 30 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <h3
                    className="text-xl font-bold text-textDark mb-5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                  >
                    Fill Appointment Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark placeholder-muted transition-all"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark placeholder-muted transition-all"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark placeholder-muted transition-all"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark transition-all appearance-none cursor-pointer"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="">Select Treatment / Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark transition-all"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark transition-all appearance-none"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <option value="">Preferred Time</option>
                        {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Additional notes or concerns (optional)"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-secondary border border-secondary rounded-xl text-sm text-textDark placeholder-muted transition-all resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />

                  <button
                    onClick={handleSubmit}
                    className="btn-primary w-full justify-center text-base py-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <Calendar className="w-5 h-5" />
                    Confirm Appointment
                  </button>

                  <p
                    className="text-xs text-muted text-center"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    ✓ Free consultation · ✓ No spam · ✓ Confirmation within 30 mins
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
