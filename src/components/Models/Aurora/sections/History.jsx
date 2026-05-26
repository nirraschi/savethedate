// ============================================================
//  sections/History.jsx
//  Timeline vertical con años, textos y fotos opcionales.
//  Editá los items en config.js → history[]
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { TagLine, Section } from "../UI";

// Un item individual de la historia
function HistoryItem({ item, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-6"
    >
      {/* Timeline: punto + línea */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        {/* Punto dorado */}
        <span
          className="w-2 h-2 rounded-full border border-[#b8965a] flex-shrink-0"
          style={{ background: "transparent" }}
        />
        {/* Línea vertical (no en el último) */}
        {!isLast && (
          <span
            className="w-px flex-1 mt-2 min-h-[80px]"
            style={{ background: "linear-gradient(to bottom, #b8965a, #e8dfd3)" }}
          />
        )}
      </div>

      {/* Contenido */}
      <div className="pb-10">
        <span className="font-sans text-[11px] tracking-[0.18em] text-[#b8965a] uppercase block mb-2">
          {item.year}
        </span>
        <p
          className="font-serif italic text-[#3d3830] leading-relaxed"
          style={{ fontSize: "clamp(18px, 4.5vw, 22px)", fontWeight: 300 }}
        >
          {item.text}
        </p>

        {/* Foto opcional */}
        {item.image && (
          <div className="mt-5 rounded-sm overflow-hidden h-52">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.8) brightness(0.95)" }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function History() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section className="bg-[#fdfaf6]">
      <div className="max-w-md mx-auto">

        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TagLine>Nuestra historia</TagLine>
        </motion.div>

        {/* Items */}
        {CONFIG.history.map((item, i) => (
          <HistoryItem
            key={item.year}
            item={item}
            isLast={i === CONFIG.history.length - 1}
          />
        ))}

      </div>
    </Section>
  );
}
