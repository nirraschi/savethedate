// ============================================================
//  sections/Hero.jsx
//  Foto fullscreen de la pareja con texto encima y parallax.
// ============================================================

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, stagger, GoldLineV, TagLine } from "../UI";

export default function Hero() {
  const ref = useRef(null);

  // Parallax: la foto se mueve más lento que el scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Foto con parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <img
          src={CONFIG.images.hero}
          alt={CONFIG.names.full}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5) saturate(0.75)" }}
        />
      </motion.div>

      {/* Gradiente inferior */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,22,18,0.55) 100%)" }}
      />

      {/* Texto central */}
      <motion.div
        variants={stagger(0.2)}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-7"
      >
        <motion.div variants={fadeUp}>
          <TagLine className="mb-5">Se casan</TagLine>
        </motion.div>

        <motion.h2
          variants={{
            hidden: { opacity: 0, filter: "blur(12px)", scale: 1.04 },
            show:   { opacity: 1, filter: "blur(0px)",  scale: 1,
                      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="font-serif text-[#fdfaf6] leading-none tracking-wide"
          style={{ fontSize: "clamp(58px, 16vw, 110px)", fontWeight: 300 }}
        >
          {CONFIG.texts.heroTitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-[#e8dfd3] mt-4 tracking-widest italic"
          style={{ fontSize: "clamp(20px, 5vw, 32px)", fontWeight: 300 }}
        >
          {CONFIG.names.full}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <GoldLineV className="h-9" />
        <motion.p
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="font-sans text-[9px] tracking-[0.22em] text-[#c4b49a] uppercase"
        >
          Scroll
        </motion.p>
      </div>

    </section>
  );
}
