// ╔══════════════════════════════════════════════════════════╗
//  COUNTDOWN SECTION — versión card flotante
//  Vive dentro de ScrollBackground, sobre la foto fija.
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { useCountdown } from "../hooks.js";
import { Eyebrow, FloatingCard, FADE_UP } from "../Components.jsx";

// Tarjeta individual de tiempo
function TimeUnit({ value, label, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 + index * 0.07 }}
            className="flex flex-col items-center py-3 px-1 rounded-xl"
            style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.12)",
            }}
        >
            <span
                className="font-display font-light leading-none tabular-nums"
                style={{
                    fontSize: "clamp(26px,8vw,34px)",
                    color: "var(--b-accent)",
                }}
            >
                {String(value).padStart(2, "0")}
            </span>
            <span
                className="mt-1 text-[9px] tracking-[0.16em] uppercase"
                style={{ color: "var(--b-text-muted-dark)" }}
            >
                {label}
            </span>
        </motion.div>
    );
}

export default function CountdownSection({ countdown, dateISO }) {
    const { d, h, m, s } = useCountdown(dateISO);
    const units = [
        { value: d, label: countdown.labels.d },
        { value: h, label: countdown.labels.h },
        { value: m, label: countdown.labels.m },
        { value: s, label: countdown.labels.s },
    ];

    return (
        <div className="px-5 py-10">
            <div className="max-w-sm mx-auto">
                <FloatingCard>

                    {/* Heading */}
                    <motion.div {...FADE_UP} className="mb-5">
                        <Eyebrow dark>{countdown.eyebrow}</Eyebrow>
                    </motion.div>

                    {/* Grid de tiempo */}
                    <div className="grid grid-cols-4 gap-2">
                        {units.map((u, i) => (
                            <TimeUnit key={u.label} {...u} index={i} />
                        ))}
                    </div>

                    {countdown.note && (
                        <motion.p
                            {...FADE_UP}
                            transition={{ ...FADE_UP.transition, delay: 0.45 }}
                            className="mt-4 text-center text-xs"
                            style={{ color: "var(--b-text-muted)" }}
                        >
                            {countdown.note}
                        </motion.p>
                    )}
                </FloatingCard>
            </div>
        </div>
    );
}