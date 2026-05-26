// ============================================================
//  UI.jsx — Componentes reutilizables pequeños
//  Importalos en cualquier sección que los necesite.
// ============================================================

import { motion } from "framer-motion";

// Variante de animación estándar: aparece desde abajo
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

// Contenedor que dispara hijos en cascada
export const stagger = (delay = 0.12) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

// ── Línea dorada vertical ────────────────────────────────
export function GoldLineV({ className = "" }) {
  return (
    <span
      className={`block w-px h-14 mx-auto ${className}`}
      style={{ background: "linear-gradient(to bottom, transparent, #b8965a, transparent)" }}
    />
  );
}

// ── Línea dorada horizontal ──────────────────────────────
export function GoldLineH({ className = "" }) {
  return (
    <span
      className={`block h-px w-16 mx-auto ${className}`}
      style={{ background: "linear-gradient(to right, transparent, #b8965a, transparent)" }}
    />
  );
}

// ── Etiqueta superior (ej: "Con amor, les anunciamos") ───
export function TagLine({ children, className = "" }) {
  return (
    <p className={`font-sans text-[10px] tracking-[0.28em] text-[#b8965a] uppercase ${className}`}>
      {children}
    </p>
  );
}

// ── Sección wrapper con padding estándar ─────────────────
export function Section({ children, className = "", style = {} }) {
  return (
    <section className={`px-6 py-24 md:py-32 ${className}`} style={style}>
      {children}
    </section>
  );
}

// ── Botón dorado ─────────────────────────────────────────
export function GoldButton({ children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ backgroundColor: "#b8965a", color: "#fdfaf6" }}
      transition={{ duration: 0.35 }}
      className="border border-[#b8965a] text-[#b8965a] text-[10px] tracking-[0.18em] uppercase px-10 py-4 font-sans bg-transparent cursor-pointer"
    >
      {children}
    </motion.button>
  );
}
