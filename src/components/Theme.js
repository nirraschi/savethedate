// theme.js — tokens de diseño compartidos
export const T = {
    bg:       "#FAFAF9",
    surface:  "#FFFFFF",
    border:   "#ECECEA",
    ink:      "#111111",
    mid:      "#6B6B68",
    faint:    "#A8A8A4",
    muted:    "#DDDDD9",
    accent:   "#C9A96E",
    accentBg: "#F5F0E8",
};

export const FONT = {
    sans:  `'Inter', system-ui, sans-serif`,
    serif: `'DM Serif Display', Georgia, serif`,
};

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease, delay } },
});

export const containerVariants = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.07 } },
};

export const childVariant = {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};