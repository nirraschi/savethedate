// ============================================================
//  sections/Honeymoon.jsx
//  Sección "Luna de miel" con alias y CBU copiables.
//  Editá alias, cbu y plataforma abajo en HONEYMOON_CONFIG.
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Copy, Check } from "lucide-react";
import { CONFIG } from "../config";
// ── Configuración ────────────────────────────────────────
const HONEYMOON_CONFIG = {
  alias: "valentina.mateo",
  cbu: "0000000000000000000000",
  platform: {
    name: "Mercado Pago",
    url: "https://mpago.la/tu-link", // opcional
  },
};

// ── Hook: copiar al portapapeles ─────────────────────────
function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch {
      // fallback para navegadores viejos
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    }
  };
  return { copied, copy };
}

// ── Campo copiable ───────────────────────────────────────
function CopyField({ label, value }) {
  const { copied, copy } = useCopy();

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="font-sans text-[10px] tracking-[0.18em] text-[#8a8178] uppercase">
        {label}
      </span>

      <motion.button
        onClick={() => copy(value)}
        whileTap={{ scale: 0.985 }}
        className="w-full flex items-center justify-between gap-3
                   bg-[#1e1c19] border border-[#2e2b27]
                   rounded-sm px-4 py-4
                   text-left cursor-pointer group
                   transition-colors duration-300
                   hover:border-[#b8965a]/40"
      >
        <span
          className="font-sans text-sm font-light text-[#e8dfd3] tracking-wide truncate"
        >
          {value}
        </span>

        {/* Icono copy / check */}
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <Check size={16} className="text-[#b8965a]" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <Copy
                size={16}
                className="text-[#8a8178] group-hover:text-[#b8965a] transition-colors duration-300"
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Toast "copiado" */}
      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="font-sans text-[11px] text-[#b8965a] tracking-wide pl-1"
          >
            ¡Copiado!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────
export default function Honeymoon() {
  return (
    <section className="px-6 py-20 md:py-28" style={{ background: "#17150f" }}>
      <div className="max-w-sm mx-auto flex flex-col items-center">

        {/* Tag superior */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[10px] tracking-[0.28em] text-[#8a8178] uppercase mb-6"
        >
          Un regalo especial
        </motion.p>

        {/* Ícono avión */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5"
        >
          <motion.div
            animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <Plane
              size={30}
              strokeWidth={1.25}
              className="text-[#b8965a]"
              style={{ transform: "rotate(-10deg)" }}
            />
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="font-serif italic text-[#fdfaf6] text-center mb-4"
          style={{ fontSize: "clamp(30px, 8vw, 42px)", fontWeight: 400 }}
        >
          Luna de miel
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.26 }}
          className="font-sans text-sm font-light text-[#8a8178] text-center leading-relaxed tracking-wide mb-8"
        >
          {CONFIG.honeymoon.description}
        </motion.p>

        {/* Plataforma */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="font-sans text-sm text-[#b8965a] tracking-wide mb-6"
        >
          {CONFIG.honeymoon.bank}
        </motion.p>

        {/* Campos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full flex flex-col gap-5"
        >
          <CopyField label="Alias" value={CONFIG.honeymoon.alias} />
          <CopyField label="CBU" value={CONFIG.honeymoon.cbu} />
        </motion.div>

      </div>
    </section>
  );
}