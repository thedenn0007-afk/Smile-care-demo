"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Clinic Address",
    lines: ["#25 Dental Street, Indiranagar", "Bangalore, Karnataka 560038"],
    color: "#2E86DE",
    bg: "#E8F1FA",
    link: "https://maps.google.com/?q=Indiranagar,Bangalore",
    linkText: "Get Directions",
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    lines: ["+91 98765 43210", "+91 80 2345 6789"],
    color: "#00C896",
    bg: "#D1FAE5",
    link: "tel:+919876543210",
    linkText: "Call Now",
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: Closed"],
    color: "#F59E0B",
    bg: "#FEF3C7",
    link: "#appointment",
    linkText: "Book Online",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@smilecare-dental.in", "appointments@smilecare-dental.in"],
    color: "#EC4899",
    bg: "#FCE7F3",
    link: "mailto:info@smilecare-dental.in",
    linkText: "Send Email",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Find Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Visit{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              SmileCare
            </span>{" "}
            Clinic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Conveniently located in the heart of Indiranagar, Bangalore. Easy access
            via Metro and major roads.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactDetails.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-secondary transition-all duration-300"
              style={{ boxShadow: "0 4px 20px rgba(46,134,222,0.07)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3
                className="text-sm font-bold text-textDark mb-2 uppercase tracking-wide"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                {item.title}
              </h3>
              {item.lines.map((line) => (
                <p
                  key={line}
                  className="text-sm text-muted"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {line}
                </p>
              ))}
              <a
                href={item.link}
                onClick={item.link.startsWith("#") ? (e) => { e.preventDefault(); handleNavClick(item.link); } : undefined}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: item.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.linkText}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-secondary"
          style={{ boxShadow: "0 8px 40px rgba(46,134,222,0.1)", height: "420px" }}
        >
          <iframe
            title="SmileCare Dental Clinic Location – Indiranagar, Bangalore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8453856295387!2d77.63843407479513!3d12.978473387342766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168d0d0ee3e5%3A0x5d3b6f9de95474e9!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Bottom Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-gradient-to-r from-primary to-primaryDark rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              🦷 Dental Emergency? Call Us Immediately
            </h3>
            <p
              className="text-white/75 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We reserve emergency slots every day during clinic hours for urgent cases.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full font-semibold text-sm hover:bg-secondary transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#1db954] transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
