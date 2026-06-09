// ╔══════════════════════════════════════════════════════╗
//  QUINCE — CONFIG
//  Este es el único archivo que necesitás editar.
//  Todo el contenido, colores y secciones se controlan acá.
// ╚══════════════════════════════════════════════════════╝

export const config = {

    // ─────────────────────────────────────────────────────
    //  SECCIONES — poné false para ocultar cualquiera
    // ─────────────────────────────────────────────────────
    sections: {
        hero: true,
        countdown: true,
        event: true,
        gallery: true,
        dresscode: true,
        instagram: true,
        gift: true,
        rsvp: true,
    },

    // ─────────────────────────────────────────────────────
    //  DATOS PRINCIPALES
    // ─────────────────────────────────────────────────────
    girl: {
        name: "Valentina",
        age: "mis XV años",
        tagline: "15 · 03 · 2026",
        dateISO: "2026-08-15T21:00:00",
    },

    // ─────────────────────────────────────────────────────
    //  HERO IMAGE
    //    null        → placeholder color sólido (theme.heroBg)
    //    "/foto.jpg" → imagen en /public
    //    "https://…" → URL externa
    // ─────────────────────────────────────────────────────
    heroImage: null,

    // ─────────────────────────────────────────────────────
    //  COUNTDOWN
    // ─────────────────────────────────────────────────────
    countdown: {
        eyebrow: "Cuenta regresiva",
        labels: { d: "días", h: "horas", m: "min", s: "seg" },
        note: "¡Ya falta poco! 🎉",
    },

    // ─────────────────────────────────────────────────────
    //  EVENTO
    // ─────────────────────────────────────────────────────
    event: {
        eyebrow: "La noche que nos espera",
        heading: "Detalles del",
        headingAccent: "evento",
        mapUrl: "https://maps.google.com/?q=Av.+del+Libertador+1500+Buenos+Aires",
        mapLabel: "Ver en el mapa",
        items: [
            { emoji: "📅", label: "Fecha", value: "Sábado 15 de marzo de 2026" },
            { emoji: "🕘", label: "Horario", value: "21:00 hs" },
            { emoji: "📍", label: "Lugar", value: "Salón Lumière", detail: "Av. del Libertador 1500, CABA" },
            { emoji: "🎵", label: "Música", value: "DJ Set + Banda en vivo" },
        ],
    },

    // ─────────────────────────────────────────────────────
    //  GALERÍA — 4 fotos simples, sin timeline
    //  src: null  → muestra placeholder de color sólido
    //  src: "/mi-foto.jpg" o "https://..."  → imagen real
    // ─────────────────────────────────────────────────────
    gallery: {
        eyebrow: "Momentos",
        heading: "Una vida en",
        headingAccent: "fotos",
        images: [
            { src: null, alt: "Foto 1" },
            { src: null, alt: "Foto 2" },
            { src: null, alt: "Foto 3" },
            { src: null, alt: "Foto 4" },
        ],
    },

    // ─────────────────────────────────────────────────────
    //  DRESS CODE
    // ─────────────────────────────────────────────────────
    dresscode: {
        eyebrow: "La noche pide",
        heading: "Dress",
        headingAccent: "Code",
        description: "Vengan elegantes y listos para brillar.",
        items: [
            { emoji: "👗", title: "Ellas", detail: "Vestido de gala o cocktail" },
            { emoji: "🤵", title: "Ellos", detail: "Traje o blazer oscuro" },
            { emoji: "🎨", title: "Color libre", detail: "¡Solo evitar el blanco! Sin zapatillas 🙏" },
        ],
        // Si true, la última card ocupa todo el ancho
        fullWidthLast: true,
    },

    // ─────────────────────────────────────────────────────
    //  INSTAGRAM
    // ─────────────────────────────────────────────────────
    instagram: {
        eyebrow: "Seguime",
        handle: "@valentina",
        url: "https://instagram.com/valentina",
        cta: "Seguir en Instagram",
        hashtag: "#Valentina15",
        hashtagNote: "Usá este hashtag en tus fotos de la noche 📸",
    },

    // ─────────────────────────────────────────────────────
    //  REGALO
    // ─────────────────────────────────────────────────────
    gift: {
        eyebrow: "Si querés sumarle algo",
        heading: "Regalo",
        headingAccent: "💛",
        description: "Tu presencia es mi mejor regalo. Pero si querés hacerme algo especial, podés hacerlo por transferencia.",
        alias: "valentina.quince",
        bank: "Banco Galicia",
        cbu: "0000003100012345678901",
        copyLabel: "Copiar alias",
        copiedLabel: "¡Copiado! 🎉",
    },

    // ─────────────────────────────────────────────────────
    //  RSVP
    // ─────────────────────────────────────────────────────
    rsvp: {
        eyebrow: "¿Venís?",
        heading: "Confirmá tu",
        headingAccent: "lugar",
        description: "Completá el formulario antes del 1° de marzo para reservar tu lugar.",
        googleFormUrl: "https://forms.gle/tuFormAqui",
        cta: "Confirmar asistencia →",
        note: "Cupos limitados · confirmá antes del 1 de marzo",
    },

    // ─────────────────────────────────────────────────────
    //  FOOTER
    // ─────────────────────────────────────────────────────
    footer: {
        text: "Valentina XV · 2026",
        love: "hecho con 💛",
    },

    // ─────────────────────────────────────────────────────
    //  PALETA — cambiá estos valores para rediseñar todo
    // ─────────────────────────────────────────────────────
    theme: {
        // Fondos
        heroBg: "#1a1218",  // hero sin foto
        bgCream: "#fdf8f3",  // secciones claras (impar)
        bgWhite: "#ffffff",  // secciones claras (par)
        bgDark: "#1a1218",  // RSVP y footer

        // Acentos
        gold: "#e8c4a0",
        goldDim: "rgba(232,196,160,0.15)",
        pink: "#d4a0c8",
        pinkDim: "rgba(212,160,200,0.15)",

        // Barra decorativa superior (acepta cualquier valor CSS de background)
        topBar: "linear-gradient(to right, #e8c4a0, #d4a0c8, #e8c4a0)",

        // Texto
        textDark: "#1a1218",
        textLight: "#fdf8f3",
        textMuted: "#b8a090",
        textMutedDark: "rgba(253,248,243,0.45)",

        // Bordes
        border: "rgba(0,0,0,0.08)",
        borderAccent: "rgba(212,160,200,0.35)",

        // Botón principal (RSVP, sobre fondo oscuro)
        btnGradient: "linear-gradient(135deg, #e8c4a0, #d4a0c8)",
        btnText: "#1a1218",

        // Placeholder fotos (cuando src es null)
        photoPlaceholder: "#2a2030",
    },
};