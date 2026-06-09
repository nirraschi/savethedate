// ╔══════════════════════════════════════════════════════╗
//  QUINCE — CONFIG
//  Editá este archivo para personalizar la invitación.
//  No hace falta tocar ningún otro archivo.
// ╚══════════════════════════════════════════════════════╝

export const config = {

    // ── Identidad ─────────────────────────────────────────
    girl: {
        name: "Valentina",          // nombre de la cumpleañera
        age: "XV",                  // se muestra en el hero
        tagline: "mis quince 🌹",   // texto pequeño sobre el nombre
        date: "15 · 03 · 2026",    // fecha visible
        dateISO: "2026-08-15T21:00:00", // para el countdown (ISO 8601)
    },

    // ── Secciones ON / OFF ────────────────────────────────
    // Poné false para ocultar cualquier sección
    sections: {
        hero: true,
        countdown: true,
        event: true,
        carousel: true,
        dresscode: true,
        instagram: true,
        gift: true,
        rsvp: true,
    },

    // ── Hero ──────────────────────────────────────────────
    hero: {
        subtitle: "Te invito a celebrar conmigo",
    },

    // ── Countdown ─────────────────────────────────────────
    countdown: {
        heading: "Falta poco…",
        labels: { d: "días", h: "horas", m: "min", s: "seg" },
    },

    // ── Evento ────────────────────────────────────────────
    event: {
        heading: "La noche",
        headingAccent: "que nos espera",
        items: [
            {
                icon: "calendar",           // calendar | clock | map-pin | music | star
                label: "Fecha",
                value: "Sábado 15 de marzo de 2026",
            },
            {
                icon: "clock",
                label: "Horario",
                value: "21:00 hs",
            },
            {
                icon: "map-pin",
                label: "Lugar",
                value: "Salón Lumière",
                detail: "Av. del Libertador 1500, CABA",
            },
            {
                icon: "music",
                label: "Música",
                value: "DJ Set + Banda en vivo",
            },
        ],
        mapUrl: "https://maps.google.com/?q=Av.+del+Libertador+1500+Buenos+Aires",
        mapLabel: "Cómo llegar →",
    },

    // ── Carrusel ──────────────────────────────────────────
    carousel: {
        heading: "Una historia",
        headingAccent: "en fotos",
        // Reemplazá las URLs por tus propias imágenes.
        // Podés agregar o quitar items. caption es opcional.
        images: [
            { src: "https://placehold.co/600x800/1a1a2e/c9a84c?text=Foto+1", caption: "2010" },
            { src: "https://placehold.co/600x800/1a1a2e/e8a0b4?text=Foto+2", caption: "2015" },
            { src: "https://placehold.co/600x800/1a1a2e/c9a84c?text=Foto+3", caption: "2020" },
            { src: "https://placehold.co/600x800/1a1a2e/e8a0b4?text=Foto+4", caption: "2024" },
            { src: "https://placehold.co/600x800/1a1a2e/c9a84c?text=Foto+5", caption: "Hoy" },
        ],
    },

    // ── Dress Code ────────────────────────────────────────
    dresscode: {
        heading: "Dress",
        headingAccent: "Code",
        description:
            "Vengan elegantes y listos para brillar. Nos vemos con looks de gala — formal o semi-formal.",
        items: [
            { icon: "star", title: "Ellas", detail: "Vestido de gala o cocktail" },
            { icon: "star", title: "Ellos", detail: "Traje o blazer oscuro" },
            { icon: "star", title: "Color", detail: "Libre — ¡eviten el blanco!" },
        ],
        note: "Sin zapatillas, por favor 🙏",
    },

    // ── Instagram ─────────────────────────────────────────
    instagram: {
        heading: "Seguime",
        headingAccent: "en Instagram",
        handle: "@valentina",          // arroba visible
        url: "https://instagram.com/valentina", // link real
        cta: "Seguir →",
        hashtag: "#Valentina15",       // hashtag para usar en fotos
        hashtagNote: "Usá este hashtag para que encuentre todas sus fotos 📸",
    },

    // ── Regalo ────────────────────────────────────────────
    gift: {
        heading: "Regalo",
        headingAccent: "💛",
        description:
            "Tu presencia es mi mejor regalo. Pero si querés sumarme algo especial, podés hacerlo por transferencia.",
        alias: "valentina.quince",     // alias CBU/CVU
        cbu: "0000003100012345678901", // CBU (se muestra truncado, se copia completo)
        bank: "Banco Galicia",
        cta: "Copiar alias",
        successMessage: "¡Copiado! 🎉",
    },

    // ── RSVP ──────────────────────────────────────────────
    rsvp: {
        heading: "¿Venís?",
        headingAccent: "Confirmá tu lugar",
        description:
            "Completá el formulario antes del 1° de marzo para reservar tu lugar.",
        googleFormUrl: "https://forms.gle/tuFormAqui", // ← reemplazá con tu form real
        cta: "Confirmar asistencia →",
        note: "Cupos limitados — confirmá antes del 1 de marzo",
    },

    // ── Footer ────────────────────────────────────────────
    footer: {
        text: "Valentina XV · 2026",
        love: "Hecho con 💛 para esta noche especial",
    },

    // ── Paleta de colores ─────────────────────────────────
    // Cambiá estos valores para rediseñar toda la invitación.
    theme: {
        // Fondos
        bgBase: "#0d0d14",   // fondo principal (casi negro azulado)
        bgCard: "#13131f",   // fondo de cards
        bgAccent: "#1a1a2e",   // fondo de secciones alternas

        // Colores de acento
        gold: "#c9a84c",   // dorado principal
        goldLight: "#e8c97a",   // dorado claro (hover, highlights)
        goldDim: "rgba(201,168,76,0.18)", // dorado translúcido

        pink: "#e8a0b4",   // rosa — toque juvenil
        pinkDim: "rgba(232,160,180,0.15)",

        // Texto
        textPrimary: "#f5f0e8", // blanco cálido
        textSecondary: "rgba(245,240,232,0.55)",
        textMuted: "rgba(245,240,232,0.28)",

        // Bordes
        border: "rgba(201,168,76,0.2)",
        borderHi: "rgba(201,168,76,0.45)",
    },
};