// ============================================================
//  AURORA WEDDING — ARCHIVO DE CONFIGURACIÓN
//  Editá este archivo para personalizar toda la invitación.
//  No necesitás tocar ningún otro archivo para el contenido.
// ============================================================

export const CONFIG = {

  // ── Pareja ──────────────────────────────────────────────
  names: {
    partner1: "Julia",
    partner2: "Pedro",
    full: "Julia & Pedro",         // como aparece en títulos
  },

  // ── Fecha y lugar ───────────────────────────────────────
  event: {
    date: "18 de diciembre, 2026",
    dateShort: "18 · 12 · 2026",
    dateISO: "2026-12-18T20:00:00", // para el countdown
    time: "20:00 hs",
    venue: "Palacio San Telmo",
    address: "Av. Hipólito Yrigoyen 500, Buenos Aires",
    mapsUrl: "https://maps.google.com/?q=Palacio+San+Telmo+Buenos+Aires",
  },

  // ── Textos editables ─────────────────────────────────────
  texts: {
    introTagline: "Con amor, les anunciamos",
    introCta: "Abrir invitación",
    heroTitle: "Nos casamos",
    quote: "Cada historia de amor es hermosa,\npero la nuestra es nuestra favorita.",
    dressCodeTitle: "Formal elegante",
    dressCodeSubtitle: "Tonos neutros y tierra.\nSin blanco ni negro absoluto, por favor.",
    finalText: "Los esperamos para compartir\nel día más importante\nde nuestras vidas.",
  },

  // ── Historia / Timeline ──────────────────────────────────
  // Agregá o quitá items libremente
  history: [
    {
      year: "2019",
      text: "Nos conocimos en una tarde de otoño. Una mirada y el mundo se ordenó.",
      image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=75&auto=format&fit=crop",
    },
    {
      year: "2022",
      text: "El viaje que lo cambió todo. Dos semanas, tres países, una sola certeza.",
      image: null, // sin foto en este item
    },
    {
      year: "2024",
      text: "La pregunta que ya conocíamos. La respuesta que siempre fue sí.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=75&auto=format&fit=crop",
    },
    {
      year: "2026",
      text: "El sí, ante todos.",
      image: null,
    },
  ],

  // ── Fotos ────────────────────────────────────────────────
  // Reemplazá las URLs por tus propias fotos
  images: {
    intro: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1200&q=80&auto=format&fit=crop",
    hero:  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=80&auto=format&fit=crop",
    final: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=80&auto=format&fit=crop",
    // Galería — agregá o quitá fotos
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=75&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=75&auto=format&fit=crop",
    ],
  },

  // ── Dress code — paleta ──────────────────────────────────
  palette: [
    { color: "#f9f5ef", label: "Ivory" },
    { color: "#e8dfd3", label: "Beige" },
    { color: "#c4b49a", label: "Arena" },
    { color: "#8a8178", label: "Gris cálido" },
    { color: "#2a2520", label: "Carbón" },
  ],

  // ── Dress code — indicaciones ────────────────────────────
  dressCodes: [
    { icon: "♀", label: "Vestido largo o traje de noche" },
    { icon: "♂", label: "Traje oscuro o smoking" },
  ],

};
