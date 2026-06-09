// ╔══════════════════════════════════════════════════════╗
//  QUINCE — CountdownSection
//  Cuenta regresiva hasta la fecha del evento.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { useCountdown } from "../hooks.js";
import { GoldDivider } from "../components.jsx";

// Tarjeta individual de unidad de tiempo
function TimeCard({ value, label, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
        >
            {/* Número */}
            <div
                className="relative flex items-center justify-center w-[72px] h-[72px] rounded-sm"
                style={{
                    background: "var(--q-bg-card)",
                    border: "1px solid var(--q-border)",
                    boxShadow: "0 0 20px var(--q-gold-dim)",
                }}
            >
                {/* Brillo de esquina */}
                <div
                    className="absolute top-0 left-0 w-3 h-3"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--q-gold) 0%, transparent 60%)",
                        opacity: 0.5,
                    }}
                />
                <span
                    className="font-display font-black leading-none tabular-nums"
                    style={{
                        fontSize: "clamp(30px, 9vw, 40px)",
                        color: "var(--q-gold)",
                        letterSpacing: "-0.03em",
                    }}
                >
                    {String(value).padStart(2, "0")}
                </span>
            </div>

            {/* Label */}
            <span
                className="mt-2 text-[10px] tracking-[0.2em] uppercase"
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
            className="py-20 px-5"
            style={{ background: "var(--q-bg-accent)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col items-center gap-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-3 text-center"
                >
                    <span
                        className="text-[10px] tracking-[0.35em] uppercase"
                        style={{ color: "var(--q-pink)" }}
                    >
                        ✦ Cuenta regresiva ✦
                    </span>
                    <h2
                        className="font-display text-3xl font-black"
                        style={{ color: "var(--q-text-primary)" }}
                    >
                        {countdown.heading}
                    </h2>
                    <GoldDivider className="w-full" />
                </motion.div>

                {/* Tarjetas de tiempo */}
                <div className="grid grid-cols-4 gap-3 w-full">
                    {units.map((u, i) => (
                        <TimeCard key={u.label} {...u} index={i} />
                    ))}
                </div>

                {/* Separadores entre tarjetas (decorativo) */}
                <p
                    className="text-xs tracking-widest text-center"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    ¡Ya falta poco! 🎉
                </p>
            </div>
        </section>
    );
}