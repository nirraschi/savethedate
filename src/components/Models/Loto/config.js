// ╔══════════════════════════════════════════════════════════╗
//  BODA — CONFIG
//  Todo el contenido y diseño se edita acá.
//  Para cambiar de paleta, solo cambiá activeTheme.
// ╚══════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────
//  TEMA ACTIVO — elegí uno de los 4 estilos disponibles:
//  "classic"  → Ivory & Gold      (marfil + dorado)
//  "bohemian" → Sage & Terra      (verde salvia + tierra)
//  "modern"   → Black & Champagne (negro + champagne)
//  "romantic" → Blush & Rose      (nude + rosa seco)
// ─────────────────────────────────────────────────────────────
export const activeTheme = "classic";

// ─────────────────────────────────────────────────────────────
//  PALETAS
//  Cada tema define las mismas variables.
//  El root aplica la paleta del activeTheme automáticamente.
// ─────────────────────────────────────────────────────────────
export const themes = {

    classic: {
        name: "Ivory & Gold",

        // Fondos
        heroBg: "#1e1812",   // hero — oscuro cálido
        scrollBg: "#1e1812",   // zona de foto fija (fallback sin foto)
        cardBg: "rgba(250,247,240,0.93)", // cards flotantes
        rsvpBg: "#faf7f0",   // RSVP — crema
        footerBg: "#1e1812",

        // Acentos
        accent: "#b8976a",   // dorado
        accentDim: "rgba(184,151,106,0.18)",

        // Texto
        textHero: "#f5f0e8",   // sobre hero oscuro
        textCard: "#2c2416",   // sobre cards claras
        textRsvp: "#2c2416",   // sobre RSVP claro
        textMuted: "#9c8060",   // labels y detalles claros
        textMutedDark: "rgba(245,240,232,0.45)", // labels sobre oscuro

        // Bordes
        border: "rgba(44,36,22,0.09)",
        borderAccent: "rgba(184,151,106,0.3)",

        // Botones
        btnDarkBg: "#2c2416",
        btnDarkText: "#f5f0e8",
        btnLightBg: "#2c2416",
        btnLightText: "#f5f0e8",

        // Overlay sobre la foto de fondo
        photoOverlay: "rgba(20,14,8,0.52)",

        // Placeholder foto
        photoBg: "#3a2e1e",
    },

    bohemian: {
        name: "Sage & Terra",

        heroBg: "#2d3b2e",
        scrollBg: "#2d3b2e",
        cardBg: "rgba(244,241,235,0.93)",
        rsvpBg: "#f4f1eb",
        footerBg: "#2d3b2e",

        accent: "#c9a87c",
        accentDim: "rgba(201,168,124,0.18)",

        textHero: "#f4f1eb",
        textCard: "#1e2b1f",
        textRsvp: "#1e2b1f",
        textMuted: "#7a8f7b",
        textMutedDark: "rgba(244,241,235,0.45)",

        border: "rgba(30,43,31,0.09)",
        borderAccent: "rgba(168,196,162,0.4)",

        btnDarkBg: "#2d3b2e",
        btnDarkText: "#f4f1eb",
        btnLightBg: "#2d3b2e",
        btnLightText: "#f4f1eb",

        photoOverlay: "rgba(15,25,16,0.55)",
        photoBg: "#253426",
    },

    modern: {
        name: "Black & Champagne",

        heroBg: "#111111",
        scrollBg: "#111111",
        cardBg: "rgba(255,255,255,0.94)",
        rsvpBg: "#f9f9f9",
        footerBg: "#111111",

        accent: "#c8b89a",
        accentDim: "rgba(200,184,154,0.18)",

        textHero: "#f9f9f9",
        textCard: "#111111",
        textRsvp: "#111111",
        textMuted: "#888888",
        textMutedDark: "rgba(249,249,249,0.4)",

        border: "rgba(0,0,0,0.08)",
        borderAccent: "rgba(200,184,154,0.35)",

        btnDarkBg: "#111111",
        btnDarkText: "#f9f9f9",
        btnLightBg: "#111111",
        btnLightText: "#f9f9f9",

        photoOverlay: "rgba(0,0,0,0.55)",
        photoBg: "#222222",
    },

    romantic: {
        name: "Blush & Rose",

        heroBg: "#fdf6f2",
        scrollBg: "#2d1a16",
        cardBg: "rgba(253,246,242,0.94)",
        rsvpBg: "#fdf6f2",
        footerBg: "#2d1a16",

        accent: "#c4857a",
        accentDim: "rgba(196,133,122,0.18)",

        textHero: "#2d1a16",
        textCard: "#2d1a16",
        textRsvp: "#2d1a16",
        textMuted: "#a87b72",
        textMutedDark: "rgba(253,246,242,0.45)",

        border: "rgba(45,26,22,0.09)",
        borderAccent: "rgba(196,133,122,0.3)",

        btnDarkBg: "#c4857a",
        btnDarkText: "#fff",
        btnLightBg: "#c4857a",
        btnLightText: "#fff",

        photoOverlay: "rgba(20,8,6,0.58)",
        photoBg: "#3d2018",
    },
};

