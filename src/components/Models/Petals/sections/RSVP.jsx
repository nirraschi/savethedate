// RSVP — fondo oscuro, botón prominente que abre el Google Form.

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import Ornament from "../components/Ornament.jsx";

export default function RSVP() {
  const { title, deadline, buttonLabel, formUrl } = config.sections.rsvp;
  const { person1, person2 } = config.couple;

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "80px 32px",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <SectionLabel light>Tu respuesta importa</SectionLabel>

        <Heart
          size={26}
          color="var(--accent-alt)"
          strokeWidth={1.5}
          style={{ margin: "0 auto 16px" }}
        />

        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(28px, 8vw, 42px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-light)",
            marginBottom: 12,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: 13,
            color: "rgba(250,247,242,0.5)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          {deadline}
        </p>

        <motion.a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            padding: "16px 40px",
            background: "var(--accent)",
            borderRadius: 2,
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--text-light)",
            textDecoration: "none",
            fontFamily: "Jost, sans-serif",
            fontWeight: 400,
          }}
        >
          {buttonLabel}
        </motion.a>

        <Ornament light />

        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(250,247,242,0.5)",
          }}
        >
          {person1} &amp; {person2} te esperan
        </p>
      </FadeIn>
    </section>
  );
}
