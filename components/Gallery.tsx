"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    type: "before-after",
    label: "Teeth Whitening",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80&fit=crop",
    after:  "https://images.unsplash.com/photo-1508583732154-e9f9f6350538?w=400&q=80&fit=crop",
    tag: "Before / After", color: "#F59E0B",
  },
  {
    type: "clinic",
    label: "Reception & Waiting Area",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&fit=crop",
    tag: "Clinic", color: "#2E86DE",
  },
  {
    type: "treatment",
    label: "Modern Dental Chair",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&fit=crop",
    tag: "Equipment", color: "#00C896",
  },
  {
    type: "before-after",
    label: "Smile Makeover",
    before: "https://placehold.co/400x300/e5e5e5/888888?text=Before+Treatment&font=montserrat",
    after:  "https://placehold.co/400x300/E8F1FA/2E86DE?text=After+Treatment+✓&font=montserrat",
    tag: "Before / After", color: "#EC4899",
  },
  {
    type: "clinic",
    label: "Sterilization Room",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80&fit=crop",
    tag: "Facilities", color: "#8B5CF6",
  },
  {
    type: "treatment",
    label: "Digital X-Ray Technology",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    tag: "Technology", color: "#2E86DE",
  },
  {
    type: "clinic",
    label: "Treatment Room",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80&fit=crop",
    tag: "Clinic", color: "#00C896",
  },
  {
    type: "before-after",
    label: "Braces Result",
    before: "https://placehold.co/400x300/e5e5e5/888888?text=Before+Braces&font=montserrat",
    after:  "https://placehold.co/400x300/D1FAE5/059669?text=After+Braces+✓&font=montserrat",
    tag: "Before / After", color: "#F59E0B",
  },
];

function GalleryCard({ item, index, onOpen }: { item: typeof galleryItems[0]; index: number; onOpen: (item: typeof galleryItems[0]) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={() => onOpen(item)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
      style={{
        aspectRatio: item.type === "before-after" ? "4/3" : "4/3",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {item.type === "before-after" ? (
        <div className="flex h-full">
          <div className="flex-1 relative overflow-hidden">
            <img
              src={item.before}
              alt="Before"
              className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              Before
            </div>
          </div>
          <div className="w-0.5 bg-white z-10 flex-shrink-0" />
          <div className="flex-1 relative overflow-hidden">
            <img
              src={item.after}
              alt="After"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-primary/80 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              After
            </div>
          </div>
        </div>
      ) : (
        <img
          src={item.image!}
          alt={item.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Tag */}
      <div className="absolute top-3 left-3">
        <span
          className="text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm"
          style={{
            backgroundColor: item.color + "CC",
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {item.tag}
        </span>
      </div>

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p
          className="text-white text-sm font-medium truncate"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Gallery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-textDark mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Smile{" "}
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2E86DE",
              }}
            >
              Transformations
            </span>{" "}
            & Clinic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            See real results from our treatments and explore our modern, state-of-the-art facility.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} item={item} index={i} onOpen={setSelectedItem} />
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-2xl w-full bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "before-after" ? (
                <div className="flex h-72">
                  <div className="flex-1 relative">
                    <img src={selectedItem.before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full font-medium">Before</div>
                  </div>
                  <div className="w-1 bg-white flex-shrink-0" />
                  <div className="flex-1 relative">
                    <img src={selectedItem.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 right-4 bg-primary/80 text-white text-sm px-3 py-1 rounded-full font-medium">After</div>
                  </div>
                </div>
              ) : (
                <img src={selectedItem.image!} alt={selectedItem.label} className="w-full h-72 object-cover" />
              )}
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {selectedItem.tag}
                </span>
                <h3 className="text-xl font-bold text-textDark mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
                  {selectedItem.label}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
