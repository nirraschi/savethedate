// ============================================================
//  sections/DressCode.jsx
//  Vestimenta: paleta visual + indicaciones.
//  Editá en config.js → palette[] y dressCodes[]
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, stagger, TagLine, Section } from "../UI";

export default function DressCode() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const lines = CONFIG.texts.dressCodeSubtitle.split("\n");

  return (
    <Section className="bg-[#f9f5ef] text-center">
      <motion.div
        ref={ref}
        variants={stagger(0.14)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-md mx-auto flex flex-col items-center"
      >

        <motion.div variants={fadeUp}>
          <TagLine className="mb-4">Vestimenta</TagLine>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-[#3d3830] tracking-wide mb-3"
          style={{ fontSize: "clamp(26px, 6.5vw, 42px)", fontWeight: 300 }}
        >
          {CONFIG.texts.dressCodeTitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-sans text-[13px] font-light text-[#8a8178] tracking-wide leading-relaxed mb-14"
        >
          {lines.map((l, i) => <span key={i}>{l}{i < lines.length - 1 && <br />}</span>)}
        </motion.p>

        {/* Paleta de colores */}
        <motion.div variants={fadeUp} className="flex gap-5 flex-wrap justify-center mb-14">
          {CONFIG.palette.map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span
                className="w-9 h-9 rounded-full border border-white/30 block"
                style={{ background: color }}
              />
              <span className="font-sans text-[9px] tracking-[0.14em] text-[#8a8178] uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Iconos de vestimenta */}
        <motion.div variants={fadeUp} className="flex gap-16 flex-wrap justify-center">
          {CONFIG.dressCodes.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 max-w-[130px]">
              <span className="text-2xl text-[#b8965a]">{icon}</span>
              <span className="font-sans text-[11px] font-light text-[#8a8178] tracking-wide leading-relaxed text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </Section>
  );
}
