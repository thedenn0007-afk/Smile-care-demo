"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-72"
          >
            {/* Header */}
            <div
              className="p-4 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  SmileCare Dental
                </p>
                <p className="text-green-100 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  🟢 Usually replies instantly
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="bg-green-50 rounded-xl rounded-tl-none p-3 mb-4">
                <p className="text-textDark text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  👋 Hi! Welcome to SmileCare Dental Clinic. How can we help you today?
                </p>
              </div>
              <div className="space-y-2 mb-4">
                {[
                  "Book an Appointment",
                  "Enquire About Services",
                  "Know Clinic Hours",
                  "Ask About Pricing",
                ].map((msg) => (
                  <a
                    key={msg}
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(msg + " at SmileCare Dental Clinic, Bangalore")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-3 py-2 text-sm text-primary bg-secondary border border-secondary rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {msg}
                  </a>
                ))}
              </div>

              {/* Quick actions */}
              <div className="flex gap-2">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1db954] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-secondary text-primary py-2.5 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-colors border border-secondary"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="whatsapp-float w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1db954] transition-colors relative"
        aria-label="Chat on WhatsApp"
        style={{ position: "relative", bottom: "auto", right: "auto" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-xs font-bold" style={{ fontSize: "8px" }}>1</span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
