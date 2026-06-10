// ╔══════════════════════════════════════════════════════╗
//  QUINCE — HeroSection
//  Pantalla de apertura fullscreen.
//  Imagen de fondo configurable + nombre animado + partículas.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { GoldDivider } from "../Components.jsx";

// Partícula decorativa flotante
function Particle({ x, y, delay, size = 3 }) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                background: "var(--q-gold)",
                boxShadow: "0 0 6px var(--q-gold)",
            }}
            animate={{ y: [-8, 8, -8], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        />
    );
}

// Datos de partículas (posiciones fijas para evitar re-render)
const PARTICLES = [
    { x: 12, y: 20, delay: 0, size: 2 },
    { x: 88, y: 15, delay: 0.7, size: 3 },
    { x: 25, y: 75, delay: 1.2, size: 2 },
    { x: 78, y: 80, delay: 0.4, size: 3 },
    { x: 50, y: 10, delay: 1.8, size: 2 },
    { x: 65, y: 55, delay: 2.1, size: 2 },
    { x: 8, y: 50, delay: 0.9, size: 2 },
    { x: 92, y: 45, delay: 1.5, size: 3 },
];

export default function HeroSection({ girl, heroImage }) {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-svh overflow-hidden"
            style={{ background: "var(--q-bg-base)" }}
        >
            {/* ── Imagen de fondo ── */}
            {heroImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.28) saturate(0.6)" }}
                    />
                </div>
            )}

            {/* ── Gradiente sobre la imagen ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 60%),
            linear-gradient(to bottom, rgba(13,13,20,0.3) 0%, rgba(13,13,20,0.7) 100%)
          `,
                }}
            />

            {/* ── Partículas flotantes ── */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
            </div>

            {/* ── Brillo diagonal decorativo ── */}
            <motion.div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                    background:
                        "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.04) 50%, transparent 60%)",
                }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* ── Contenido central ── */}
            <div className="relative z-[3] flex flex-col items-center text-center px-6 w-full max-w-sm mx-auto">

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs tracking-[0.35em] uppercase mb-5"
                    style={{ color: "var(--q-pink)" }}
                >
                    {girl.tagline}
                </motion.p>

                {/* Nombre */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-black leading-none"
                    style={{
                        fontSize: "clamp(72px, 22vw, 120px)",
                        color: "var(--q-text-primary)",
                        letterSpacing: "-0.03em",
                    }}
                >
                    {girl.name}
                </motion.h1>

                {/* XV grande */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mt-2 mb-6"
                >
                    <span
                        className="font-display font-black italic"
                        style={{
                            fontSize: "clamp(40px, 14vw, 72px)",
                            background: "linear-gradient(135deg, var(--q-gold) 0%, var(--q-gold-light) 50%, var(--q-pink) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "0.05em",
                        }}
                    >
                        {girl.age}
                    </span>
                    {/* Brillo bajo el XV */}
                    <div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full"
                        style={{ background: "linear-gradient(to right, transparent, var(--q-gold), transparent)" }}
                    />
                </motion.div>

                {/* Divisor */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="w-full mb-6"
                >
                    <GoldDivider />
                </motion.div>

                {/* Fecha */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm tracking-[0.22em] uppercase"
                    style={{ color: "var(--q-text-secondary)" }}
                >
                    {girl.date}
                </motion.p>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    className="mt-3 text-xs tracking-widest uppercase"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    {girl.subtitle}
                </motion.p>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
            >
                <motion.div
                    className="w-px h-10"
                    style={{ background: "linear-gradient(to bottom, var(--q-gold), transparent)" }}
                    animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                    className="text-[9px] tracking-[0.3em] uppercase"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    scroll
                </span>
            </motion.div>
        </section>
    );
}