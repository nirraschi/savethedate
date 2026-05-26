// ============================================================
//  sections/Ceremony.jsx
//  Información del evento: lugar, hora, fecha + botón al mapa.
//  Editá en config.js → event{}
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, stagger, GoldLineV, TagLine, GoldButton } from "../UI";

export default function Ceremony() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const details = [
    { label: "Fecha",  value: CONFIG.event.date },
    { label: "Hora",   value: CONFIG.event.time },
    { label: "Lugar",  value: CONFIG.event.address },
  ];

  return (
    <section className="px-6 py-24 md:py-32 text-center" style={{ background: "#2a2520" }}>
      <motion.div
        ref={ref}
        variants={stagger(0.15)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <GoldLineV className="mb-14" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <TagLine className="mb-10">La ceremonia</TagLine>
        </motion.div>

        {/* Nombre del venue */}
        <motion.h2
          variants={fadeUp}
          className="font-serif text-[#fdfaf6] tracking-wide mb-12"
          style={{ fontSize: "clamp(28px, 7vw, 52px)", fontWeight: 300 }}
        >
          {CONFIG.event.venue}
        </motion.h2>

        {/* Detalles */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-10 mb-14"
        >
          {details.map(({ label, value }) => (
            <div key={label} className="text-center min-w-[120px]">
              <span className="font-sans text-[9px] tracking-[0.2em] text-[#8a8178] uppercase block mb-2">
                {label}
              </span>
              <span
                className="font-serif text-[#e8dfd3] block"
                style={{ fontSize: "clamp(14px, 3.5vw, 18px)", fontWeight: 300 }}
              >
                {value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Botón mapa */}
        <motion.div variants={fadeUp}>
          <GoldButton onClick={() => window.open(CONFIG.event.mapsUrl, "_blank")}>
            Ver ubicación
          </GoldButton>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16">
          <GoldLineV />
        </motion.div>

      </motion.div>
    </section>
  );
}
