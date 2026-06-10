// ╔══════════════════════════════════════════════════════╗
//  COUNTDOWN SECTION
//  Grid 4 tarjetas — fondo crema.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { useCountdown } from "../hooks.js";
import { Eyebrow, FADE_UP } from "../Components.jsx";

function TimeCard({ value, label, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: index * 0.08 }}
            className="flex flex-col items-center py-4 px-2 rounded-2xl"
            style={{
                background: "var(--q-bg-white)",
                border: "0.5px solid var(--q-border-accent)",
            }}
        >
            <span
                className="font-display leading-none"
                style={{
                    fontSize: "clamp(28px, 8vw, 36px)",
                    color: "var(--q-text-dark)",
                }}
            >
                {String(value).padStart(2, "0")}
            </span>
            <span
                className="mt-1.5 text-[9px] tracking-[0.18em] uppercase"
                style={{ color: "var(--q-text-muted)" }}
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
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-cream)" }}
        >
            <div className="max-w-sm mx-auto">
                <motion.div {...FADE_UP} className="mb-8 text-center">
                    <Eyebrow>{countdown.eyebrow}</Eyebrow>
                </motion.div>

                <div className="grid grid-cols-4 gap-2.5">
                    {units.map((u, i) => (
                        <TimeCard key={u.label} {...u} index={i} />
                    ))}
                </div>

                {countdown.note && (
                    <motion.p
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.4 }}
                        className="mt-6 text-center text-xs"
                        style={{ color: "var(--q-text-muted)" }}
                    >
                        {countdown.note}
                    </motion.p>
                )}
            </div>
        </section>
    );
}