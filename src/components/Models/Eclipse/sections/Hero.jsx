// ═══════════════════════════════════════════════
//  ECLIPSE — HeroSection
// ═══════════════════════════════════════════════

import { useRef } from "react";
import { useParallax } from "./hooks.js";
import { SceneOverlay, Vignette, GoldLineV } from "../Components.jsx";

export default function HeroSection({ hero, images }) {
  const ref = useRef(null);
  useParallax(ref, 0.15);

  return (
    <section
      style={{
        position: "relative",
        height: "100svh",   // svh = mejor en mobile
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Imagen de fondo con parallax */}
      <div ref={ref} style={{ position: "absolute", inset: "-10%", zIndex: 0 }}>
        <img
          src={images.hero}
          alt=""
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: "brightness(0.28) saturate(0.5) contrast(1.1)",
          }}
        />
      </div>

      <SceneOverlay />
      <Vignette />

      {/* Contenido */}
      <div
        style={{
          position: "relative", zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          width: "100%",
        }}
      >
        <p
          className="ec-slide-up"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.42em",
            color: "var(--ec-gold)",
            textTransform: "uppercase",
            marginBottom: "20px",
            animationDelay: "0.3s",
          }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="ec-cinematic"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(52px, 16vw, 110px)",
            fontWeight: 900,
            color: "var(--ec-white)",
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
            animationDelay: "0.2s",
          }}
        >
          {hero.line1}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>{hero.line2}</span>
          <br />
          {hero.line3}
        </h1>

        <p
          className="ec-slide-up"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.45)",
            marginTop: "22px",
            animationDelay: "0.7s",
          }}
        >
          {hero.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3, textAlign: "center",
        }}
      >
        <GoldLineV style={{ height: "44px", marginBottom: "10px" }} />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "8px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.28)",
            textTransform: "uppercase",
            display: "block",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}