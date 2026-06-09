// ╔══════════════════════════════════════════════════════╗
//  QUINCE — COMPONENTES COMPARTIDOS
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";

// ── Animación de entrada estándar ──────────────────────
// Usamos este objeto en todos los whileInView para
// mantener coherencia entre secciones.
export const FADE_UP = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

// ── Eyebrow — label pequeño sobre el heading ───────────
export function Eyebrow({ children, dark = false }) {
    return (
        <p
            className="text-[10px] tracking-[0.32em] uppercase mb-3"
            style={{ color: dark ? "var(--q-text-muted-dark)" : "var(--q-text-muted)" }}
        >
            {children}
        </p>
    );
}

// ── Heading de sección ─────────────────────────────────
// heading      → texto normal
// accent       → texto en italic con color acento
// dark         → versión sobre fondo oscuro
export function SectionHeading({ heading, accent, dark = false, className = "" }) {
    return (
        <h2
            className={`font-display text-[28px] font-normal leading-tight ${className}`}
            style={{ color: dark ? "var(--q-text-light)" : "var(--q-text-dark)" }}
        >
            {heading}{" "}
            <em
                className="not-italic"
                style={{ color: "var(--q-pink)", fontStyle: "italic" }}
            >
                {accent}
            </em>
        </h2>
    );
}

// ── Barra separadora suave ─────────────────────────────
export function Divider() {
    return (
        <div
            className="w-10 h-px my-4"
            style={{ background: "var(--q-border-accent)" }}
        />
    );
}

// ── Botón pill oscuro (sobre fondos claros) ────────────
export function DarkButton({ children, onClick, href }) {
    const base =
        "inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[11px] font-semibold tracking-[0.16em] uppercase transition-opacity active:opacity-70 select-none";
    const style = {
        background: "var(--q-text-dark)",
        color: "var(--q-text-light)",
    };

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={base} style={style}>
            {children}
        </button>
    );
}

// ── Botón pill gradiente (sobre fondos oscuros) ────────
export function GradientButton({ children, onClick, href }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase transition-opacity active:opacity-75 select-none";
    const style = {
        background: "var(--q-btn-gradient)",
        color: "var(--q-btn-text)",
    };

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={base} style={style}>
            {children}
        </button>
    );
}

// ── Foto con placeholder ───────────────────────────────
// Si src es null muestra un rectángulo de color sólido.
export function Photo({ src, alt, className = "", style = {} }) {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`object-cover ${className}`}
                style={style}
            />
        );
    }
    return (
        <div
            className={`${className}`}
            style={{ background: "var(--q-photo-placeholder)", ...style }}
            aria-label={alt}
        />
    );
}