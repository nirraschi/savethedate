// Foto separadora a pantalla completa entre secciones.
// Si no hay foto configurada, muestra un placeholder oscuro elegante.

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PhotoDivider({ src, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Efecto parallax suave
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);


  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: "70vw", maxHeight: 480, minHeight: 260 }}
      aria-hidden="true"
    >
    
        <motion.div
          style={{ y, position: "absolute", inset: "-15% 0", backgroundImage: `url(${src})`,
            backgroundSize: "cover", backgroundPosition: "center" }}
        />
      

      {/* Overlay sutil para oscurecer los bordes */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(28,25,23,0.3) 0%, transparent 30%, transparent 70%, rgba(28,25,23,0.3) 100%)",
        }}
      />
    </div>
  );
}
