// ╔══════════════════════════════════════════════════════════╗
//  BODA — COMPONENTES COMPARTIDOS
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";

// ── Animación de entrada estándar (whileInView) ───────────
export const FADE_UP = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// ── Eyebrow — label pequeño sobre el heading ──────────────
// dark=true → versión sobre fondos oscuros
export function Eyebrow({ children, dark = false, className = "" }) {
    return (
        <p
            className={`text-[10px] tracking-[0.3em] uppercase mb-2 ${className}`}
            style={{ color: dark ? "var(--b-text-muted-dark)" : "var(--b-text-muted)" }}
        >
            {children}
        </p>
    );
}

// ── Heading de sección ────────────────────────────────────
// accent → palabra en itálica con color acento
export function SectionHeading({ heading, accent, dark = false, className = "" }) {
    return (
        <h2
            className={`font-display text-[26px] font-light leading-tight tracking-tight ${className}`}
            style={{ color: dark ? "var(--b-text-hero)" : "var(--b-text-card)" }}
        >
            {heading}{" "}
            <em style={{ fontStyle: "italic", color: "var(--b-accent)" }}>
                {accent}
            </em>
        </h2>
    );
}

// ── Divisor sutil ─────────────────────────────────────────
export function Divider({ dark = false }) {
    return (
        <div
            className="w-8 h-px my-4"
            style={{
                background: dark
                    ? "var(--b-accent)"
                    : "var(--b-border-accent)",
            }}
        />
    );
}

// ── Botón pill sobre fondos oscuros (hero, scroll zone) ───
export function DarkZoneButton({ children, href, onClick }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[10px] font-medium tracking-[0.18em] uppercase transition-opacity active:opacity-70 select-none";
    const style = {
        background: "var(--b-btn-dark-bg)",
        color: "var(--b-btn-dark-text)",
    };
    if (href) return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
            {children}
        </a>
    );
    return <button onClick={onClick} className={base} style={style}>{children}</button>;
}

// ── Botón pill sobre fondos claros ────────────────────────
export function LightZoneButton({ children, href, onClick }) {
    const base =
        "inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[10px] font-medium tracking-[0.18em] uppercase transition-opacity active:opacity-70 select-none";
    const style = {
        background: "var(--b-btn-light-bg)",
        color: "var(--b-btn-light-text)",
    };
    if (href) return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
            {children}
        </a>
    );
    return <button onClick={onClick} className={base} style={style}>{children}</button>;
}

// ── Card flotante (zona scroll) ───────────────────────────
// Fondo semitransparente sobre la foto fija
export function FloatingCard({ children, className = "" }) {
    return (
        <div
            className={`rounded-2xl p-5 ${className}`}
            style={{
                background: "var(--b-card-bg)",
                border: "0.5px solid var(--b-border-accent)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
            }}
        >
            {children}
        </div>
    );
}

// ── Foto con placeholder ──────────────────────────────────
export function Photo({ src, alt, className = "", style: extraStyle = {} }) {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`object-cover ${className}`}
                style={extraStyle}
            />
        );
    }
    return (
        <div
            className={className}
            style={{ background: "var(--b-photo-bg)", ...extraStyle }}
            aria-label={alt}
        />
    );
}