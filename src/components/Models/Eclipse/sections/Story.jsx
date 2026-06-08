// ═══════════════════════════════════════════════
//  ECLIPSE — StorySection
// ═══════════════════════════════════════════════

import { SceneOverlay, Vignette, GoldLineV, Eyebrow } from "../components.jsx";

export default function StorySection({ story, images }) {
  const sceneImages = [images.scene1, images.scene2, images.scene3];

  return (
    <section style={{ background: "var(--ec-black)" }}>

      {/* Intro texto */}
      <div
        style={{
          padding: "80px 32px 64px",
          textAlign: "center",
        }}
      >
        <GoldLineV className="ec-reveal" style={{ marginBottom: "36px" }} />
        <h2
          className="ec-reveal ec-reveal-d1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(36px, 9vw, 72px)",
            fontWeight: 900,
            color: "var(--ec-white)",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
          }}
        >
          {story.heading1}
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ec-gold)" }}>
            {story.heading2}
          </span>
        </h2>
      </div>

      {/* Escenas */}
      {story.scenes.map((s, i) => (
        <div
          key={s.year}
          className="ec-reveal"
          style={{
            position: "relative",
            height: "80svh",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src={sceneImages[i] || images.scene1}
            alt=""
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "brightness(0.38) saturate(0.6)",
              transition: "transform 8s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <SceneOverlay />
          <Vignette />

          {/* Texto de escena */}
          <div
            style={{
              position: "relative", zIndex: 2,
              padding: s.align === "left"
                ? "0 40px 48px 28px"
                : "0 28px 48px 40px",
              width: "100%",
              display: "flex",
              justifyContent: s.align === "left" ? "flex-start" : "flex-end",
            }}
          >
            <div style={{ maxWidth: "300px" }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px", letterSpacing: "0.3em",
                  color: "var(--ec-gold)", textTransform: "uppercase",
                  display: "block", marginBottom: "10px",
                }}
              >
                {s.year}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(24px, 6vw, 40px)",
                  fontWeight: 700, color: "var(--ec-white)",
                  lineHeight: 1.1, letterSpacing: "-0.01em",
                  marginBottom: "12px",
                }}
              >
                {s.headline}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px", fontWeight: 300,
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.7, letterSpacing: "0.03em",
                }}
              >
                {s.copy}
              </p>
            </div>
          </div>

          {/* Número de escena */}
          <span
            style={{
              position: "absolute", top: "28px", right: "24px", zIndex: 3,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "11px", letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            0{i + 1} / 0{story.scenes.length}
          </span>
        </div>
      ))}
    </section>
  );
}