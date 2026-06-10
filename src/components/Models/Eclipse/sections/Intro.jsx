// ═══════════════════════════════════════════════
//  ECLIPSE — IntroScreen
// ═══════════════════════════════════════════════

import { useState, useEffect } from "react";
import { AnimText } from "../Components.jsx";

export default function IntroScreen({ couple, onEnter }) {
  const [phase, setPhase] = useState(0); // 0=names, 1=subtitle, 2=cta
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2200);
    const t2 = setTimeout(() => setPhase(2), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const enter = () => {
    setLeaving(true);
    setTimeout(onEnter, 1200);
  };

  // Marcas de esquina
  const corners = [
    { top: "32px",  left: "32px",  borderTop: true,    borderLeft: true  },
    { top: "32px",  right: "32px", borderTop: true,    borderRight: true },
    { bottom: "32px", left: "32px",  borderBottom: true, borderLeft: true  },
    { bottom: "32px", right: "32px", borderBottom: true, borderRight: true },
  ];

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "#080808",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        transition: "opacity 1.2s ease",
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* BG glow */}
      <div
        className="ec-glow-pulse"
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Línea horizontal top */}
      <div
        style={{
          position: "absolute", top: "60px", left: "8%", right: "8%",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 1s 0.5s",
        }}
      />

      {/* Contenido central */}
      <div style={{ textAlign: "center", position: "relative", padding: "0 24px" }}>
        {/* Nombres */}
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(56px, 20vw, 140px)",
            fontWeight: 900,
            color: "var(--ec-white)",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
          }}
        >
          <div>
            <AnimText text={couple.name1} baseDelay={0.3} />
          </div>
          <div style={{ margin: "4px 0" }}>
            <AnimText
              text="&"
              baseDelay={0.9}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "0.45em",
                color: "var(--ec-gold)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            />
          </div>
          <div>
            <AnimText text={couple.name2} baseDelay={1.1} />
          </div>
        </div>

        {/* Subtítulo */}
        <div
          style={{
            marginTop: "28px",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.38em",
              color: "var(--ec-gold)",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Are getting married
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              display: "block",
              marginTop: "8px",
            }}
          >
            {couple.date}
          </span>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "52px",
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(16px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <button className="ec-btn" onClick={enter}>
            <span>Enter</span>
          </button>
        </div>
      </div>

      {/* Línea horizontal bottom */}
      <div
        style={{
          position: "absolute", bottom: "60px", left: "8%", right: "8%",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 1s 0.5s",
        }}
      />

      {/* Corner marks */}
      {corners.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: c.top, bottom: c.bottom, left: c.left, right: c.right,
            width: "14px", height: "14px",
            borderTop:    c.borderTop    ? "1px solid rgba(201,168,76,0.4)" : "none",
            borderBottom: c.borderBottom ? "1px solid rgba(201,168,76,0.4)" : "none",
            borderLeft:   c.borderLeft   ? "1px solid rgba(201,168,76,0.4)" : "none",
            borderRight:  c.borderRight  ? "1px solid rgba(201,168,76,0.4)" : "none",
            opacity: phase >= 1 ? 1 : 0,
            transition: `opacity 1s ${0.3 + i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}