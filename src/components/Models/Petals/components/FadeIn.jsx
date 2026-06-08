// Componente reutilizable para animar entradas al hacer scroll.
// Envolvé cualquier sección con <FadeIn> para que aparezca suavemente.

import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",   // "up" | "down" | "left" | "right" | "none"
  className = "",
  once = true,
}) {
  const distance = 32;

  const initial = {
    opacity: 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
