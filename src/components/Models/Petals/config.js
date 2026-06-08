// ============================================================
//  WEDDING INVITE — CONFIG
//  Editá este archivo para personalizar toda la invitación.
//  No necesitás tocar ningún otro archivo.
// ============================================================

//Images
import hero from "./photos/hero.jpg";
//importar imagenes Gallery
import gallery1 from "./photos/gallery1.jpg";
import gallery2 from "./photos/gallery2.jpg";
import gallery3 from "./photos/gallery3.jpg";
import gallery4 from "./photos/gallery4.jpg";
import gallery5 from "./photos/gallery5.jpg";

//importar imagenes full screen
import fullscreen1 from "./photos/fullscreen1.jpg";
import fullscreen2 from "./photos/fullscreen2.jpg";
import fullscreen3 from "./photos/fullscreen3.jpg";

//Cancion
import song from "./song/perfect.mp3";


export const config = {

  // ----------------------------------------------------------
  // PAREJA
  // ----------------------------------------------------------
  couple: {
    person1: "Valentina",
    person2: "Mateo",
    hashtag: "#ValyMate2026",
  },

  // ----------------------------------------------------------
  // FECHA Y LUGAR
  // ----------------------------------------------------------
  event: {
    date: "2026-09-19T18:00:00",          // ISO 8601 — fecha y hora del evento
    dateDisplay: "19 de Septiembre, 2026",
    time: "18:00 hs",
    venue: "Hacienda Los Olivos",
    address: "Camino a La Calera km 5, Córdoba",
    mapsUrl: "https://maps.google.com/?q=Cordoba+Argentina", // reemplazá con tu link
  },

  // ----------------------------------------------------------
  // MÚSICA DE FONDO
  // ----------------------------------------------------------
  music: {
    enabled: true,
    url: song, // reemplazá con tu canción
    songName: "Perfect — Ed Sheeran",
    autoplay: false, // los navegadores bloquean autoplay; dejalo en false
  },

  // ----------------------------------------------------------
  // ITINERARIO
  // ----------------------------------------------------------
  schedule: [
    { time: "17:00 hs", title: "Recepción",      description: "Jardines de la hacienda",    icon: "Glass" },
    { time: "18:00 hs", title: "Ceremonia civil", description: "Capilla San Marcos",         icon: "Heart" },
    { time: "20:00 hs", title: "Cena",            description: "Salón principal",            icon: "UtensilsCrossed" },
    { time: "22:30 hs", title: "Fiesta",          description: "Pista de baile exterior",    icon: "Music" },
    { time: "01:00 hs", title: "After party",     description: "Terraza iluminada",          icon: "Sparkles" },
  ],

  // ----------------------------------------------------------
  // DRESS CODE
  // ----------------------------------------------------------
  dresscode: {
    title: "Elegante",
    note: "El color blanco se reserva exclusivamente para la novia.",
    // Colores sugeridos (hex). Aparecen como swatches.
    colors: ["#D4C5B0", "#8A9E85", "#C4A882", "#E8E0D5", "#5C4F48"],
  },

  // ----------------------------------------------------------
  // FOTOS
  // ----------------------------------------------------------
  // Usá URLs absolutas o rutas relativas desde /public.
  // Ejemplo local: "/foto1.jpg"
  // Ejemplo remoto: "https://..."
  photos: {
    hero: hero,             // Foto principal del hero (puede ser null para fondo sólido)
    fullscreen: [                          // Fotos separadoras entre secciones
      fullscreen1,
      fullscreen2,
      fullscreen3,
    ],
    gallery: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,

    ],
  },

  // ----------------------------------------------------------
  // SECCIONES OPCIONALES
  // Poné enabled: false para ocultar una sección.
  // ----------------------------------------------------------
  sections: {

    lodging: {
      enabled: true,
      title: "Hospedaje",
      description: "Si necesitás hospedaje, pedinos el listado de hoteles cercanos.",
      contactLabel: "Contactarnos",
      contactUrl: "https://wa.me/5491100000000",  // WhatsApp o email
    },

    honeymoon: {
      enabled: true,
      title: "Luna de miel",
      description: "Si querés acompañarnos en nuestra luna de miel, te dejamos nuestros datos.",
      alias: "valentina.mateo",
      cbu: "0000000000000000000000",
      bank: "Mercado Pago",
    },

    sharedAlbum: {
      enabled: true,
      title: "¡Queremos ver tus fotos!",
      description: "Subí todas tus fotos del evento a nuestro álbum compartido.",
      buttonLabel: "Ir al álbum",
      url: "https://photos.google.com",           // reemplazá con tu álbum
    },

    rsvp: {
      enabled: true,
      title: "Confirmá tu asistencia",
      deadline: "Antes del 1 de agosto de 2026",
      buttonLabel: "Confirmar asistencia",
      formUrl: "https://forms.google.com",        // reemplazá con tu Google Form
    },
  },

  // ----------------------------------------------------------
  // FRASE FINAL (footer)
  // ----------------------------------------------------------
  footer: {
    quote: "Lo mejor está por venir, y lo viviremos juntos.",
  },

  // ----------------------------------------------------------
  // PALETA DE COLORES
  // Cambiá estos valores para un look completamente diferente.
  //
  // Ejemplo paleta Navy & Gold:
  //   bgDark: "#0D1B2A", bgLight: "#F8F5EE"
  //   accent: "#C9A84C", accentAlt: "#8B6914"
  //   textDark: "#0D1B2A", textLight: "#F8F5EE"
  //
  // Ejemplo paleta Blanco & Negro dramático:
  //   bgDark: "#111111", bgLight: "#FAFAFA"
  //   accent: "#CCCCCC", accentAlt: "#888888"
  //   textDark: "#111111", textLight: "#FAFAFA"
  // ----------------------------------------------------------
  palette: {
    bgDark:    "#1C1917",   // fondo secciones oscuras
    bgLight:   "#FAF7F2",   // fondo secciones claras
    accent:    "#8A9E85",   // color principal (verde salvia)
    accentAlt: "#C4A882",   // color secundario (arena)
    textDark:  "#1C1917",   // texto sobre fondo claro
    textLight: "#FAF7F2",   // texto sobre fondo oscuro
    textMuted: "#9a8e86",   // texto secundario
  },

};
