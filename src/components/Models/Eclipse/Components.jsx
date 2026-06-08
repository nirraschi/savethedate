// ═══════════════════════════════════════════════
//  ECLIPSE WEDDING — COMPONENTES COMPARTIDOS
// ═══════════════════════════════════════════════

/* ── Texto letra por letra ─────────────────── */
export function AnimText({ text, baseDelay = 0, className = "", style = {} }) {
    return (
        <span className={className} style={style}>
            {text.split("").map((ch, i) => (
                <span
                    key={i}
                    className="ec-letter"
                    style={{
                        animationDelay: `${baseDelay + i * 0.045}s`,
                        whiteSpace: ch === " " ? "pre" : undefined,
                    }}
                >
                    {ch === " " ? "\u00A0" : ch}
                </span>
            ))}
        </span>
    );
}

/* ── Línea vertical dorada ─────────────────── */
export function GoldLineV({ className = "", style = {} }) {
    return (
        <span
            className={className}
            style={{
                display: "block",
                width: "1px",
                height: "56px",
                background: "linear-gradient(to bottom, transparent, var(--ec-gold), transparent)",
                margin: "0 auto",
                ...style,
            }}
        />
    );
}

/* ── Línea horizontal dorada ───────────────── */
export function GoldLineH({ className = "", style = {} }) {
    return (
        <span
            className={className}
            style={{
                display: "block",
                width: "60px",
                height: "1px",
                background: "linear-gradient(to right, transparent, var(--ec-gold), transparent)",
                margin: "0 auto",
                ...style,
            }}
        />
    );
}

/* ── Overlay de escena ─────────────────────── */
export function SceneOverlay() {
    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                background:
                    "linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.05) 40%, rgba(8,8,8,0.65) 100%)",
                pointerEvents: "none",
            }}
        />
    );
}

/* ── Viñeta animada ────────────────────────── */
export function Vignette({ style = {} }) {
    return (
        <div
            className="ec-vignette-pulse"
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                    "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.72) 100%)",
                ...style,
            }}
        />
    );
}

/* ── Eyebrow label ─────────────────────────── */
export function Eyebrow({ children, className = "", style = {} }) {
    return (
        <p
            className={`ec-reveal ${className}`}
            style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.38em",
                color: "var(--ec-gold)",
                textTransform: "uppercase",
                textAlign: "center",
                ...style,
            }}
        >
            {children}
        </p>
    );
}