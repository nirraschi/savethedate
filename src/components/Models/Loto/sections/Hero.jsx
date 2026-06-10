// ╔══════════════════════════════════════════════════════════╗
//  HERO SECTION
//  Pantalla completa con los nombres de la pareja.
//  Fondo: color sólido (heroBg) o foto (heroImage).
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";

export default function HeroSection({ couple, heroImage }) {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-svh text-center px-6 overflow-hidden"
            style={{ background: "var(--b-hero-bg)" }}
        >
            {/* ── Foto de fondo opcional ── */}
            {heroImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.32) saturate(0.7)" }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: "var(--b-photo-overlay)" }}
                    />
                </div>
            )}

            {/* ── Glow radial suave ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 40%, rgba(184,151,106,0.08) 0%, transparent 65%)",
                }}
            />

            {/* ── Contenido ── */}
            <div className="relative z-[2] flex flex-col items-center">

                {/* Eyebrow — fecha */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] tracking-[0.36em] uppercase mb-8"
                    style={{ color: "var(--b-accent)" }}
                >
                    ✦ {couple.tagline} ✦
                </motion.p>

                {/* Nombre 1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-light leading-none"
                    style={{
                        fontSize: "clamp(60px, 18vw, 96px)",
                        color: "var(--b-text-hero)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {couple.name1}
                </motion.h1>

                {/* & */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display italic font-light my-1"
                    style={{
                        fontSize: "clamp(28px, 9vw, 48px)",
                        color: "var(--b-accent)",
                    }}
                >
                    &
                </motion.span>

                {/* Nombre 2 */}
                <motion.h1
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-light leading-none"
                    style={{
                        fontSize: "clamp(60px, 18vw, 96px)",
                        color: "var(--b-text-hero)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {couple.name2}
                </motion.h1>

                {/* Frase */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-8 text-[11px] tracking-[0.28em] uppercase"
                    style={{ color: "var(--b-text-muted-dark)" }}
                >
                    {couple.phrase}
                </motion.p>

                {/* Línea decorativa */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.5 }}
                    className="mt-5 w-10 h-px"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, var(--b-accent), transparent)",
                    }}
                />
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.7 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8"
                    style={{
                        background: "linear-gradient(to bottom, var(--b-accent), transparent)",
                    }}
                />
                <span
                    className="text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "var(--b-text-muted-dark)" }}
                >
                    scroll
                </span>
            </motion.div>
        </section>
    );
}