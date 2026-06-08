// ═══════════════════════════════════════════════
//  ECLIPSE WEDDING — ROOT
//  Ensambla todas las secciones usando config.js
// ═══════════════════════════════════════════════

import { useState, useEffect } from "react";
import { config } from "./sections/config.js";
import { buildGlobalCSS } from "./sections/styles.js";
import { useEclipseReveal } from "./sections/hooks.js";

import IntroScreen      from "./sections/Intro.jsx";
import HeroSection      from "./sections/Hero.jsx";
import StorySection     from "./sections/Story.jsx";
import CountdownSection from "./sections/Countdown.jsx";
import GallerySection   from "./sections/Gallery.jsx";
import EventSection     from "./sections/Event.jsx";
import RSVPSection      from "./sections/RSVP.jsx";
import FinalSection     from "./sections/Final.jsx";

const STYLE_ID = "eclipse-global-styles";

export default function Eclipse() {
  const [entered, setEntered] = useState(!config.sections.intro);
  useEclipseReveal();

  // Inyectar CSS global una sola vez
  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const s = document.createElement("style");
      s.id = STYLE_ID;
      s.textContent = buildGlobalCSS(config.theme);
      document.head.appendChild(s);
    }
    document.body.classList.add("ec-body");
    return () => document.body.classList.remove("ec-body");
  }, []);

  const { sections, couple, hero, story, countdown, gallery, events, rsvp, final, footer, images } = config;

  return (
    <div
      className="ec-grain"
      style={{ background: "var(--ec-black)", minHeight: "100vh" }}
    >
      {/* Línea de scan animada */}
      <div className="ec-scanline" />

      {/* Pantalla de intro */}
      {sections.intro && !entered && (
        <IntroScreen couple={couple} onEnter={() => setEntered(true)} />
      )}

      {/* Contenido principal */}
      <main
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 1s 0.3s",
        }}
      >
        {sections.hero      && <HeroSection      hero={hero}           images={images} />}
        {sections.story     && <StorySection     story={story}         images={images} />}
        {sections.countdown && <CountdownSection countdown={countdown} dateISO={couple.dateISO} />}
        {sections.gallery   && <GallerySection   gallery={gallery}     images={images} />}
        {sections.events    && <EventSection     events={events} />}
        {sections.rsvp      && <RSVPSection      rsvp={rsvp} />}
        {sections.final     && <FinalSection     final={final}         images={images} />}

        <footer
          style={{
            background: "var(--ec-black)",
            padding: "32px 24px",
            textAlign: "center",
            borderTop: "1px solid var(--ec-border)",
          }}
        >
          <span
            style={{
              display: "block",
              width: "60px", height: "1px",
              background: "linear-gradient(to right, transparent, var(--ec-gold), transparent)",
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "9px", letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.18)", textTransform: "uppercase",
            }}
          >
            {footer.text}
          </p>
          <p             style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "9px", letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.18)", textTransform: "uppercase",
            }}>Fotografía de cortesia por <a href="https://www.instagram.com/faqberta" target="_blank" rel="noreferrer" className="hover:underline" >Faq Berta</a></p>
        </footer>
      </main>
    </div>
  );
}