// ============================================================
// sections/Moment.jsx
// Sección emocional editorial.
// Reemplaza la timeline tradicional.
// Configurable desde CONFIG.moment
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { TagLine, Section } from "../UI";

export default function Moment() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <Section className="bg-[#fdfaf6]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <TagLine>Nuevo capítulo</TagLine>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-sm mb-12">
          <motion.img
            src={CONFIG.moment.image}
            alt=""
            initial={{ scale: 1.08 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-[500px] md:h-[620px] object-cover"
            style={{
              filter: "brightness(.97) saturate(.9)",
            }}
          />
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="text-center"
        >
          <p
            className="
              font-serif
              italic
              text-[#3d3830]
              leading-[1.4]
              mx-auto
              max-w-2xl
            "
            style={{
              fontSize: "clamp(28px,5vw,44px)",
              fontWeight: 300,
            }}
          >
            “{CONFIG.moment.quote}”
          </p>

          {CONFIG.moment.text && (
            <p
              className="
                mt-8
                mx-auto
                max-w-xl
                text-[#6d675d]
                leading-relaxed
                text-[15px]
                md:text-base
              "
            >
              {CONFIG.moment.text}
            </p>
          )}
        </motion.blockquote>
      </motion.div>
    </Section>
  );
}