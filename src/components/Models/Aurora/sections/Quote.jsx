// ============================================================
//  sections/Quote.jsx
//  Frase romántica centrada con mucho espacio en blanco.
//  Editá el texto en config.js → texts.quote
// ============================================================

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONFIG } from "../config";
import { fadeUp, stagger, GoldLineV, GoldLineH, Section } from "../UI";

export default function Quote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Dividimos el texto en líneas por el \n del config
  const lines = CONFIG.texts.quote.split("\n");

  return (
    <Section className="bg-[#fdfaf6] text-center">
      <motion.div
        ref={ref}
        variants={stagger(0.18)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col items-center"
      >
        <motion.div variants={fadeUp}>
          <GoldLineV className="mb-14" />
        </motion.div>

        <motion.blockquote
          variants={fadeUp}
          className="font-serif italic text-[#3d3830] max-w-xl leading-relaxed mx-auto"
          style={{ fontSize: "clamp(22px, 5.5vw, 36px)", fontWeight: 300 }}
        >
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </motion.blockquote>

        <motion.div variants={fadeUp} className="mt-14">
          <GoldLineH />
        </motion.div>
      </motion.div>
    </Section>
  );
}
