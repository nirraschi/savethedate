// ═══════════════════════════════════════════════
//  ECLIPSE — CountdownSection
// ═══════════════════════════════════════════════

import { useCountdown } from "./hooks.js";
import { Eyebrow } from "../components.jsx";

export default function CountdownSection({ countdown, dateISO }) {
  const { d, h, m, s } = useCountdown(dateISO);

  const units = [
    { v: d, l: countdown.labels.d },
    { v: h, l: countdown.labels.h },
    { v: m, l: countdown.labels.m },
    { v: s, l: countdown.labels.s },
  ];

  return (
    <section
      style={{
        background: "var(--ec-surface)",
        padding: "88px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(72px, 24vw, 180px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.022)",
          letterSpacing: "-0.04em",
          userSelect: "none", whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        SOON
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Eyebrow style={{ marginBottom: "52px" }}>
          {countdown.eyebrow}
        </Eyebrow>

        {/* Grid 2x2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "400px",
            margin: "0 auto",
            gap: "1px",
            border: "1px solid var(--ec-border)",
          }}
        >
          {units.map(({ v, l }, i) => (
            <div
              key={l}
              className={`ec-reveal ec-reveal-d${i + 1}`}
              style={{
                padding: "32px 16px",
                textAlign: "center",
                borderRight: i % 2 === 0 ? "1px solid var(--ec-border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--ec-border)" : "none",
                background: i === 0 ? "rgba(201,168,76,0.04)" : "transparent",
              }}
            >
              <span
                className="ec-count-flip"
                key={v} // re-monta en cada tick para la animación
                style={{
                  display: "block",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(48px, 13vw, 80px)",
                  fontWeight: 900,
                  color: i === 0 ? "var(--ec-gold)" : "var(--ec-white)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {String(v).padStart(2, "0")}
              </span>
              <span
                style={{
                  display: "block",
                  marginTop: "8px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.28)",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}