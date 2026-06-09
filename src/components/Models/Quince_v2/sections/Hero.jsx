// ╔══════════════════════════════════════════════════════╗
//  HERO SECTION
//  Fondo: color sólido (heroBg) o foto (heroImage).
//  Animación de entrada suave con framer-motion.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";

export default function HeroSection({ girl, heroImage, theme }) {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-svh text-center px-6 overflow-hidden"
            style={{ background: "var(--q-hero-bg)" }}
        >
            {/* ── Foto de fondo (opcional) ── */}
            {heroImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.35) saturate(0.7)" }}
                    />
                    {/* gradiente sobre la foto */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(26,18,24,0.2) 0%, rgba(26,18,24,0.65) 100%)",
                        }}
                    />
                </div>
            )}

            {/* ── Glow suave de fondo (siempre) ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 35%, rgba(212,160,200,0.1) 0%, transparent 65%)",
                }}
            />

            {/* ── Contenido ── */}
            <div className="relative z-[2] flex flex-col items-center">

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] tracking-[0.36em] uppercase mb-6"
                    style={{ color: "var(--q-pink)" }}
                >
                    ✦ {girl.tagline} ✦
                </motion.p>

                {/* Nombre */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-normal leading-none"
                    style={{
                        fontSize: "clamp(68px, 20vw, 110px)",
                        color: "var(--q-text-light)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {girl.name}
                </motion.h1>

                {/* XV */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-3 mb-8"
                >
                    <span
                        className="font-display italic"
                        style={{
                            fontSize: "clamp(20px, 6vw, 28px)",
                            color: "var(--q-gold)",
                            letterSpacing: "0.1em",
                        }}
                    >
                        {girl.age}
                    </span>
                </motion.div>

                {/* Línea decorativa */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    style={{
                        width: "40px",
                        height: "1px",
                        background: "linear-gradient(to right, transparent, var(--q-gold), transparent)",
                    }}
                />
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.7 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8"
                    style={{
                        background:
                            "linear-gradient(to bottom, var(--q-gold), transparent)",
                    }}
                />
                <span
                    className="text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "var(--q-text-muted-dark)" }}
                >
                    scroll
                </span>
            </motion.div>
        </section>
    );
}