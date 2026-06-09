// ╔══════════════════════════════════════════════════════╗
//  QUINCE — HOOKS
// ╚══════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";

// ── Countdown ─────────────────────────────────────────
export function useCountdown(isoTarget) {
    const calc = () => {
        const diff = new Date(isoTarget) - new Date();
        if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
        return {
            d: Math.floor(diff / 86_400_000),
            h: Math.floor((diff % 86_400_000) / 3_600_000),
            m: Math.floor((diff % 3_600_000) / 60_000),
            s: Math.floor((diff % 60_000) / 1_000),
        };
    };

    const [time, setTime] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, [isoTarget]);

    return time;
}

// ── CSS vars del tema ──────────────────────────────────
// Inyecta todas las variables de theme en :root una sola vez.
export function useThemeVars(theme) {
    useEffect(() => {
        const root = document.documentElement;
        const vars = {
            "--q-hero-bg": theme.heroBg,
            "--q-bg-cream": theme.bgCream,
            "--q-bg-white": theme.bgWhite,
            "--q-bg-dark": theme.bgDark,
            "--q-gold": theme.gold,
            "--q-gold-dim": theme.goldDim,
            "--q-pink": theme.pink,
            "--q-pink-dim": theme.pinkDim,
            "--q-top-bar": theme.topBar,
            "--q-text-dark": theme.textDark,
            "--q-text-light": theme.textLight,
            "--q-text-muted": theme.textMuted,
            "--q-text-muted-dark": theme.textMutedDark,
            "--q-border": theme.border,
            "--q-border-accent": theme.borderAccent,
            "--q-btn-gradient": theme.btnGradient,
            "--q-btn-text": theme.btnText,
            "--q-photo-placeholder": theme.photoPlaceholder,
        };
        Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
        return () => Object.keys(vars).forEach((k) => root.style.removeProperty(k));
    }, [theme]);
}