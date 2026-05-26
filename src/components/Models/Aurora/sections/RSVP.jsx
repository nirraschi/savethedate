// ============================================================
//  sections/RSVP.jsx
//  Formulario de confirmación. Inputs minimalistas.
//  Para conectar a un backend, editá la función handleSubmit.
// ============================================================

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, stagger, GoldLineV, GoldLineH, TagLine, GoldButton, Section } from "../UI";

// Input elegante reutilizable
function ElegantInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-sans text-[9px] tracking-[0.2em] text-[#8a8178] uppercase">
        {label}
      </label>
      <input
        className="bg-transparent border-0 border-b border-[#d4c9bb] pb-3 pt-1
                   font-sans text-sm font-light text-[#3d3830] tracking-wide
                   placeholder:text-[#c4b49a] placeholder:font-extralight
                   outline-none focus:border-[#b8965a] transition-colors duration-300
                   w-full"
        {...props}
      />
    </div>
  );
}

// Select elegante reutilizable
function ElegantSelect({ label, children, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-sans text-[9px] tracking-[0.2em] text-[#8a8178] uppercase">
        {label}
      </label>
      <select
        className="bg-transparent border-0 border-b border-[#d4c9bb] pb-3 pt-1
                   font-sans text-sm font-light text-[#3d3830] tracking-wide
                   outline-none focus:border-[#b8965a] transition-colors duration-300
                   w-full appearance-none cursor-pointer"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default function RSVP() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ nombre: "", asistencia: "", dieta: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // ── Acá conectás tu backend, Formspree, EmailJS, etc. ──
  const handleSubmit = () => {
    if (!form.nombre || !form.asistencia) return;
    console.log("RSVP enviado:", form); // reemplazá con tu lógica
    setSent(true);
  };

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

        <AnimatePresence mode="wait">
          {sent ? (
            // ── Mensaje de agradecimiento ──
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center py-10 flex flex-col items-center gap-6"
            >
              <GoldLineH />
              <p
                className="font-serif italic text-[#3d3830] leading-relaxed"
                style={{ fontSize: "clamp(18px, 4.5vw, 24px)", fontWeight: 300 }}
              >
                Gracias, {form.nombre}.<br />
                Te esperamos con el corazón abierto.
              </p>
              <GoldLineH />
            </motion.div>
          ) : (
            // ── Formulario ──
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-8 text-left"
            >
              <ElegantInput
                label="Tu nombre"
                placeholder="Nombre completo"
                value={form.nombre}
                onChange={set("nombre")}
              />

              <ElegantSelect
                label="¿Podrás asistir?"
                value={form.asistencia}
                onChange={set("asistencia")}
              >
                <option value="">Seleccioná una opción</option>
                <option value="si">Sí, allí estaré</option>
                <option value="no">Lamentablemente no podré</option>
              </ElegantSelect>

              <ElegantInput
                label="Restricción alimentaria"
                placeholder="Vegetariano, sin gluten, etc."
                value={form.dieta}
                onChange={set("dieta")}
              />

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[9px] tracking-[0.2em] text-[#8a8178] uppercase">
                  Un mensaje (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Lo que quieras decirnos…"
                  value={form.mensaje}
                  onChange={set("mensaje")}
                  className="bg-transparent border-0 border-b border-[#d4c9bb] pb-3 pt-1
                             font-sans text-sm font-light text-[#3d3830] tracking-wide
                             placeholder:text-[#c4b49a] placeholder:font-extralight
                             outline-none focus:border-[#b8965a] transition-colors duration-300
                             w-full resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <GoldButton onClick={handleSubmit}>
                  Confirmar asistencia
                </GoldButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Section>
  );
}
