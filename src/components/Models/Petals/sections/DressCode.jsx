// Dress code — fondo claro, swatches de colores, nota de estilo.

import React from "react";
import { Shirt } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

export default function DressCode() {
  const { title, note, colors } = config.dresscode;

  return (
    <section
      style={{
        background: "var(--bg-light)",
        color: "var(--text-dark)",
        padding: "72px 32px",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <SectionLabel>Vestimenta</SectionLabel>

        <Shirt
          size={26}
          color="var(--accent)"
          strokeWidth={1.5}
          style={{ margin: "0 auto 16px" }}
        />

        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(28px, 8vw, 40px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-dark)",
            marginBottom: 24,
          }}
        >
          {title}
        </h2>

        {/* Swatches de colores sugeridos */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          {colors.map((hex, i) => (
            <div
              key={i}
              title={hex}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: hex,
                border: "0.5px solid rgba(0,0,0,0.1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
          ))}
        </div>

        {/* Nota */}
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 17,
            fontStyle: "italic",
            color: "var(--text-muted)",
            maxWidth: 280,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {note}
        </p>
      </FadeIn>
    </section>
  );
}
