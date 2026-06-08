// ═══════════════════════════════════════════════
//  ECLIPSE — RSVPSection
// ═══════════════════════════════════════════════

import { GoldLineV } from "../components.jsx";

export default function RSVPSection({ rsvp }) {
  return (
    <section
      style={{
        background: "var(--ec-black)",
        padding: "88px 24px",
      }}
    >
      <div style={{ maxWidth: "440px", margin: "0 auto" }}>

        <GoldLineV className="ec-reveal" style={{ marginBottom: "40px" }} />

        <p
          className="ec-reveal ec-reveal-d1"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px", letterSpacing: "0.38em",
            color: "var(--ec-gold)", textTransform: "uppercase",
            textAlign: "center", marginBottom: "14px",
          }}
        >
          {rsvp.eyebrow}
        </p>

        <h2
          className="ec-reveal ec-reveal-d2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(26px, 7vw, 46px)",
            fontWeight: 900, color: "var(--ec-white)",
            letterSpacing: "-0.02em",
            textAlign: "center", marginBottom: "48px", lineHeight: 1.05,
          }}
        >
          {rsvp.heading1}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ec-gold)" }}>
            {rsvp.heading2}
          </span>
        </h2>

        <div
          className="ec-reveal ec-reveal-d3"
          style={{ textAlign: "center", paddingTop: "4px" }}
        >
          <a className="ec-btn" href={rsvp.googleForm} target="_blank" rel="noopener noreferrer">
            <span>{rsvp.submitLabel}</span>
          </a>
        </div>

      </div>
    </section>
  );
}