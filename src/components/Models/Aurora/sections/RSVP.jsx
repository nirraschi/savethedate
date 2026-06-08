// ============================================================
//  sections/RSVP.jsx
//  Formulario de confirmación. Inputs minimalistas.
//  Para conectar a un backend, editá la función handleSubmit.
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger, GoldLineV, TagLine, GoldButton, Section } from "../UI";
import { CONFIG } from "../config";




export default function RSVP() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });


  return (
    <Section className="bg-[#fdfaf6]">
      <div className="max-w-md mx-auto">

        <motion.div
          ref={ref}
          variants={stagger(0.14)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}><GoldLineV className="mb-14" /></motion.div>
          <motion.div variants={fadeUp}><TagLine className="mb-4">Confirmación</TagLine></motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[#3d3830] tracking-wide mb-14"
            style={{ fontSize: "clamp(24px, 6vw, 38px)", fontWeight: 300 }}
          >
            Nos gustaría saber<br />si podrás estar
          </motion.h2>
        </motion.div>



        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-8 text-left"
        >



          <div className="text-center pt-2">
          {/* Click para redirigir a googleform */}
            <GoldButton onClick={() => window.open(CONFIG.googleForm.url, "_blank")}>
              Confirmar asistencia
            </GoldButton>
          </div>
        </motion.div>


      </div>
    </Section>
  );
}
