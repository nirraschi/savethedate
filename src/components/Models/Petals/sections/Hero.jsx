// ============================================================
//  sections/Hero.jsx
//  Primera pantalla. Fondo oscuro con foto opcional.
//  Editá nombres, fecha y foto en config.js
// ============================================================

import { motion } from "framer-motion";
import { config } from "../config.js";
import Ornament from "../components/Ornament.jsx";

export default function Hero() {
  const { person1, person2 } = config.couple;
  const { dateDisplay, venue } = config.event;
  const heroPic = config.photos.hero;

  // Tiene foto real si el string no está vacío y no es el placeholder

  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-svh">

      {/* ── Fondo oscuro base ── */}
      <div className="absolute inset-0 bg-[var(--bg-dark)]" />

      {/* ── Foto de fondo ──
           IMPORTANTE: usamos un <img> absoluto en lugar de
           backgroundImage para que Vite/React resuelva bien la URL.
           Si la foto es una URL externa funciona igual. */}

      <img
        src={heroPic}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.95]"
      />


      {/* ── Overlay decorativo (solo sin foto) ── */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(138,158,133,0.06) 0%, transparent 70%)",
        }}
      />


      {/* ── Contenido ── */}
      <div className="relative z-10 px-8 py-16 w-full max-w-sm mx-auto flex flex-col items-center">

        {/* Etiqueta superior */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[9px] tracking-[5px] uppercase text-[var(--accent)] mb-8"
        >
          ¡Nos casamos!
        </motion.p>

        {/* Nombre 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light italic text-[#473b26] leading-[1.05]"
          style={{ fontSize: "clamp(52px, 16vw, 76px)" }}
        >
          {person1}
        </motion.h1>

        {/* Ampersand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="font-serif italic text-[var(--accent-alt)] leading-[1.2] my-1"
          style={{ fontSize: "clamp(28px, 9vw, 42px)" }}
        >
          &amp;
        </motion.p>

        {/* Nombre 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light italic text-[#473b26] leading-[1.05]"
          style={{ fontSize: "clamp(52px, 16vw, 76px)" }}
        >
          {person2}
        </motion.h1>

        {/* Ornamento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Ornament light />
        </motion.div>

        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[11px] tracking-[4px] uppercase text-white/70 mb-2"
        >
          {dateDisplay}
        </motion.p>

        {/* Lugar */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-serif italic text-[14px] tracking-[2px] text-[var(--accent-alt)]"
        >
          {venue}
        </motion.p>

        {/* Flecha scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-14"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/30 text-xl leading-none"
          >
            ↓
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}