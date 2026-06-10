// ═══════════════════════════════════════════════
//  ECLIPSE — EventSection
// ═══════════════════════════════════════════════

import { Eyebrow } from "../Components.jsx";

export default function EventSection({ events }) {
  return (
    <section
      style={{
        background: "var(--ec-deep)",
        padding: "88px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradiente radial de fondo */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
      />

      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          position: "relative", zIndex: 1,
        }}
      >
        <Eyebrow style={{ marginBottom: "14px" }}>{events.eyebrow}</Eyebrow>

        <h2
          className="ec-reveal ec-reveal-d1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(30px, 8vw, 56px)",
            fontWeight: 900,
            color: "var(--ec-white)",
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: "52px",
            lineHeight: 1,
          }}
        >
          {events.heading1}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            {events.heading2}
          </span>
        </h2>

        {/* Lista de eventos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {events.items.map((ev, i) => (
            <div
              key={ev.label}
              className={`ec-reveal ec-reveal-d${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid var(--ec-border)",
                padding: "20px 16px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* Hora */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px", letterSpacing: "0.08em",
                  color: "var(--ec-gold)", fontWeight: 500,
                  minWidth: "44px", flexShrink: 0,
                }}
              >
                {ev.time}
              </span>

              {/* Separador */}
              <span
                style={{
                  width: "1px", height: "36px", flexShrink: 0,
                  background: "var(--ec-border)",
                }}
              />

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px", letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.32)", textTransform: "uppercase",
                    display: "block", marginBottom: "3px",
                  }}
                >
                  {ev.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "17px", fontWeight: 700,
                    color: "var(--ec-white)", letterSpacing: "-0.01em",
                    display: "block",
                  }}
                >
                  {ev.place}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px", fontWeight: 300,
                    color: "rgba(255,255,255,0.32)", letterSpacing: "0.02em",
                  }}
                >
                  {ev.detail}
                </span>
              </div>

              {/* Icono */}
              <span
                style={{
                  color: "var(--ec-gold)", fontSize: "10px",
                  opacity: 0.45, flexShrink: 0,
                }}
              >
                {ev.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Botón mapa */}
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <button
            className="ec-btn ec-reveal ec-reveal-d4"
            onClick={() => window.open(events.mapUrl, "_blank")}
          >
            <span>{events.mapLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
}