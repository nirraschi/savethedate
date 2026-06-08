// ============================================================
//  sections/Final.jsx
//  Sección de cierre: gran foto + texto emocional.
//  Editá el texto en config.js → texts.finalText
// ============================================================

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CONFIG } from "../config";
import { GoldLineH, TagLine } from "../UI";

export default function Final() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Parallax en la foto
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const lines = CONFIG.texts.finalText.split("\n");

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Foto con parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <img
          src={CONFIG.images.final}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.65)" }}
        />
      </motion.div>

      {/* Gradiente */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(26,22,18,0.3), rgba(26,22,18,0.6))" }}
      />

      {/* Contenido */}
      <div className="relative z-10 text-center px-9 py-16 max-w-lg mx-auto flex flex-col items-center gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <GoldLineH />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[#fdfaf6] leading-snug tracking-wide"
          style={{ fontSize: "clamp(24px, 6vw, 42px)", fontWeight: 300 }}
        >
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif italic text-[#c4b49a] tracking-widest"
          style={{ fontSize: "clamp(18px, 4.5vw, 26px)", fontWeight: 300 }}
        >
          {CONFIG.names.full}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-5"
        >
          <GoldLineH />
          <p className="font-sans text-[10px] tracking-[0.22em] text-[#8a8178] uppercase">
            {CONFIG.event.dateShort}
          </p>
          
        </motion.div>

      </div>
    </section>
  );
}
