// Etiqueta de sección pequeña con letras espaciadas — usada en todos los bloques.

import React from "react";

export default function SectionLabel({ children, light = false }) {
  return (
    <p
      className="text-center tracking-[5px] uppercase mb-6"
      style={{
        fontSize: "10px",
        color: light ? "var(--accent)" : "var(--accent)",
        fontFamily: "Jost, sans-serif",
        fontWeight: 400,
      }}
    >
      {children}
    </p>
  );
}
