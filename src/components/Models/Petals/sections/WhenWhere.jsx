// Sección "Cuándo y Dónde" — fondo claro, íconos de calendario y pin.

import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import Ornament from "../components/Ornament.jsx";

export default function WhenWhere() {
  const { dateDisplay, time, venue, address, mapsUrl } = config.event;

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
        <SectionLabel>La celebración</SectionLabel>

        {/* CUÁNDO */}
        <div style={{ marginBottom: 40 }}>
          <Calendar
            size={22}
            color="var(--accent)"
            style={{ margin: "0 auto 14px" }}
            strokeWidth={1.5}
          />
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
            Cuándo
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(22px, 6vw, 30px)",
              fontWeight: 300,
              color: "var(--text-dark)",
              marginBottom: 4,
            }}
          >
            {dateDisplay}
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "var(--accent-alt)",
            }}
          >
            {time}
          </p>
        </div>

        <Ornament />

        {/* DÓNDE */}
        <div style={{ marginBottom: 40 }}>
          <MapPin
            size={22}
            color="var(--accent)"
            style={{ margin: "0 auto 14px" }}
            strokeWidth={1.5}
          />
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
            Dónde
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(22px, 6vw, 30px)",
              fontWeight: 300,
              color: "var(--text-dark)",
              marginBottom: 4,
            }}
          >
            {venue}
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 20,
              lineHeight: 1.6,
            }}
          >
            {address}
          </p>

          <a
            href={mapsUrl}
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
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "var(--text-light)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Cómo llegar
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
