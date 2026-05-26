// ============================================================
//  sections/Gallery.jsx
//  Mosaico editorial con fotos grandes.
//  Editá las fotos en config.js → images.gallery[]
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, TagLine, Section } from "../UI";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [featured, ...rest] = CONFIG.images.gallery;

  return (
    <Section className="bg-[#f9f5ef]">

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <TagLine>Nosotros</TagLine>
      </motion.div>

      {/* Layout mosaico:
          móvil  → columnas iguales 2×N
          tablet → foto grande izquierda + columna derecha  */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">

        {/* Foto destacada — ocupa 2 filas en md */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="col-span-2 md:col-span-1 md:row-span-2 overflow-hidden rounded-sm"
          style={{ minHeight: "260px" }}
        >
          <img
            src={featured}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ filter: "saturate(0.78) brightness(0.96)", minHeight: "260px" }}
          />
        </motion.div>

        {/* Fotos secundarias */}
        {rest.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.18 + i * 0.1 }}
            className="overflow-hidden rounded-sm"
            style={{ height: "180px" }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ filter: "saturate(0.78) brightness(0.96)" }}
            />
          </motion.div>
        ))}

      </div>
    </Section>
  );
}
