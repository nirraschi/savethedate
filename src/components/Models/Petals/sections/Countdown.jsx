// Cuenta regresiva en tiempo real hasta la fecha del evento.
// Fondo oscuro, números grandes en serif.

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, past: false };
}

function Flip({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: 4,
          padding: "14px 0",
          minWidth: 72,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(36px, 10vw, 52px)",
            fontWeight: 300,
            color: "var(--text-light)",
            lineHeight: 1,
            display: "block",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontSize: "9px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginTop: 8,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeLeft(config.event.date));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(config.event.date)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "64px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <FadeIn>
        <SectionLabel light>Faltan</SectionLabel>
      </FadeIn>

      {time.past ? (
        <FadeIn delay={0.2}>
          <p
            className="text-center"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 28,
              fontStyle: "italic",
              color: "var(--accent-alt)",
            }}
          >
            ¡El gran día llegó!
          </p>
        </FadeIn>
      ) : (
        <div className="flex justify-center gap-4 flex-wrap">
          <Flip value={time.days}    label="días"    />
          <Flip value={time.hours}   label="horas"   />
          <Flip value={time.minutes} label="min"     />
          <Flip value={time.seconds} label="seg"     />
        </div>
      )}
    </section>
  );
}
