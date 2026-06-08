// Galería de fotos — grid masonry adaptable.
// Si no hay fotos reales, muestra placeholders elegantes.

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

// Abre una foto en pantalla completa al tocarla
function Lightbox({ src, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(28,25,23,0.95)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-light)",
          }}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <motion.img
          src={src}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            maxWidth: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: 4,
          }}
          onClick={e => e.stopPropagation()}
          alt="Foto ampliada"
        />
      </motion.div>
    </AnimatePresence>
  );
}

function GalleryItem({ src, index, onOpen }) {

  // Primer item ocupa 2 columnas
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onClick={() => onOpen(src)}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        aspectRatio: isLarge ? "16/9" : "1",
        overflow: "hidden",
        borderRadius: 4,
        cursor: "pointer",
        background: "#2a2520",
        position: "relative",
      }}
    >
      
        <motion.img
          src={src}
          alt={`Foto ${index + 1}`}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      

    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const photos = config.photos.gallery;

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "72px 24px",
      }}
    >
      <FadeIn>
        <SectionLabel light>Nosotros</SectionLabel>
        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(28px, 8vw, 38px)",
            fontWeight: 300,
            fontStyle: "italic",
            textAlign: "center",
            color: "var(--text-light)",
            marginBottom: 32,
          }}
        >
          Nuestra historia
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        {photos.map((src, i) => (
          <GalleryItem key={i} src={src} index={i} onOpen={setLightboxSrc} />
        ))}
      </div>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  );
}
