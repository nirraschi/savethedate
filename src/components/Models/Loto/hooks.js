// ╔══════════════════════════════════════════════════════════╗
//  BODA — HOOKS
// ╚══════════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";
import { activeTheme, themes } from "./config.js";

// ── Countdown hasta la fecha del evento ───────────────────
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

// ── CSS vars del tema activo → :root ──────────────────────
// Resuelve el tema de config y lo inyecta como variables CSS
// para que cualquier componente las consuma con var(--b-*)
export function useThemeVars() {
    useEffect(() => {
        const theme = themes[activeTheme] ?? themes.classic;
        const root = document.documentElement;

        const vars = {
            "--b-hero-bg": theme.heroBg,
            "--b-scroll-bg": theme.scrollBg,
            "--b-card-bg": theme.cardBg,
            "--b-rsvp-bg": theme.rsvpBg,
            "--b-footer-bg": theme.footerBg,
            "--b-accent": theme.accent,
            "--b-accent-dim": theme.accentDim,
            "--b-text-hero": theme.textHero,
            "--b-text-card": theme.textCard,
            "--b-text-rsvp": theme.textRsvp,
            "--b-text-muted": theme.textMuted,
            "--b-text-muted-dark": theme.textMutedDark,
            "--b-border": theme.border,
            "--b-border-accent": theme.borderAccent,
            "--b-btn-dark-bg": theme.btnDarkBg,
            "--b-btn-dark-text": theme.btnDarkText,
            "--b-btn-light-bg": theme.btnLightBg,
            "--b-btn-light-text": theme.btnLightText,
            "--b-photo-overlay": theme.photoOverlay,
            "--b-photo-bg": theme.photoBg,
        };

        Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

        return () => Object.keys(vars).forEach((k) => root.style.removeProperty(k));
    }, []);
}