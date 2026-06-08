// Itinerario del evento — fondo oscuro, timeline vertical con íconos de Lucide.
// Los íconos se mapean por nombre desde el config.

import React from "react";
import { motion } from "framer-motion";
import { Wine, Heart, UtensilsCrossed, Music, Sparkles, Star, Camera, Gift, Sun } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

// Mapa de nombre de ícono (string en config) → componente Lucide
const ICON_MAP = {
  Glass:            Wine,
  Heart:            Heart,
  UtensilsCrossed:  UtensilsCrossed,
  Music:            Music,
  Sparkles:         Sparkles,
  Star:             Star,
  Camera:           Camera,
  Gift:             Gift,
  Sun:              Sun,
};

function TimelineItem({ item, index }) {
  const IconComponent = ICON_MAP[item.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
        marginBottom: index === config.schedule.length - 1 ? 0 : 36,
        position: "relative",
      }}
    >
      {/* Ícono + línea vertical */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(138,158,133,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(138,158,133,0.08)",
          }}
        >
          <IconComponent size={16} color="var(--accent)" strokeWidth={1.5} />
        </div>
        {/* Línea que conecta hacia abajo */}
        {index < config.schedule.length - 1 && (
          <div
            style={{
              width: "0.5px",
              flex: 1,
              minHeight: 36,
              background: "rgba(196,168,130,0.25)",
              marginTop: 8,
            }}
          />
        )}
      </div>

      {/* Texto */}
      <div style={{ paddingTop: 6 }}>
        <p
          style={{
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 4,
          }}
        >
          {item.time}
        </p>
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--text-light)",
            marginBottom: 2,
          }}
        >
          {item.title}
        </p>
        <p style={{ fontSize: 12, color: "rgba(250,247,242,0.5)", lineHeight: 1.5 }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Schedule() {
  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "72px 32px",
      }}
    >
      <FadeIn>
        <SectionLabel light>El día</SectionLabel>
        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(28px, 8vw, 38px)",
            fontWeight: 300,
            fontStyle: "italic",
            textAlign: "center",
            color: "var(--text-light)",
            marginBottom: 48,
          }}
        >
          Itinerario
        </h2>
      </FadeIn>

      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        {config.schedule.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