// ─────────────────────────────────────────────────────────────
//  SECCIONES — poné false para ocultar
// ─────────────────────────────────────────────────────────────
export const sections = {
    hero: true,
    countdown: true,
    event: true,
    gallery: true,
    dresscode: true,
    gift: true,
    rsvp: true,
};

// ─────────────────────────────────────────────────────────────
//  PAREJA
// ─────────────────────────────────────────────────────────────
export const couple = {
    name1: "Sofía",
    name2: "Mateo",
    tagline: "18 · 10 · 2026",         // eyebrow sobre los nombres
    phrase: "nos casamos",             // texto bajo los nombres
    dateISO: "2026-10-18T19:00:00",     // para el countdown
};

// ─────────────────────────────────────────────────────────────
//  IMAGEN DE FONDO (zona de scroll)
//    null        → placeholder color sólido (theme.scrollBg)
//    "/foto.jpg" → ruta relativa a /public
//    "https://…" → URL externa
// ─────────────────────────────────────────────────────────────
export const backgroundImage = "https://faqberta.com/media/imagenes/postboda_sm-0041.jpg";

// ─────────────────────────────────────────────────────────────
//  HERO — imagen de fondo opcional (igual que backgroundImage)
// ─────────────────────────────────────────────────────────────
export const heroImage = null;

// ─────────────────────────────────────────────────────────────
//  COUNTDOWN
// ─────────────────────────────────────────────────────────────
export const countdown = {
    eyebrow: "Cuenta regresiva",
    labels: { d: "días", h: "horas", m: "min", s: "seg" },
    note: "¡Ya falta poco! 🤍",
};

// ─────────────────────────────────────────────────────────────
//  EVENTO
// ─────────────────────────────────────────────────────────────
export const event = {
    eyebrow: "La noche que nos espera",
    heading: "Detalles del",
    headingAccent: "evento",
    mapUrl: "https://maps.google.com/?q=Iglesia+del+Pilar+Buenos+Aires",
    mapLabel: "Cómo llegar",
    items: [
        { emoji: "💍", label: "Ceremonia", value: "Iglesia del Pilar", detail: "Junín 1904, Recoleta — 19:00 hs" },
        { emoji: "🥂", label: "Cóctel", value: "Jardín exterior", detail: "21:00 hs — espacio al aire libre" },
        { emoji: "🎶", label: "Fiesta", value: "Gran Salón", detail: "Av. Libertador 1000 — 22:00 hs" },
    ],
};

// ─────────────────────────────────────────────────────────────
//  GALERÍA — 4 fotos
//  src: null  → placeholder
// ─────────────────────────────────────────────────────────────
export const gallery = {
    eyebrow: "Nosotros",
    heading: "Una historia en",
    headingAccent: "fotos",
    images: [
        { src: null, alt: "Foto 1" },
        { src: null, alt: "Foto 2" },
        { src: null, alt: "Foto 3" },
        { src: null, alt: "Foto 4" },
    ],
};

// ─────────────────────────────────────────────────────────────
//  DRESS CODE
// ─────────────────────────────────────────────────────────────
export const dresscode = {
    eyebrow: "La noche pide",
    heading: "Dress",
    headingAccent: "Code",
    description: "Elegante formal. Vengan listos para brillar.",
    items: [
        { emoji: "👗", title: "Ellas", detail: "Vestido de gala o cocktail" },
        { emoji: "🤵", title: "Ellos", detail: "Traje o blazer oscuro" },
        { emoji: "🎨", title: "Color libre", detail: "Solo evitar el blanco 🙏" },
    ],
    fullWidthLast: true,
};

// ─────────────────────────────────────────────────────────────
//  REGALO
// ─────────────────────────────────────────────────────────────
export const gift = {
    eyebrow: "Si querés sumarnos algo",
    heading: "Regalo",
    headingAccent: "🤍",
    description: "Su presencia es nuestro mejor regalo. Si querés hacernos algo especial, podés hacerlo por transferencia.",
    alias: "sofia.mateo.boda",
    bank: "Banco Galicia",
    cbu: "0000003100012345678901",
    copyLabel: "Copiar alias",
    copiedLabel: "¡Copiado! 🎉",
};

// ─────────────────────────────────────────────────────────────
//  RSVP
// ─────────────────────────────────────────────────────────────
export const rsvp = {
    eyebrow: "¿Estarás?",
    heading: "Confirmá tu",
    headingAccent: "lugar",
    description: "Completá el formulario antes del 1° de septiembre para reservar tu lugar.",
    googleFormUrl: "https://forms.gle/tuFormAqui",
    cta: "Confirmar asistencia →",
    note: "Cupos limitados · confirmá antes del 1 de septiembre",
};

// ─────────────────────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────────────────────
export const footer = {
    text: "Sofía & Mateo · 18.10.2026",
    love: "con amor 🤍",
};