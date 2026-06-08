// Footer — fondo claro, frase final y nombres.

import React from "react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import Ornament from "../components/Ornament.jsx";

export default function Footer() {
  const { person1, person2 } = config.couple;
  const { quote } = config.footer;
  const year = new Date(config.event.date).getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-light)",
        color: "var(--text-dark)",
        padding: "64px 32px 48px",
        textAlign: "center",
        borderTop: "0.5px solid rgba(61,53,48,0.1)",
      }}
    >
      <FadeIn>
        {/* Nombres finales */}
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(28px, 8vw, 40px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-dark)",
            marginBottom: 4,
          }}
        >
          {person1} &amp; {person2}
        </p>

        <p
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            color: "var(--accent)",
            marginBottom: 28,
          }}
        >
          {year}
        </p>

        <Ornament />

        {/* Frase */}
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 17,
            fontStyle: "italic",
            color: "var(--text-muted)",
            maxWidth: 300,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          "{quote}"
        </p>

        {/* Crédito disceto */}
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(154,142,134,0.4)",
            marginTop: 48,
          }}
        >
          con amor · {year}
        </p>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(154,142,134,0.4)",
            marginTop: 48,
          }}
        >
          Fotografías de cortesia por <a href="https://www.instagram.com/faqberta" target="_blank" rel="noreferrer" className="hover:underline" >Faq Berta</a>
        </p>
      </FadeIn>
    </footer>
  );
}
