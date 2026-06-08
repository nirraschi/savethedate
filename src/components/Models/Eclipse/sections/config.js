// ═══════════════════════════════════════════════
//  ECLIPSE WEDDING — CONFIG
//  Editá este archivo para personalizar el template
// ═══════════════════════════════════════════════


//importar imagenes
import hero from "./photos/hero.jpg";
import scene1 from "./photos/scene1.jpg";
import scene2 from "./photos/scene2.jpg";
import scene3 from "./photos/scene3.jpg";
import final from "./photos/final.jpg";

//importar iamgenes Gallery
import gallery1 from "./photos/gallery1.jpg";
import gallery2 from "./photos/gallery2.jpg";
import gallery3 from "./photos/gallery3.jpg";
import gallery4 from "./photos/gallery4.jpg";
import gallery5 from "./photos/gallery5.jpg";

export const config = {

  // ── Pareja ──────────────────────────────────
  couple: {
    name1: "Julia",
    name2: "José",
    fullNames: "Julia Ferreira & José Martínez",
    date: "18 · 12 · 2026",
    dateISO: "2026-12-18T20:00:00", // para el countdown
  },

  // ── Secciones ON/OFF ─────────────────────────
  sections: {
    intro: true,       // pantalla de entrada cinematográfica
    hero: true,        // fullscreen con foto de fondo
    story: true,       // historia de la pareja
    countdown: true,   // cuenta regresiva
    gallery: true,     // galería horizontal
    events: true,      // horarios del día
    rsvp: true,        // formulario de confirmación
    final: true,       // cierre cinematográfico
  },

  // ── Textos hero ─────────────────────────────
  hero: {
    eyebrow: "18 · 12 · 2026",
    line1: "THE",
    line2: "Wedding",   // va en itálica
    line3: "NIGHT",
    subtitle: "Julia Ferreira & José Martínez",
  },

  // ── Historia ────────────────────────────────
  story: {
    heading1: "OUR",
    heading2: "story",  // va en itálica dorada
    scenes: [
      {
        year: "",
        headline: "Dos caminos, un destino",
        copy: "Hay encuentros que transforman una vida entera.",
        align: "left",   // "left" | "right"
      },
      {
        year: "",
        headline: "Elegirnos cada día",
        copy: "En los pequeños momentos encontramos lo extraordinario.",
        align: "right",
      },
      {
        year: "2025",
        headline: "El comienzo",
        copy: "Lo mejor de nuestra historia recién comienza.",
        align: "left",
      },
    ],
  },

  // ── Countdown ───────────────────────────────
  countdown: {
    eyebrow: "Countdown to forever",
    labels: { d: "Days", h: "Hours", m: "Mins", s: "Secs" },
  },

  // ── Galería ─────────────────────────────────
  gallery: {
    eyebrow: "Nosotros",
  },

  // ── Eventos del día ─────────────────────────
  events: {
    eyebrow: "18 · 12 · 2026",
    heading1: "THE NIGHT",
    heading2: "unfolds",  // itálica
    mapUrl: "https://maps.google.com/?q=Iglesia+del+Pilar+Buenos+Aires",
    mapLabel: "Ver ubicación",
    items: [
      {
        time: "18:00",
        label: "Ceremonia",
        place: "Parroquia Nuestra Señora del Valle",
        detail: "Florida Sur 251, T4107 Yerba Buena, Tucumán",
        icon: "◆",
      },
      {
        time: "20:30",
        label: "Cóctel",
        place: "Nuevo Terrazas de San José",
        detail: "La Rioja 3000, Yerba Buena, Tucumán",
        icon: "◇",
      },
      {
        time: "21:30",
        label: "Fiesta",
        place: "Nuevo Terrazas de San José",
        detail: "La Rioja 3000, Yerba Buena, Tucumán",
        icon: "◈",
      },
    ],
  },

  // ── RSVP ────────────────────────────────────
  rsvp: {
    eyebrow: "RSVP",
    heading1: "¿Estarás",
    heading2: "con nosotros?",  // itálica dorada
    googleForm: "http://www.form.google.com",
    submitLabel: "Confirmar asistencia",
    thankYou: (name) => `Gracias, ${name}.\nTe esperamos.`, // \n separa las líneas
  },

  // ── Cierre final ────────────────────────────
  final: {
    eyebrow: "Julia & José · 18 · 12 · 2026",
    line1: "SEE YOU",
    line2: "under",   // itálica dorada
    line3: "THE STARS",
    tagline: "Los amamos. Los esperamos.",
  },

  // ── Footer ──────────────────────────────────
  footer: {
    text: "Julia & José · 18.12.2026",
  },

  // ── Imágenes ────────────────────────────────
  images: {
    hero:   hero,
    scene1: scene1,
    scene2: scene2,
    scene3: scene3,
    final:  final,
    gallery: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,

    ],
  },

  // ── Colores del tema ─────────────────────────
  // Cambiá estos valores para darle otro color al template
  theme: {
    gold:       "#c9a84c",
    goldDim:    "rgba(201,168,76,0.35)",
    black:      "#080808",
    deep:       "#0e0e0e",
    surface:    "#141414",
    surface2:   "#1c1c1c",
    white:      "#f8f8f8",
    muted:      "rgba(248,248,248,0.45)",
    border:     "rgba(255,255,255,0.08)",
    borderHi:   "rgba(255,255,255,0.18)",
  },
};