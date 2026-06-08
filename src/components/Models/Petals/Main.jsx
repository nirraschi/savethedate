import React from "react";
import { config } from "./config.js";

import Hero from "./sections/Hero.jsx";
import Countdown from "./sections/Countdown.jsx";
import PhotoDivider from "./components/PhotoDivider.jsx";
import WhenWhere from "./sections/WhenWhere.jsx";
import Schedule from "./sections/Schedule.jsx";
import DressCode from "./sections/DressCode.jsx";
import Gallery from "./sections/Gallery.jsx";
import Lodging from "./sections/Lodging.jsx";
import Honeymoon from "./sections/Honeymoon.jsx";
import SharedAlbum from "./sections/SharedAlbum.jsx";
import RSVP from "./sections/RSVP.jsx";
import Footer from "./sections/Footer.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

// Inyecta la paleta del config como CSS custom properties globales
function CssVariables() {
  const p = config.palette;
  const vars = `
    :root {
      --bg-dark:    ${p.bgDark};
      --bg-light:   ${p.bgLight};
      --accent:     ${p.accent};
      --accent-alt: ${p.accentAlt};
      --text-dark:  ${p.textDark};
      --text-light: ${p.textLight};
      --text-muted: ${p.textMuted};
    }
  `;
  return <style>{vars}</style>;
}

export default function App() {
  const { sections, music } = config;

  return (
    <>
      <CssVariables />

      <main>
        {/* ── HERO + COUNTDOWN ── */}
        <Hero />
        <Countdown />

        {/* ── FOTO SEPARADORA 1 ── */}
        <PhotoDivider src={config.photos.fullscreen[0]} index={0} />

        {/* ── CUÁNDO Y DÓNDE ── */}
        <WhenWhere />

        {/* ── FOTO SEPARADORA 2 ── */}
        <PhotoDivider src={config.photos.fullscreen[1]} index={1} />

        {/* ── ITINERARIO ── */}
        <Schedule />

        {/* ── DRESS CODE ── */}
        <DressCode />

        {/* ── FOTO SEPARADORA 3 ── */}
        <PhotoDivider src={config.photos.fullscreen[2]} index={2} />

        {/* ── GALERÍA ── */}
        <Gallery />

        {/* ── HOSPEDAJE (opcional) ── */}
        {sections.lodging.enabled && <Lodging />}

        {/* ── LUNA DE MIEL (opcional) ── */}
        {sections.honeymoon.enabled && <Honeymoon />}

        {/* ── ÁLBUM COMPARTIDO (opcional) ── */}
        {sections.sharedAlbum.enabled && <SharedAlbum />}

        {/* ── RSVP (opcional) ── */}
        {sections.rsvp.enabled && <RSVP />}

        {/* ── FOOTER ── */}
        <Footer />
      </main>

      {/* ── REPRODUCTOR FLOTANTE ── */}
      {music.enabled && <MusicPlayer />}
    </>
  );
}
