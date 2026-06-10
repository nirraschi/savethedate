// ═══════════════════════════════════════════════
//  ECLIPSE — GallerySection
//  Gallery horizontal con auto-scroll.
//  En mobile: también se puede scrollear con el dedo (overflow-x).
// ═══════════════════════════════════════════════

import { Eyebrow } from "../Components.jsx";

export default function GallerySection({ gallery, images }) {
  // Duplicamos las imágenes para el loop infinito
  const imgs = [...images.gallery, ...images.gallery];

  return (
    <section
      style={{
        background: "var(--ec-black)",
        padding: "72px 0",
        overflow: "hidden",
      }}
    >
      <Eyebrow style={{ marginBottom: "40px", padding: "0 24px" }}>
        {gallery.eyebrow}
      </Eyebrow>

      {/* Track animado */}
      <div style={{ overflow: "hidden" }}>
        <div className="ec-gallery-track">
          {imgs.map((src, i) => {
            const isTall = i % 3 === 0;
            return (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: isTall ? "220px" : "160px",
                  height: isTall ? "300px" : "220px",
                  borderRadius: "2px",
                  overflow: "hidden",
                  marginTop: i % 2 === 1 ? "32px" : "0",
                }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.58) saturate(0.65) contrast(1.05)",
                    transition: "filter 0.5s ease, transform 0.5s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "brightness(0.85) saturate(0.8)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "brightness(0.58) saturate(0.65) contrast(1.05)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}