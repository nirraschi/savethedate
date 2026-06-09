// ╔══════════════════════════════════════════════════════╗
//  QUINCE — UI COMPONENTS
//  Pequeños componentes reutilizables entre secciones.
// ╚══════════════════════════════════════════════════════╝

import {
    Calendar, Clock, MapPin, Music, Star,
    Camera, Gift, Copy, Check, ChevronLeft, ChevronRight,
    Sparkles, Heart,
} from "lucide-react";

// ── Mapa de iconos por nombre string ──────────────────
// Usamos nombres string en config.js para que sea editable
// sin tener que importar nada en el config.
const ICON_MAP = {
    calendar: Calendar,
    clock: Clock,
    "map-pin": MapPin,
    music: Music,
    star: Star,
    instagram: Camera,
    gift: Gift,
    copy: Copy,
    check: Check,
    sparkles: Sparkles,
    heart: Heart,
};

export function Icon({ name, size = 18, className = "", style = {} }) {
    const Component = ICON_MAP[name] || Star;
    return <Component size={size} className={className} style={style} />;
}

// ── Heading de sección ─────────────────────────────────
// heading  → texto normal (blanco)
// accent   → texto dorado en itálica
// center   → alineación centrada
export function SectionHeading({ heading, accent, center = true, className = "" }) {
    return (
        <h2
            className={`font-display text-3xl font-black leading-tight tracking-tight ${center ? "text-center" : ""} ${className}`}
            style={{ color: "var(--q-text-primary)" }}
        >
            {heading}{" "}
            <span
                className="italic font-normal"
                style={{ color: "var(--q-gold)" }}
            >
                {accent}
            </span>
        </h2>
    );
}

// ── Línea decorativa dorada ────────────────────────────
export function GoldDivider({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div
                className="flex-1 h-px"
                style={{ background: "linear-gradient(to right, transparent, var(--q-gold))" }}
            />
            <span style={{ color: "var(--q-gold)", fontSize: "10px" }}>✦</span>
            <div
                className="flex-1 h-px"
                style={{ background: "linear-gradient(to left, transparent, var(--q-gold))" }}
            />
        </div>
    );
}

// ── Botón primario dorado ──────────────────────────────
export function GoldButton({ children, onClick, href, className = "" }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 active:scale-95 select-none";
    const style = {
        background: "linear-gradient(135deg, var(--q-gold) 0%, var(--q-gold-light) 100%)",
        color: "var(--q-bg-base)",
        borderRadius: "2px",
        boxShadow: "0 4px 24px var(--q-gold-dim)",
    };

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`} style={style}>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={`${base} ${className}`} style={style}>
            {children}
        </button>
    );
}

// ── Botón outline rosa ─────────────────────────────────
export function PinkButton({ children, onClick, href, className = "" }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 active:scale-95 select-none border";
    const style = {
        borderColor: "var(--q-pink)",
        color: "var(--q-pink)",
        background: "var(--q-pink-dim)",
        borderRadius: "2px",
    };

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`} style={style}>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={`${base} ${className}`} style={style}>
            {children}
        </button>
    );
}

// ── Card de glass ──────────────────────────────────────
export function GlassCard({ children, className = "", style = {} }) {
    return (
        <div
            className={`rounded-sm ${className}`}
            style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--q-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                ...style,
            }}
        >
            {children}
        </div>
    );
}