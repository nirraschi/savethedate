// ============================================================
//  AURORA WEDDING — ARCHIVO DE CONFIGURACIÓN
//  Editá este archivo para personalizar toda la invitación.
//  No necesitás tocar ningún otro archivo para el contenido.
// ============================================================
import intro from "./photos/intro.jpg";
import hero from "./photos/hero.jpg";
import final from "./photos/final.jpg";

//Historia
import moment1 from "./photos/history1.jpg";
import history2 from "./photos/history2.jpg";
import history3 from "./photos/history3.jpg";
//import history4 from "./photos/history4.jpg";

//Gallery
import gallery1 from "./photos/gallery1.jpg";
import gallery2 from "./photos/gallery2.jpg";
import gallery3 from "./photos/gallery3.jpg";
import gallery4 from "./photos/gallery4.jpg";
import gallery5 from "./photos/gallery5.jpg";

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
    dateShort: "18 · 10 · 2026",
    dateISO: "2026-10-18T20:00:00", // para el countdown
    time: "17:00 hs",
    venue: "Parroquia Nuestra Señora del Valle",
    address: "Florida Sur 251, T4107 Yerba Buena, Tucumán",
    mapsUrl: "https://maps.app.goo.gl/aWAkLf8hUUmNfEZ49",
  },
  party: {
    date: "18 de diciembre, 2026",
    dateShort: "18 · 10 · 2026",
    dateISO: "2026-10-18T21:00:00", // para el countdown
    time: "21:00 hs",
    venue: "Nuevo Terrazas de San José",
    address: "La Rioja 3000, Yerba Buena, Tucumán",
    mapsUrl: "https://maps.app.goo.gl/r5CuvTAQvrHQhK3DA",
  },

  // ── Textos editables ─────────────────────────────────────
  texts: {
    introTagline: "Una invitacion de",
    introCta: "Abrir invitación",
    heroTitle: "Nos casamos",
    quote: "Cada historia de amor es hermosa,\npero la nuestra es nuestra favorita.",
    dressCodeTitle: "Formal elegante",
    dressCodeSubtitle: "Tonos neutros y tierra.\nSin blanco ni negro absoluto, por favor.",
    finalText: "Los esperamos para compartir\nel día más importante\nde nuestras vidas.",
  },

  // ── Historia / Timeline ──────────────────────────────────
  // Agregá o quitá items libremente
  moment: {
  image: moment1,

  quote:
    "Y de repente, todos los caminos nos trajeron hasta aquí.",

  text:
    "Con alegría y emoción queremos compartir este día junto a quienes forman parte de nuestra historia."
},

  // ── Fotos ────────────────────────────────────────────────
  // Reemplazá las URLs por tus propias fotos
  images: {
    intro: intro,
    hero: hero,
    final: final,
    // Galería — agregá o quitá fotos
    gallery: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
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

  googleForm: {
    url: "https://forms.google.com/",
  },

  //Datos luna de miel - Bancarios 
  honeymoon: {
    enabled: true,
    title: "Luna de miel",
    description: "Si querés acompañarnos en nuestra luna de miel, te dejamos nuestros datos.",
    alias: "julia.y.pedro",
    cbu: "0000000000000000000000",
    bank: "Mercado Pago",
  },


};
