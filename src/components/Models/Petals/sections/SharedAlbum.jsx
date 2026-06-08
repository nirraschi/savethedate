// Álbum compartido — fondo claro.

import React from "react";
import { Camera } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

export default function SharedAlbum() {
  const { title, description, buttonLabel, url } = config.sections.sharedAlbum;

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
        <SectionLabel>Compartí el momento</SectionLabel>

        <Camera
          size={26}
          color="var(--accent)"
          strokeWidth={1.5}
          style={{ margin: "0 auto 16px" }}
        />

        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(22px, 6vw, 32px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-dark)",
            marginBottom: 16,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "var(--text-muted)",
            maxWidth: 280,
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 28px",
            border: "1px solid var(--accent)",
            borderRadius: 2,
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "none",
            fontFamily: "Jost, sans-serif",
            fontWeight: 400,
          }}
        >
          {buttonLabel}
        </a>
      </FadeIn>
    </section>
  );
}
