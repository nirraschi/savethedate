// ═══════════════════════════════════════════════
//  ECLIPSE WEDDING — STYLES
//  CSS que no puede reemplazarse con Tailwind:
//  keyframes, CSS vars dinámicas, scrollbar, grain
// ═══════════════════════════════════════════════

export function buildGlobalCSS(theme) {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@200;300;400;500&display=swap');

    :root {
      --ec-black:     ${theme.black};
      --ec-deep:      ${theme.deep};
      --ec-surface:   ${theme.surface};
      --ec-surface2:  ${theme.surface2};
      --ec-border:    ${theme.border};
      --ec-border-hi: ${theme.borderHi};
      --ec-white:     ${theme.white};
      --ec-muted:     ${theme.muted};
      --ec-gold:      ${theme.gold};
      --ec-gold-dim:  ${theme.goldDim};
    }

    /* ── Scrollbar ── */
    ::-webkit-scrollbar { width: 2px; }
    ::-webkit-scrollbar-track { background: var(--ec-black); }
    ::-webkit-scrollbar-thumb { background: var(--ec-gold); }

    /* ── Keyframes ── */
    @keyframes ec-letterReveal {
      from { opacity:0; transform:translateY(18px) skewY(2deg); filter:blur(6px); }
      to   { opacity:1; transform:translateY(0) skewY(0); filter:blur(0); }
    }
    @keyframes ec-cinematicFade {
      from { opacity:0; transform:scale(1.06); }
      to   { opacity:1; transform:scale(1); }
    }
    @keyframes ec-slideUp {
      from { opacity:0; transform:translateY(40px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes ec-glowPulse {
      0%,100% { text-shadow: 0 0 40px rgba(201,168,76,0); }
      50%      { text-shadow: 0 0 40px rgba(201,168,76,0.3); }
    }
    @keyframes ec-scanLine {
      from { transform: translateY(-100%); }
      to   { transform: translateY(100vh); }
    }
    @keyframes ec-countFlip {
      from { opacity:0; transform:translateY(-20px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes ec-galleryScroll {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes ec-vignettePulse {
      0%,100% { opacity:0.7; }
      50%      { opacity:0.9; }
    }

    /* ── Utility classes ── */
    .ec-letter {
      display: inline-block;
      opacity: 0;
      animation: ec-letterReveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
    }
    .ec-cinematic { animation: ec-cinematicFade 2s cubic-bezier(0.16,1,0.3,1) both; }
    .ec-slide-up  { animation: ec-slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }

    /* ── Scroll reveal ── */
    .ec-reveal {
      opacity: 0;
      transform: translateY(36px);
      transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1),
                  transform 1.1s cubic-bezier(0.16,1,0.3,1);
    }
    .ec-reveal.on { opacity: 1; transform: translateY(0); }
    .ec-reveal-d1 { transition-delay: 0.1s; }
    .ec-reveal-d2 { transition-delay: 0.22s; }
    .ec-reveal-d3 { transition-delay: 0.36s; }
    .ec-reveal-d4 { transition-delay: 0.52s; }

    /* ── Gallery track ── */
    .ec-gallery-track {
      display: flex;
      gap: 12px;
      animation: ec-galleryScroll 30s linear infinite;
      width: max-content;
      will-change: transform;
    }
    .ec-gallery-track:hover { animation-play-state: paused; }

    /* ── Scan line ── */
    .ec-scanline {
      position: fixed; top:0; left:0; right:0;
      height: 2px;
      background: linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent);
      animation: ec-scanLine 8s linear infinite;
      pointer-events: none;
      z-index: 9997;
    }

    /* ── Grain overlay ── */
    .ec-grain::before {
      content: '';
      position: fixed; inset: 0; z-index: 9998; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
      mix-blend-mode: overlay;
    }

    /* ── Vignette pulse ── */
    .ec-vignette-pulse {
      animation: ec-vignettePulse 6s ease-in-out infinite;
    }

    /* ── Glow pulse ── */
    .ec-glow-pulse {
      animation: ec-glowPulse 4s ease-in-out infinite;
    }

    /* ── Count flip ── */
    .ec-count-flip {
      animation: ec-countFlip 0.3s ease both;
    }

    /* ── Input dark (difícil de replicar fielmente en Tailwind) ── */
    .ec-input {
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(255,255,255,0.15);
      padding: 14px 0;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px; font-weight: 300;
      color: var(--ec-white);
      letter-spacing: 0.06em;
      outline: none; width: 100%;
      transition: border-color 0.4s ease;
      caret-color: var(--ec-gold);
      -webkit-appearance: none;
      appearance: none;
    }
    .ec-input::placeholder { color: rgba(255,255,255,0.28); font-weight:200; }
    .ec-input:focus { border-bottom-color: var(--ec-gold); }
    select.ec-input { cursor: pointer; }
    select.ec-input option { background: var(--ec-surface); color: var(--ec-white); }
/* ── Button ── */
.ec-btn {
  border: 1px solid var(--ec-gold);
  color: var(--ec-gold);
  background: transparent;
  padding: 16px 48px;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  min-height: 52px;
  text-decoration: none;
  display: inline-block;
}
.ec-btn:hover,
.ec-btn:active {
  background: var(--ec-gold);
  color: var(--ec-black);
}
.ec-btn span { position: relative; }

    /* ── Body base ── */
    body.ec-body {
      background: var(--ec-black);
      color: var(--ec-white);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    html { scroll-behavior: smooth; }
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  `;
}