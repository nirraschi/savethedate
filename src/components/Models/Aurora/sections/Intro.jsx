// ============================================================
//  sections/Intro.jsx
//  Pantalla inicial fullscreen. Muestra nombres + fecha + CTA.
//  Al hacer click en el botón llama a onEnter() del padre.
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "../config";
import { GoldLineV, GoldLineH, GoldButton, TagLine } from "../UI";

export default function Intro({ onEnter }) {
  const [visible, setVisible] = useState(false);

  // Pequeño delay para que las animaciones entren bien
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#1a1612" }}
      >
        {/* Foto de fondo desenfocada */}
        <motion.img
          src={CONFIG.images.intro}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: visible ? 1 : 0, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "blur(4px) brightness(0.28) saturate(0.7)" }}
        />

        {/* Overlay con gradiente */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,150,90,0.12), transparent 70%)" }}
        />

        {/* Contenido central */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <GoldLineV className="mb-8" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <TagLine className="mb-6">{CONFIG.texts.introTagline}</TagLine>
          </motion.div>

          {/* Nombres */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: visible ? 1 : 0, filter: visible ? "blur(0px)" : "blur(10px)" }}
            transition={{ delay: 1.1, duration: 1.4 }}
            className="font-serif text-[#fdfaf6] leading-none tracking-wide"
            style={{ fontSize: "clamp(52px, 14vw, 86px)", fontWeight: 300 }}
          >
            {CONFIG.names.full}
          </motion.h1>

          {/* Fecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-5 mb-9 flex flex-col items-center gap-4"
          >
            <GoldLineH />
            <p className="font-sans text-[13px] tracking-[0.22em] text-[#d4c9bb] uppercase">
              {CONFIG.event.dateShort}
            </p>
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
            transition={{ delay: 1.9, duration: 1 }}
          >
            <GoldButton onClick={onEnter}>
              {CONFIG.texts.introCta}
            </GoldButton>
          </motion.div>

        </div>

        {/* Línea inferior decorativa */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 0.5 : 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10"
        >
          <GoldLineV />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
