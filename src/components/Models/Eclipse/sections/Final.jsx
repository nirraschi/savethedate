// ═══════════════════════════════════════════════
//  ECLIPSE — FinalSection
// ═══════════════════════════════════════════════

import { useRef } from "react";
import { useParallax } from "./hooks.js";
import { Vignette, GoldLineV } from "../Components.jsx";

export default function FinalSection({ final, images }) {
  const ref = useRef(null);
  useParallax(ref, 0.12);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--ec-black)",
      }}
    >
      {/* Foto de fondo */}
      <div ref={ref} style={{ position: "absolute", inset: "-10%", zIndex: 0 }}>
        <img
          src={images.final}
          alt=""
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: "brightness(0.18) saturate(0.4) contrast(1.2)",
          }}
        />
      </div>

      {/* Glow radial */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 60%)",
        }}
      />

      <Vignette style={{ zIndex: 2 }} />

      {/* Contenido */}
      <div
        style={{
          position: "relative", zIndex: 3,
          textAlign: "center",
          padding: "80px 28px",
        }}
      >
        <p
          className="ec-reveal"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px", letterSpacing: "0.4em",
            color: "var(--ec-gold)", textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          {final.eyebrow}
        </p>

        <h2
          className="ec-reveal ec-reveal-d1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(44px, 14vw, 96px)",
            fontWeight: 900, color: "var(--ec-white)",
            letterSpacing: "-0.03em", lineHeight: 0.92,
          }}
        >
          {final.line1}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ec-gold)" }}>
            {final.line2}
          </span>
          <br />
          {final.line3}
        </h2>

        <p
          className="ec-reveal ec-reveal-d3"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px", fontWeight: 300,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.32)",
            marginTop: "28px",
          }}
        >
          {final.tagline}
        </p>

        <GoldLineV
          className="ec-reveal ec-reveal-d4"
          style={{ marginTop: "48px", opacity: 0.45 }}
        />
      </div>
    </section>
  );
}