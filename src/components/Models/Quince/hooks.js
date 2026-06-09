// ╔══════════════════════════════════════════════════════╗
//  QUINCE — HOOKS
// ╚══════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";

// ── Countdown hasta la fecha del evento ───────────────
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

// ── CSS vars dinámicas del tema ────────────────────────
// Llama esto una sola vez en el root para que todo el árbol
// tenga acceso a las variables via var(--q-*)
export function useThemeVars(theme) {
    useEffect(() => {
        const root = document.documentElement;
        Object.entries({
            "--q-bg-base": theme.bgBase,
            "--q-bg-card": theme.bgCard,
            "--q-bg-accent": theme.bgAccent,
            "--q-gold": theme.gold,
            "--q-gold-light": theme.goldLight,
            "--q-gold-dim": theme.goldDim,
            "--q-pink": theme.pink,
            "--q-pink-dim": theme.pinkDim,
            "--q-text-primary": theme.textPrimary,
            "--q-text-secondary": theme.textSecondary,
            "--q-text-muted": theme.textMuted,
            "--q-border": theme.border,
            "--q-border-hi": theme.borderHi,
        }).forEach(([k, v]) => root.style.setProperty(k, v));

        // Limpia al desmontar
        return () => {
            Object.keys({
                "--q-bg-base": "", "--q-bg-card": "", "--q-bg-accent": "",
                "--q-gold": "", "--q-gold-light": "", "--q-gold-dim": "",
                "--q-pink": "", "--q-pink-dim": "",
                "--q-text-primary": "", "--q-text-secondary": "", "--q-text-muted": "",
                "--q-border": "", "--q-border-hi": "",
            }).forEach((k) => root.style.removeProperty(k));
        };
    }, [theme]);
}