import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@200;300;400;500&display=swap');

  :root {
    --black:     #080808;
    --deep:      #0e0e0e;
    --surface:   #141414;
    --surface2:  #1c1c1c;
    --border:    rgba(255,255,255,0.08);
    --border-hi: rgba(255,255,255,0.18);
    --white:     #f8f8f8;
    --muted:     rgba(248,248,248,0.45);
    --gold:      #c9a84c;
    --gold-dim:  rgba(201,168,76,0.35);
    --silver:    rgba(255,255,255,0.75);
  }

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior: smooth; }

  body.eclipse-body {
    background: var(--black);
    color: var(--white);
    font-family: 'DM Sans', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--black); }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  .e-serif  { font-family: 'Playfair Display', Georgia, serif; }
  .e-sans   { font-family: 'DM Sans', system-ui, sans-serif; }

  /* ── Grain ── */
  .e-grain::before {
    content:'';
    position:fixed; inset:0; z-index:9998; pointer-events:none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
  }

  /* ── Keyframes ── */
  @keyframes letterReveal {
    from { opacity:0; transform:translateY(18px) skewY(2deg); filter:blur(6px); }
    to   { opacity:1; transform:translateY(0) skewY(0);       filter:blur(0); }
  }
  @keyframes cinematicFade {
    from { opacity:0; transform:scale(1.06); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes slideUp {
    from { opacity:0; transform:translateY(40px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes slideRight {
    from { opacity:0; transform:translateX(-30px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes glowPulse {
    0%,100% { text-shadow: 0 0 40px rgba(201,168,76,0); }
    50%      { text-shadow: 0 0 40px rgba(201,168,76,0.3); }
  }
  @keyframes scanLine {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100vh); }
  }
  @keyframes countFlip {
    from { opacity:0; transform:translateY(-20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes horizontalScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes vignettePulse {
    0%,100% { opacity:0.7; }
    50%      { opacity:0.85; }
  }

  .e-letter { display:inline-block; opacity:0; animation: letterReveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
  .e-cinematic { animation: cinematicFade 2s cubic-bezier(0.16,1,0.3,1) both; }
  .e-slide-up  { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
  .e-slide-r   { animation: slideRight 0.9s cubic-bezier(0.16,1,0.3,1) both; }

  /* ── Reveal on scroll ── */
  .e-reveal {
    opacity:0; transform:translateY(36px);
    transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1);
  }
  .e-reveal.on { opacity:1; transform:translateY(0); }
  .e-reveal-d1 { transition-delay:0.1s; }
  .e-reveal-d2 { transition-delay:0.22s; }
  .e-reveal-d3 { transition-delay:0.36s; }
  .e-reveal-d4 { transition-delay:0.52s; }

  /* ── Glassmorphism card ── */
  .e-glass {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border);
    border-radius: 2px;
  }
  .e-glass:hover {
    border-color: var(--border-hi);
    background: rgba(255,255,255,0.06);
  }

  /* ── Gold line ── */
  .e-line-v {
    display:block; width:1px; height:56px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
    margin: 0 auto;
  }
  .e-line-h {
    display:block; width:60px; height:1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
    margin: 0 auto;
  }

  /* ── Input dark ── */
  .e-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding: 12px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 300;
    color: var(--white);
    letter-spacing: 0.06em;
    outline: none; width: 100%;
    transition: border-color 0.4s ease;
    caret-color: var(--gold);
  }
  .e-input::placeholder { color: rgba(255,255,255,0.28); font-weight:200; }
  .e-input:focus { border-bottom-color: var(--gold); }
  select.e-input { cursor:pointer; -webkit-appearance:none; appearance:none; }
  select.e-input option { background: var(--surface); color: var(--white); }
  textarea.e-input { resize:none; }

  /* ── Button ── */
  .e-btn {
    border: 1px solid var(--gold);
    color: var(--gold);
    background: transparent;
    padding: 15px 44px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px; font-weight: 500;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
    position: relative; overflow: hidden;
  }
  .e-btn::before {
    content:'';
    position: absolute; inset:0;
    background: var(--gold);
    transform: translateX(-101%);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    z-index:0;
  }
  .e-btn:hover::before { transform: translateX(0); }
  .e-btn:hover { color: var(--black); box-shadow: 0 0 30px rgba(201,168,76,0.2); }
  .e-btn span { position:relative; z-index:1; }

  /* ── Horizontal gallery ── */
  .e-gallery-track {
    display: flex;
    gap: 16px;
    animation: horizontalScroll 30s linear infinite;
    width: max-content;
  }
  .e-gallery-track:hover { animation-play-state: paused; }

  /* ── Scene overlay ── */
  .e-scene-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom,
      rgba(8,8,8,0.2) 0%,
      rgba(8,8,8,0.05) 40%,
      rgba(8,8,8,0.6) 100%);
    pointer-events: none;
  }

  /* ── Vignette ── */
  .e-vignette {
    position: absolute; inset: 0; pointer-events:none;
    background: radial-gradient(ellipse at center,
      transparent 40%,
      rgba(8,8,8,0.7) 100%);
    animation: vignettePulse 6s ease-in-out infinite;
  }

  /* ── Story scene ── */
  .e-story-scene {
    position: relative; height: 85vh; overflow: hidden;
    display: flex; align-items: flex-end;
  }
  .e-story-scene img {
    position: absolute; inset:0; width:100%; height:100%;
    object-fit: cover;
    filter: brightness(0.4) saturate(0.6);
    transition: transform 8s ease;
  }
  .e-story-scene:hover img { transform: scale(1.04); }

  /* ── Scan line effect ── */
  .e-scanline {
    position: fixed; top:0; left:0; right:0;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent);
    animation: scanLine 8s linear infinite;
    pointer-events: none;
    z-index: 9997;
  }
`;

/* ─────────────────────────────────────────
   HOOK: scroll reveal
───────────────────────────────────────── */
function useEclipseReveal() {
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".e-reveal").forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

/* ─────────────────────────────────────────
   HOOK: Countdown
───────────────────────────────────────── */
function useCountdown(target) {
    const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
    useEffect(() => {
        const tick = () => {
            const diff = new Date(target) - new Date();
            if (diff <= 0) return;
            setT({
                d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000)
            });
        };
        tick(); const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [target]);
    return t;
}

/* ─────────────────────────────────────────
   HOOK: Parallax
───────────────────────────────────────── */
function useParallax(ref, speed = 0.2) {
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const fn = () => {
            const r = el.getBoundingClientRect();
            const o = (window.innerHeight / 2 - r.top - r.height / 2) * speed;
            el.style.transform = `translateY(${o}px) scale(1.1)`;
        };
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, [ref, speed]);
}

/* ─────────────────────────────────────────
   ANIMATED TEXT (letter by letter)
───────────────────────────────────────── */
function AnimText({ text, baseDelay = 0, className = "", style = {} }) {
    return (
        <span className={className} style={style}>
            {text.split("").map((ch, i) => (
                <span key={i} className="e-letter" style={{
                    animationDelay: `${baseDelay + i * 0.045}s`,
                    whiteSpace: ch === " " ? "pre" : undefined,
                }}>
                    {ch === " " ? "\u00A0" : ch}
                </span>
            ))}
        </span>
    );
}

/* ─────────────────────────────────────────
   IMAGES
───────────────────────────────────────── */
const IMG = {
    hero: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1600&q=85&auto=format&fit=crop",
    scene1: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80&auto=format&fit=crop",
    scene2: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1200&q=80&auto=format&fit=crop",
    scene3: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&auto=format&fit=crop",
    g1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80&auto=format&fit=crop",
    g2: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=700&q=80&auto=format&fit=crop",
    g3: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=700&q=80&auto=format&fit=crop",
    g4: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=700&q=80&auto=format&fit=crop",
    g5: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80&auto=format&fit=crop",
    g6: "https://images.unsplash.com/photo-1464061884559-b2f03ab79c7d?w=700&q=80&auto=format&fit=crop",
};

/* ═══════════════════════════════════════
   1. INTRO CINEMATIC
═══════════════════════════════════════ */
function IntroScreen({ onEnter }) {
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

    return (
        <div style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "#080808",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            transition: "opacity 1.2s ease",
            opacity: leaving ? 0 : 1,
            pointerEvents: leaving ? "none" : "auto",
        }}>
            {/* Background glow */}
            <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)",
                animation: "glowPulse 4s ease-in-out infinite",
            }} />

            {/* Horizontal rule top */}
            <div style={{
                position: "absolute", top: "60px", left: "10%", right: "10%", height: "1px",
                background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
                opacity: phase >= 1 ? 1 : 0, transition: "opacity 1s 0.5s",
            }} />

            {/* Main names */}
            <div style={{ textAlign: "center", position: "relative" }}>
                <div className="e-serif" style={{
                    fontSize: "clamp(64px,18vw,140px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 0.9,
                }}>
                    <div><AnimText text="JULIA" baseDelay={0.3} /></div>
                    <div style={{ margin: "4px 0" }}>
                        <AnimText text="&" baseDelay={0.9} className="e-serif" style={{
                            fontSize: "0.45em", color: "var(--gold)", fontStyle: "italic", fontWeight: 400,
                        }} />
                    </div>
                    <div><AnimText text="JOSÉ" baseDelay={1.1} /></div>
                </div>

                {/* Subtitle */}
                <div style={{
                    marginTop: "28px",
                    opacity: phase >= 1 ? 1 : 0,
                    transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
                    transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <span className="e-sans" style={{
                        fontSize: "10px", letterSpacing: "0.38em", color: "var(--gold)",
                        textTransform: "uppercase", display: "block",
                    }}>
                        Are getting married
                    </span>
                    <span className="e-sans" style={{
                        fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.35)",
                        textTransform: "uppercase", display: "block", marginTop: "8px",
                    }}>
                        18 · 12 · 2026
                    </span>
                </div>

                {/* CTA */}
                <div style={{
                    marginTop: "52px",
                    opacity: phase >= 2 ? 1 : 0,
                    transform: phase >= 2 ? "translateY(0)" : "translateY(16px)",
                    transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <button className="e-btn" onClick={enter}><span>Enter</span></button>
                </div>
            </div>

            {/* Bottom rule */}
            <div style={{
                position: "absolute", bottom: "60px", left: "10%", right: "10%", height: "1px",
                background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)",
                opacity: phase >= 1 ? 1 : 0, transition: "opacity 1s 0.5s",
            }} />

            {/* Corner marks */}
            {[["0px", "0px"], ["0px", "auto"], ["auto", "0px"], ["auto", "auto"]].map(([t, b], i) => (
                <div key={i} style={{
                    position: "absolute",
                    top: t === "auto" ? undefined : "32px",
                    bottom: b === "auto" ? undefined : "32px",
                    left: i % 2 === 0 ? "32px" : undefined,
                    right: i % 2 === 1 ? "32px" : undefined,
                    width: "14px", height: "14px",
                    borderTop: t !== "auto" ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderBottom: b !== "auto" ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderLeft: i % 2 === 0 ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderRight: i % 2 === 1 ? "1px solid rgba(201,168,76,0.4)" : "none",
                    opacity: phase >= 1 ? 1 : 0, transition: `opacity 1s ${0.3 + i * 0.1}s`,
                }} />
            ))}
        </div>
    );
}

/* ═══════════════════════════════════════
   2. HERO FULLSCREEN
═══════════════════════════════════════ */
function HeroSection() {
    const ref = useRef(null);
    useParallax(ref, 0.15);

    return (
        <section style={{
            position: "relative", height: "100vh", overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <div ref={ref} style={{ position: "absolute", inset: "-10%", zIndex: 0 }}>
                <img src={IMG.hero} alt="" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "brightness(0.3) saturate(0.5) contrast(1.1)",
                }} />
            </div>
            <div className="e-scene-overlay" />
            <div className="e-vignette" />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 28px" }}>
                <p className="e-sans e-slide-up" style={{
                    fontSize: "9px", letterSpacing: "0.42em", color: "var(--gold)",
                    textTransform: "uppercase", marginBottom: "24px", animationDelay: "0.3s",
                }}>
                    18 · 12 · 2026
                </p>
                <h1 className="e-serif e-cinematic" style={{
                    fontSize: "clamp(56px,16vw,110px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 0.92,
                    animationDelay: "0.2s",
                }}>
                    THE<br />
                    <span style={{ fontStyle: "italic", fontWeight: 400 }}>Wedding</span><br />
                    NIGHT
                </h1>
                <p className="e-sans e-slide-up" style={{
                    fontSize: "12px", fontWeight: 300, letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.5)", marginTop: "24px", animationDelay: "0.7s",
                }}>
                    Julia Ferreira & José Martínez
                </p>
            </div>

            {/* Scroll */}
            <div style={{
                position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
                zIndex: 3, textAlign: "center",
            }}>
                <span className="e-line-v" style={{ marginBottom: "10px" }} />
                <span className="e-sans" style={{
                    fontSize: "8px", letterSpacing: "0.28em", color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase", display: "block",
                }}>Scroll</span>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   3. SCROLL EXPERIENCE / STORYTELLING
═══════════════════════════════════════ */
const SCENES = [
    {
        img: IMG.scene1,
        year: "2019",
        headline: "El primer encuentro",
        copy: "Una tarde ordinaria que dejó de serlo para siempre.",
        align: "left",
    },
    {
        img: IMG.scene2,
        year: "2022",
        headline: "El viaje que lo cambió todo",
        copy: "Dos semanas. Tres países. Una sola certeza.",
        align: "right",
    },
    {
        img: IMG.scene3,
        year: "2025",
        headline: "La pregunta",
        copy: "Siempre supimos la respuesta.",
        align: "left",
    },
];

function StorySection() {
    return (
        <section style={{ background: "var(--black)" }}>
            {/* Intro text */}
            <div style={{ padding: "100px 32px", textAlign: "center" }}>
                <span className="e-line-v e-reveal" style={{ marginBottom: "40px" }} />
                <h2 className="e-serif e-reveal e-reveal-d1" style={{
                    fontSize: "clamp(36px,9vw,72px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.0,
                }}>
                    OUR<br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>story</span>
                </h2>
            </div>

            {/* Scenes */}
            {SCENES.map((s, i) => (
                <div key={s.year} className="e-story-scene e-reveal">
                    <img src={s.img} alt="" />
                    <div className="e-scene-overlay" />
                    <div className="e-vignette" />

                    <div style={{
                        position: "relative", zIndex: 2,
                        padding: s.align === "left" ? "0 0 56px 32px" : "0 32px 56px 0",
                        width: "100%",
                        display: "flex",
                        justifyContent: s.align === "left" ? "flex-start" : "flex-end",
                    }}>
                        <div style={{ maxWidth: "320px" }}>
                            <span className="e-sans" style={{
                                fontSize: "9px", letterSpacing: "0.3em", color: "var(--gold)",
                                textTransform: "uppercase", display: "block", marginBottom: "12px",
                            }}>
                                {s.year}
                            </span>
                            <h3 className="e-serif" style={{
                                fontSize: "clamp(26px,6vw,42px)", fontWeight: 700,
                                color: "var(--white)", lineHeight: 1.1,
                                letterSpacing: "-0.01em", marginBottom: "14px",
                            }}>
                                {s.headline}
                            </h3>
                            <p className="e-sans" style={{
                                fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.55)",
                                lineHeight: 1.7, letterSpacing: "0.03em",
                            }}>
                                {s.copy}
                            </p>
                        </div>
                    </div>

                    {/* Scene number */}
                    <span className="e-serif" style={{
                        position: "absolute", top: "32px", right: "28px", zIndex: 3,
                        fontSize: "11px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.2)",
                    }}>
                        0{i + 1} / 03
                    </span>
                </div>
            ))}
        </section>
    );
}

/* ═══════════════════════════════════════
   5. COUNTDOWN
═══════════════════════════════════════ */
function CountdownSection() {
    const { d, h, m, s } = useCountdown("2026-12-18T20:00:00");
    const units = [
        { v: d, l: "Days" },
        { v: h, l: "Hours" },
        { v: m, l: "Mins" },
        { v: s, l: "Secs" },
    ];

    return (
        <section style={{
            background: "var(--surface)", padding: "100px 20px",
            position: "relative", overflow: "hidden",
        }}>
            {/* BG text watermark */}
            <div className="e-serif" style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                fontSize: "clamp(80px,22vw,180px)", fontWeight: 900,
                color: "rgba(255,255,255,0.025)",
                letterSpacing: "-0.04em", userSelect: "none", whiteSpace: "nowrap",
            }}>
                SOON
            </div>

            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <p className="e-sans e-reveal" style={{
                    fontSize: "9px", letterSpacing: "0.38em", color: "var(--gold)",
                    textTransform: "uppercase", marginBottom: "60px",
                }}>
                    Countdown to forever
                </p>

                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(2,1fr)",
                    maxWidth: "440px", margin: "0 auto", gap: "1px",
                    border: "1px solid var(--border)",
                }}>
                    {units.map(({ v, l }, i) => (
                        <div key={l} className={`e-reveal e-reveal-d${i + 1}`} style={{
                            padding: "36px 20px", textAlign: "center",
                            borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                            borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                            background: i === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                        }}>
                            <span className="e-serif" style={{
                                display: "block",
                                fontSize: "clamp(52px,14vw,80px)", fontWeight: 900,
                                color: i === 0 ? "var(--gold)" : "var(--white)",
                                lineHeight: 1, letterSpacing: "-0.03em",
                                animation: "countFlip 0.3s ease both",
                                animationDelay: `${i * 0.05}s`,
                            }} key={v}>
                                {String(v).padStart(2, "0")}
                            </span>
                            <span className="e-sans" style={{
                                display: "block", marginTop: "10px",
                                fontSize: "9px", letterSpacing: "0.28em",
                                color: "rgba(255,255,255,0.3)", textTransform: "uppercase",
                            }}>
                                {l}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   6. GALLERY IMMERSIVE
═══════════════════════════════════════ */
const GALLERY_IMGS = [IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6, IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6];

function GallerySection() {
    return (
        <section style={{ background: "var(--black)", padding: "80px 0", overflow: "hidden" }}>
            <p className="e-sans e-reveal" style={{
                fontSize: "9px", letterSpacing: "0.38em", color: "var(--gold)",
                textTransform: "uppercase", textAlign: "center", marginBottom: "48px", padding: "0 32px",
            }}>
                Nosotros
            </p>

            <div style={{ overflow: "hidden" }}>
                <div className="e-gallery-track">
                    {GALLERY_IMGS.map((src, i) => (
                        <div key={i} style={{
                            flexShrink: 0,
                            width: i % 3 === 0 ? "280px" : "200px",
                            height: i % 3 === 0 ? "380px" : "280px",
                            borderRadius: "1px", overflow: "hidden",
                            marginTop: i % 2 === 1 ? "40px" : "0",
                        }}>
                            <img src={src} alt="" style={{
                                width: "100%", height: "100%", objectFit: "cover",
                                filter: "brightness(0.6) saturate(0.65) contrast(1.05)",
                                transition: "filter 0.6s ease, transform 0.6s ease",
                            }}
                                onMouseEnter={e => { e.target.style.filter = "brightness(0.85) saturate(0.8)"; e.target.style.transform = "scale(1.04)"; }}
                                onMouseLeave={e => { e.target.style.filter = "brightness(0.6) saturate(0.65) contrast(1.05)"; e.target.style.transform = "scale(1)"; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   7. EVENT DETAILS
═══════════════════════════════════════ */
function EventSection() {
    const events = [
        { time: "18:00", label: "Ceremonia", place: "Iglesia del Pilar", detail: "Junín 1904, Recoleta", icon: "◆" },
        { time: "20:30", label: "Cóctel", place: "Jardín exterior", detail: "Espacio abierto bajo las estrellas", icon: "◇" },
        { time: "21:30", label: "Fiesta", place: "Gran Salón", detail: "Av. Libertador 1000, CABA", icon: "◈" },
    ];

    return (
        <section style={{
            background: "var(--deep)", padding: "100px 24px",
            position: "relative",
        }}>
            {/* BG gradient */}
            <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <p className="e-sans e-reveal" style={{
                    fontSize: "9px", letterSpacing: "0.38em", color: "var(--gold)",
                    textTransform: "uppercase", textAlign: "center", marginBottom: "16px",
                }}>
                    18 · 12 · 2026
                </p>
                <h2 className="e-serif e-reveal e-reveal-d1" style={{
                    fontSize: "clamp(32px,8vw,60px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.02em",
                    textAlign: "center", marginBottom: "64px", lineHeight: 1,
                }}>
                    THE NIGHT<br />
                    <span style={{ fontStyle: "italic", fontWeight: 400 }}>unfolds</span>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {events.map((ev, i) => (
                        <div key={ev.label} className={`e-glass e-reveal e-reveal-d${i + 1}`}
                            style={{
                                padding: "24px 20px",
                                display: "flex", alignItems: "center", gap: "20px",
                                transition: "border-color 0.4s, background 0.4s",
                            }}>
                            <span className="e-sans" style={{
                                fontSize: "11px", letterSpacing: "0.08em", color: "var(--gold)",
                                minWidth: "48px", fontWeight: 500,
                            }}>
                                {ev.time}
                            </span>
                            <span style={{ width: "1px", height: "36px", background: "var(--border)" }} />
                            <div style={{ flex: 1 }}>
                                <span className="e-sans" style={{
                                    fontSize: "9px", letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.35)", textTransform: "uppercase",
                                    display: "block", marginBottom: "4px",
                                }}>
                                    {ev.label}
                                </span>
                                <span className="e-serif" style={{
                                    fontSize: "18px", fontWeight: 700, color: "var(--white)",
                                    letterSpacing: "-0.01em", display: "block",
                                }}>
                                    {ev.place}
                                </span>
                                <span className="e-sans" style={{
                                    fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.35)",
                                    letterSpacing: "0.03em",
                                }}>
                                    {ev.detail}
                                </span>
                            </div>
                            <span style={{ color: "var(--gold)", fontSize: "10px", opacity: 0.5 }}>{ev.icon}</span>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "48px" }}>
                    <button className="e-btn e-reveal e-reveal-d4"
                        onClick={() => window.open("https://maps.google.com/?q=Iglesia+del+Pilar+Buenos+Aires", "_blank")}>
                        <span>Ver ubicación</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   8. RSVP
═══════════════════════════════════════ */
function RSVPSection() {
    const [form, setForm] = useState({ nombre: "", email: "", asistencia: "", menu: "" });
    const [sent, setSent] = useState(false);
    const h = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

    return (
        <section style={{ background: "var(--black)", padding: "100px 32px" }}>
            <div style={{ maxWidth: "460px", margin: "0 auto" }}>
                <span className="e-line-v e-reveal" style={{ marginBottom: "44px" }} />

                <p className="e-sans e-reveal e-reveal-d1" style={{
                    fontSize: "9px", letterSpacing: "0.38em", color: "var(--gold)",
                    textTransform: "uppercase", textAlign: "center", marginBottom: "16px",
                }}>
                    RSVP
                </p>
                <h2 className="e-serif e-reveal e-reveal-d2" style={{
                    fontSize: "clamp(28px,7vw,48px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.02em",
                    textAlign: "center", marginBottom: "52px", lineHeight: 1.05,
                }}>
                    ¿Estarás<br />
                    <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>con nosotros?</span>
                </h2>

                {sent ? (
                    <div style={{ textAlign: "center", padding: "40px 0" }}>
                        <span className="e-line-h" style={{ marginBottom: "28px" }} />
                        <p className="e-serif" style={{
                            fontSize: "22px", fontWeight: 400, fontStyle: "italic",
                            color: "var(--white)", lineHeight: 1.6,
                        }}>
                            Gracias, {form.nombre}.<br />
                            <span style={{ color: "var(--gold)" }}>Te esperamos.</span>
                        </p>
                        <span className="e-line-h" style={{ marginTop: "28px" }} />
                    </div>
                ) : (
                    <div className="e-reveal e-reveal-d3" style={{
                        display: "flex", flexDirection: "column", gap: "36px",
                    }}>
                        {[
                            { key: "nombre", placeholder: "Nombre completo", label: "Nombre" },
                            { key: "email", placeholder: "tu@email.com", label: "Email" },
                        ].map(({ key, placeholder, label }) => (
                            <div key={key}>
                                <label className="e-sans" style={{
                                    fontSize: "8px", letterSpacing: "0.26em", color: "rgba(255,255,255,0.3)",
                                    textTransform: "uppercase", display: "block", marginBottom: "8px",
                                }}>{label}</label>
                                <input className="e-input" placeholder={placeholder}
                                    value={form[key]} onChange={h(key)} />
                            </div>
                        ))}

                        <div>
                            <label className="e-sans" style={{
                                fontSize: "8px", letterSpacing: "0.26em", color: "rgba(255,255,255,0.3)",
                                textTransform: "uppercase", display: "block", marginBottom: "8px",
                            }}>Asistencia</label>
                            <select className="e-input" value={form.asistencia} onChange={h("asistencia")}>
                                <option value="">— Seleccioná —</option>
                                <option value="si">Sí, allí estaré</option>
                                <option value="no">No podré asistir</option>
                            </select>
                        </div>

                        <div>
                            <label className="e-sans" style={{
                                fontSize: "8px", letterSpacing: "0.26em", color: "rgba(255,255,255,0.3)",
                                textTransform: "uppercase", display: "block", marginBottom: "8px",
                            }}>Menú</label>
                            <select className="e-input" value={form.menu} onChange={h("menu")}>
                                <option value="">— Preferencia —</option>
                                <option value="carne">Carne</option>
                                <option value="vegetariano">Vegetariano</option>
                                <option value="vegano">Vegano</option>
                                <option value="sin-gluten">Sin gluten</option>
                            </select>
                        </div>

                        <div style={{ textAlign: "center", paddingTop: "8px" }}>
                            <button className="e-btn"
                                onClick={() => { if (form.nombre && form.asistencia) setSent(true); }}>
                                <span>Confirmar asistencia</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   9. FINAL CINEMATIC
═══════════════════════════════════════ */
function FinalSection() {
    const ref = useRef(null);
    useParallax(ref, 0.12);

    return (
        <section style={{
            position: "relative", minHeight: "100vh", overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--black)",
        }}>
            <div ref={ref} style={{ position: "absolute", inset: "-10%", zIndex: 0 }}>
                <img src={IMG.g5} alt="" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "brightness(0.2) saturate(0.4) contrast(1.2)",
                }} />
            </div>
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }} />
            <div className="e-vignette" style={{ zIndex: 2 }} />

            <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "60px 32px" }}>
                <p className="e-sans e-reveal" style={{
                    fontSize: "9px", letterSpacing: "0.4em", color: "var(--gold)",
                    textTransform: "uppercase", marginBottom: "32px",
                }}>
                    Julia & José · 18 · 12 · 2026
                </p>

                <h2 className="e-serif e-reveal e-reveal-d1" style={{
                    fontSize: "clamp(48px,14vw,100px)", fontWeight: 900,
                    color: "var(--white)", letterSpacing: "-0.03em", lineHeight: 0.9,
                }}>
                    SEE YOU<br />
                    <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>under</span><br />
                    THE STARS
                </h2>

                <p className="e-sans e-reveal e-reveal-d3" style={{
                    fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.35)", marginTop: "32px",
                }}>
                    Los amamos. Los esperamos.
                </p>

                <span className="e-line-v e-reveal e-reveal-d4" style={{ marginTop: "52px", opacity: 0.5 }} />
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   ROOT
═══════════════════════════════════════ */
export default function EclipseWedding() {
    const [entered, setEntered] = useState(false);
    useEclipseReveal();

    useEffect(() => {
        const id = "eclipse-global-styles";
        if (!document.getElementById(id)) {
            const s = document.createElement("style");
            s.id = id; s.textContent = GLOBAL_CSS;
            document.head.appendChild(s);
        }
        document.body.classList.add("eclipse-body");
        return () => document.body.classList.remove("eclipse-body");
    }, []);

    return (
        <div className="e-grain" style={{ background: "var(--black)", minHeight: "100vh" }}>
            <div className="e-scanline" />
            {!entered && <IntroScreen onEnter={() => setEntered(true)} />}

            <main style={{ opacity: entered ? 1 : 0, transition: "opacity 1s 0.3s" }}>
                <HeroSection />
                <StorySection />
                <CountdownSection />
                <GallerySection />
                <EventSection />
                <RSVPSection />
                <FinalSection />

                <footer style={{
                    background: "var(--black)", padding: "36px 32px", textAlign: "center",
                    borderTop: "1px solid var(--border)"
                }}>
                    <span className="e-line-h" style={{ marginBottom: "16px" }} />
                    <p className="e-sans" style={{
                        fontSize: "9px", letterSpacing: "0.22em",
                        color: "rgba(255,255,255,0.2)", textTransform: "uppercase",
                    }}>
                        Julia & José · Eclipse · 18.12.2026
                    </p>
                </footer>
            </main>
        </div>
    );
}