// ============================================================
//  sections/Countdown.jsx
//  Cuenta regresiva en tiempo real hasta la fecha del evento.
//  La fecha se configura en config.js → event.dateISO
// ============================================================

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "../config";
import { fadeUp, stagger, TagLine, Section } from "../UI";

// Hook que calcula el tiempo restante
function useCountdown(targetISO) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetISO) - new Date();
      if (diff <= 0) return;
      setTime({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return time;
}

// Un bloque individual del countdown
function CountUnit({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 px-4 text-center border-t border-[#e8dfd3]"
    >
      <span
        className="font-serif text-[#2a2520] block leading-none"
        style={{ fontSize: "clamp(48px, 13vw, 72px)", fontWeight: 300 }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-[10px] tracking-[0.22em] text-[#8a8178] uppercase mt-3 block">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(CONFIG.event.dateISO);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const units = [
    { value: days,    label: "Días" },
    { value: hours,   label: "Horas" },
    { value: minutes, label: "Minutos" },
    { value: seconds, label: "Segundos" },
  ];

  return (
    <Section className="bg-[#f9f5ef]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stagger(0.1)}
        className="max-w-sm mx-auto text-center"
      >
        <motion.div variants={fadeUp} className="mb-14">
          <TagLine>Faltan</TagLine>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-2 gap-px border border-[#e8dfd3]">
          {units.map((u, i) => (
            <div
              key={u.label}
              className={[
                i % 2 === 1 ? "border-l border-[#e8dfd3]" : "",
                i < 2      ? "border-b border-[#e8dfd3]" : "",
              ].join(" ")}
            >
              <CountUnit value={u.value} label={u.label} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
