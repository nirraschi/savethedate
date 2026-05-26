import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   GLOBAL STYLES (injected once)
───────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Manrope:wght@200;300;400;500&display=swap');

  :root {
    --ivory: #f9f5ef;
    --warm-white: #fdfaf6;
    --beige: #e8dfd3;
    --beige-mid: #d4c9bb;
    --sand: #c4b49a;
    --gold: #b8965a;
    --gold-light: #d4ac6e;
    --gray-warm: #8a8178;
    --text: #3d3830;
    --text-light: #7a7268;
    --dark: #1a1612;
    --charcoal: #2a2520;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--ivory);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--ivory); }
  ::-webkit-scrollbar-thumb { background: var(--sand); }

  .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  .font-sans  { font-family: 'Manrope', system-ui, sans-serif; }

  /* ── Grain overlay ── */
  .grain::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  /* ── Keyframes ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes blurReveal {
    from { opacity: 0; filter: blur(12px); transform: scale(1.04); }
    to   { opacity: 1; filter: blur(0);    transform: scale(1); }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50%       { transform: translateY(6px); opacity: 1; }
  }
  @keyframes pulse-gold {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .anim-fade-up    { animation: fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) both; }
  .anim-fade-in    { animation: fadeIn 1.4s ease both; }
  .anim-blur       { animation: blurReveal 1.8s cubic-bezier(0.16,1,0.3,1) both; }
  .anim-scroll     { animation: scrollBounce 2.2s ease-in-out infinite; }
  .anim-count      { animation: countUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }

  /* ── Intersection reveal ── */
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.15s; }
  .reveal-delay-2 { transition-delay: 0.30s; }
  .reveal-delay-3 { transition-delay: 0.45s; }
  .reveal-delay-4 { transition-delay: 0.60s; }

  /* ── Gold line ── */
  .gold-line {
    display: block;
    width: 1px;
    height: 52px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
    margin: 0 auto;
  }
  .gold-line-h {
    display: block;
    width: 64px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
    margin: 0 auto;
  }

  /* ── Inputs elegantes ── */
  .elegant-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--beige-mid);
    padding: 10px 0;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--text);
    letter-spacing: 0.04em;
    outline: none;
    transition: border-color 0.4s ease;
    width: 100%;
  }
  .elegant-input::placeholder { color: var(--gray-warm); font-weight: 200; }
  .elegant-input:focus { border-bottom-color: var(--gold); }
  select.elegant-input { cursor: pointer; -webkit-appearance: none; appearance: none; }

  /* ── Parallax image wrapper ── */
  .parallax-img {
    transform-origin: center;
    will-change: transform;
  }

  /* ── Story dots ── */
  .story-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    border: 1px solid var(--gold);
    background: transparent;
    flex-shrink: 0;
  }

  /* ── Gallery mosaic ── */
  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media (min-width: 768px) {
    .gallery-grid {
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: auto auto;
    }
    .gallery-featured {
      grid-row: 1 / 3;
    }
  }

  /* ── Button gold ── */
  .btn-gold {
    border: 1px solid var(--gold);
    color: var(--gold);
    background: transparent;
    padding: 14px 38px;
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.4s ease, color 0.4s ease;
  }
  .btn-gold:hover {
    background: var(--gold);
    color: var(--warm-white);
  }

  /* ── Dress code swatch ── */
  .swatch {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.3);
    display: inline-block;
  }
`;

/* ─────────────────────────────────────────
   HOOK: Intersection Observer reveal
───────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.12 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

/* ─────────────────────────────────────────
   HOOK: Countdown
───────────────────────────────────────── */
function useCountdown(targetDate) {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const tick = () => {
            const diff = new Date(targetDate) - new Date();
            if (diff <= 0) return;
            setTime({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);
    return time;
}

/* ─────────────────────────────────────────
   HOOK: Parallax on scroll
───────────────────────────────────────── */
function useParallax(ref, speed = 0.25) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed;
            el.style.transform = `translateY(${offset}px) scale(1.08)`;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [ref, speed]);
}

/* ─────────────────────────────────────────
   PLACEHOLDER IMAGES (unsplash editorial)
───────────────────────────────────────── */
const IMG = {
    intro: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1200&q=80&auto=format&fit=crop",
    hero: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=80&auto=format&fit=crop",
    story1: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=75&auto=format&fit=crop",
    story2: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=75&auto=format&fit=crop",
    gallery1: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
    gallery2: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=75&auto=format&fit=crop",
    gallery3: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=75&auto=format&fit=crop",
    gallery4: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=75&auto=format&fit=crop",
    final: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=80&auto=format&fit=crop",
};

/* ═══════════════════════════════════════════════
   SECTION: INTRO
═══════════════════════════════════════════════ */
function IntroScreen({ onEnter }) {
    const [visible, setVisible] = useState(false);
    const [leaving, setLeaving] = useState(false);
    useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

    const handleEnter = () => {
        setLeaving(true);
        setTimeout(onEnter, 1400);
    };

    return (
        <div
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "var(--dark)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                transition: "opacity 1.4s ease, visibility 1.4s",
                opacity: leaving ? 0 : 1,
                visibility: leaving ? "hidden" : "visible",
                overflow: "hidden",
            }}
        >
            {/* Background image */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <img
                    src={IMG.intro} alt=""
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        filter: "blur(4px) brightness(0.32) saturate(0.7)",
                        transform: "scale(1.08)",
                        opacity: visible ? 1 : 0,
                        transition: "opacity 2.5s ease",
                    }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 50% 60%, rgba(184,150,90,0.12) 0%, transparent 70%)",
                }} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", textAlign: "center", padding: "0 32px" }}>
                {/* Ornamental line */}
                <span className="gold-line" style={{ marginBottom: "32px", opacity: visible ? 1 : 0, transition: "opacity 1.5s 0.5s" }} />

                <p className="font-sans" style={{
                    fontSize: "10px", letterSpacing: "0.28em", color: "var(--sand)",
                    textTransform: "uppercase", marginBottom: "24px",
                    opacity: visible ? 1 : 0, transition: "opacity 1.2s 0.9s",
                }}>
                    Con amor, les anunciamos
                </p>

                <h1 className="font-serif" style={{
                    fontSize: "clamp(52px, 14vw, 86px)", fontWeight: 300,
                    color: "var(--warm-white)", lineHeight: 1.05,
                    letterSpacing: "0.04em",
                    opacity: visible ? 1 : 0, transition: "opacity 1.4s 1.1s, filter 1.4s 1.1s",
                    filter: visible ? "blur(0)" : "blur(8px)",
                }}>
                    Julia & José
                </h1>

                <div style={{
                    margin: "20px 0 36px",
                    opacity: visible ? 1 : 0, transition: "opacity 1.2s 1.5s",
                }}>
                    <span className="gold-line-h" />
                    <p className="font-sans" style={{
                        fontSize: "13px", letterSpacing: "0.22em", color: "var(--beige-mid)",
                        textTransform: "uppercase", marginTop: "18px",
                    }}>
                        18 · 12 · 2026
                    </p>
                </div>

                <button
                    className="btn-gold"
                    onClick={handleEnter}
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: "opacity 1.2s 1.9s, background 0.4s, color 0.4s",
                    }}
                >
                    Abrir invitación
                </button>
            </div>

            <span className="gold-line" style={{
                position: "absolute", bottom: "40px",
                opacity: visible ? 0.5 : 0, transition: "opacity 1.5s 2.2s",
            }} />
        </div>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: HERO
═══════════════════════════════════════════════ */
function HeroSection() {
    const imgRef = useRef(null);
    useParallax(imgRef, 0.18);

    return (
        <section style={{
            position: "relative", height: "100vh", overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
        }}>
            <div ref={imgRef} style={{ position: "absolute", inset: "-8%", zIndex: 0 }}>
                <img src={IMG.hero} alt="Julia y José" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "brightness(0.52) saturate(0.75)",
                }} />
            </div>
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(to bottom, transparent 40%, rgba(26,22,18,0.55) 100%)",
            }} />

            <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 28px" }}>
                <p className="font-sans anim-fade-up" style={{
                    fontSize: "10px", letterSpacing: "0.3em", color: "var(--sand)",
                    textTransform: "uppercase", marginBottom: "20px",
                    animationDelay: "0.2s",
                }}>
                    Anunciamos que
                </p>
                <h2 className="font-serif anim-blur" style={{
                    fontSize: "clamp(62px, 18vw, 120px)", fontWeight: 300,
                    color: "var(--warm-white)", lineHeight: 0.95,
                    letterSpacing: "0.03em",
                    animationDelay: "0.4s",
                }}>
                    Nos casamos
                </h2>
                <p className="font-serif anim-fade-up" style={{
                    fontSize: "clamp(22px, 6vw, 36px)", fontWeight: 300, fontStyle: "italic",
                    color: "var(--beige)", marginTop: "16px", letterSpacing: "0.06em",
                    animationDelay: "0.8s",
                }}>
                    Julia & José
                </p>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
                zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
            }}>
                <span className="gold-line" style={{ height: "36px" }} />
                <span className="font-sans anim-scroll" style={{
                    fontSize: "9px", letterSpacing: "0.22em", color: "var(--sand)",
                    textTransform: "uppercase",
                }}>Scroll</span>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: QUOTE
═══════════════════════════════════════════════ */
function QuoteSection() {
    return (
        <section style={{
            background: "var(--warm-white)",
            padding: "120px 32px",
            textAlign: "center",
        }}>
            <span className="gold-line reveal" style={{ marginBottom: "52px" }} />

            <blockquote className="font-serif reveal reveal-delay-1" style={{
                fontSize: "clamp(24px, 6vw, 38px)", fontWeight: 300, fontStyle: "italic",
                color: "var(--text)", lineHeight: 1.55, letterSpacing: "0.01em",
                maxWidth: "600px", margin: "0 auto",
            }}>
                "Cada historia de amor es hermosa,<br />
                pero la nuestra es nuestra favorita."
            </blockquote>

            <span className="gold-line-h reveal reveal-delay-2" style={{ marginTop: "52px" }} />
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: COUNTDOWN
═══════════════════════════════════════════════ */
function CountdownSection() {
    const { days, hours, minutes, seconds } = useCountdown("2026-12-18T18:00:00");
    const units = [
        { value: days, label: "días" },
        { value: hours, label: "horas" },
        { value: minutes, label: "minutos" },
        { value: seconds, label: "segundos" },
    ];
    return (
        <section style={{
            background: "var(--ivory)",
            padding: "100px 28px",
            textAlign: "center",
        }}>
            <p className="font-sans reveal" style={{
                fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                textTransform: "uppercase", marginBottom: "56px",
            }}>
                Faltan
            </p>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px", maxWidth: "480px", margin: "0 auto",
            }}>
                {units.map(({ value, label }, i) => (
                    <div key={label} className={`reveal reveal-delay-${i + 1}`} style={{
                        padding: "32px 20px",
                        borderTop: "1px solid var(--beige)",
                        borderLeft: i % 2 === 1 ? "1px solid var(--beige)" : "none",
                    }}>
                        <span className="font-serif" style={{
                            display: "block",
                            fontSize: "clamp(48px, 14vw, 72px)", fontWeight: 300,
                            color: "var(--charcoal)", lineHeight: 1, letterSpacing: "-0.01em",
                        }}>
                            {String(value).padStart(2, "0")}
                        </span>
                        <span className="font-sans" style={{
                            display: "block", marginTop: "10px",
                            fontSize: "10px", letterSpacing: "0.22em",
                            color: "var(--gray-warm)", textTransform: "uppercase",
                        }}>
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: NUESTRA HISTORIA
═══════════════════════════════════════════════ */
const STORY = [
    {
        year: "2019",
        text: "Nos conocimos en una tarde de otoño. Una mirada y el mundo se ordenó.",
        img: IMG.story1,
    },
    {
        year: "2022",
        text: "El viaje que lo cambió todo. Dos semanas, tres países, una sola certeza.",
        img: null,
    },
    {
        year: "2024",
        text: "La pregunta que ya conocíamos. La respuesta que siempre fue sí.",
        img: IMG.story2,
    },
    {
        year: "2026",
        text: "El sí, ante todos.",
        img: null,
        last: true,
    },
];

function HistorySection() {
    return (
        <section style={{ background: "var(--warm-white)", padding: "100px 0" }}>
            <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 32px" }}>
                <p className="font-sans reveal" style={{
                    fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                    textTransform: "uppercase", textAlign: "center", marginBottom: "72px",
                }}>
                    Nuestra historia
                </p>

                {STORY.map((s, i) => (
                    <div key={s.year} className={`reveal reveal-delay-${(i % 3) + 1}`}
                        style={{ marginBottom: s.last ? 0 : "64px" }}>
                        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                            {/* Timeline */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                <span className="story-dot" />
                                {!s.last && (
                                    <span style={{
                                        display: "block", width: "1px", flex: 1, minHeight: "80px",
                                        background: "linear-gradient(to bottom, var(--gold) 0%, var(--beige) 100%)",
                                        marginTop: "8px",
                                    }} />
                                )}
                            </div>
                            {/* Content */}
                            <div style={{ paddingBottom: "8px", flex: 1 }}>
                                <span className="font-sans" style={{
                                    fontSize: "11px", letterSpacing: "0.18em", color: "var(--gold)",
                                    textTransform: "uppercase", display: "block", marginBottom: "10px",
                                }}>
                                    {s.year}
                                </span>
                                <p className="font-serif" style={{
                                    fontSize: "20px", fontWeight: 300, fontStyle: "italic",
                                    color: "var(--text)", lineHeight: 1.6, letterSpacing: "0.01em",
                                }}>
                                    {s.text}
                                </p>
                                {s.img && (
                                    <div style={{
                                        marginTop: "24px", borderRadius: "2px", overflow: "hidden",
                                        height: "220px",
                                    }}>
                                        <img src={s.img} alt="" style={{
                                            width: "100%", height: "100%", objectFit: "cover",
                                            filter: "saturate(0.8) brightness(0.95)",
                                        }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: GALERÍA
═══════════════════════════════════════════════ */
function GallerySection() {
    return (
        <section style={{ background: "var(--ivory)", padding: "100px 20px" }}>
            <p className="font-sans reveal" style={{
                fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                textTransform: "uppercase", textAlign: "center", marginBottom: "52px",
            }}>
                Nosotros
            </p>

            <div className="gallery-grid reveal" style={{ maxWidth: "880px", margin: "0 auto" }}>
                {/* Featured (tall) */}
                <div className="gallery-featured" style={{ borderRadius: "2px", overflow: "hidden", minHeight: "380px" }}>
                    <img src={IMG.gallery1} alt="" style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        filter: "saturate(0.75) brightness(0.96)", display: "block",
                    }} />
                </div>
                {/* Smaller */}
                {[IMG.gallery2, IMG.gallery3, IMG.gallery4].map((src, i) => (
                    <div key={i} style={{
                        borderRadius: "2px", overflow: "hidden",
                        height: "180px",
                    }}>
                        <img src={src} alt="" style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            filter: "saturate(0.75) brightness(0.96)", display: "block",
                        }} />
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: CEREMONIA
═══════════════════════════════════════════════ */
function CeremoniaSection() {
    return (
        <section style={{ background: "var(--charcoal)", padding: "100px 32px", textAlign: "center" }}>
            <span className="gold-line reveal" style={{ marginBottom: "52px" }} />

            <p className="font-sans reveal reveal-delay-1" style={{
                fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                textTransform: "uppercase", marginBottom: "40px",
            }}>
                La ceremonia
            </p>

            <h3 className="font-serif reveal reveal-delay-2" style={{
                fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 300,
                color: "var(--warm-white)", letterSpacing: "0.03em", marginBottom: "40px",
            }}>
                Palacio San Telmo
            </h3>

            <div className="reveal reveal-delay-3" style={{
                display: "flex", justifyContent: "center", gap: "40px",
                flexWrap: "wrap", marginBottom: "52px",
            }}>
                {[
                    { label: "Fecha", value: "18 de diciembre, 2026" },
                    { label: "Hora", value: "18:00 hs" },
                    { label: "Lugar", value: "Av. Hipólito Yrigoyen 500" },
                ].map(({ label, value }) => (
                    <div key={label} style={{ textAlign: "center", minWidth: "140px" }}>
                        <span className="font-sans" style={{
                            fontSize: "9px", letterSpacing: "0.2em", color: "var(--gray-warm)",
                            textTransform: "uppercase", display: "block", marginBottom: "8px",
                        }}>{label}</span>
                        <span className="font-serif" style={{
                            fontSize: "17px", fontWeight: 300, color: "var(--beige)", letterSpacing: "0.03em",
                        }}>{value}</span>
                    </div>
                ))}
            </div>

            <button
                className="btn-gold reveal reveal-delay-4"
                onClick={() => window.open("https://maps.google.com/?q=Palacio+San+Telmo+Buenos+Aires", "_blank")}
            >
                Ver ubicación
            </button>

            <span className="gold-line reveal" style={{ marginTop: "60px" }} />
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: DRESS CODE
═══════════════════════════════════════════════ */
const SWATCHES = [
    { color: "#f9f5ef", label: "Ivory" },
    { color: "#e8dfd3", label: "Beige" },
    { color: "#c4b49a", label: "Arena" },
    { color: "#8a8178", label: "Gris cálido" },
    { color: "#2a2520", label: "Carbón" },
];

function DressCodeSection() {
    return (
        <section style={{ background: "var(--ivory)", padding: "100px 32px", textAlign: "center" }}>
            <p className="font-sans reveal" style={{
                fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                textTransform: "uppercase", marginBottom: "16px",
            }}>
                Vestimenta
            </p>
            <h3 className="font-serif reveal reveal-delay-1" style={{
                fontSize: "clamp(28px, 7vw, 44px)", fontWeight: 300,
                color: "var(--text)", letterSpacing: "0.04em", marginBottom: "12px",
            }}>
                Formal elegante
            </h3>
            <p className="font-sans reveal reveal-delay-2" style={{
                fontSize: "13px", fontWeight: 300, color: "var(--gray-warm)",
                letterSpacing: "0.04em", marginBottom: "52px",
                lineHeight: 1.7,
            }}>
                Tonos neutros y tierra.<br />
                Sin blanco ni negro absoluto, por favor.
            </p>

            {/* Palette */}
            <div className="reveal reveal-delay-3" style={{
                display: "flex", justifyContent: "center", gap: "16px",
                flexWrap: "wrap", marginBottom: "56px",
            }}>
                {SWATCHES.map(({ color, label }) => (
                    <div key={label} style={{ textAlign: "center" }}>
                        <span className="swatch" style={{ background: color, display: "block", margin: "0 auto 8px" }} />
                        <span className="font-sans" style={{
                            fontSize: "9px", letterSpacing: "0.14em", color: "var(--text-light)",
                            textTransform: "uppercase",
                        }}>{label}</span>
                    </div>
                ))}
            </div>

            {/* Icons */}
            <div className="reveal reveal-delay-4" style={{
                display: "flex", justifyContent: "center", gap: "52px", flexWrap: "wrap",
            }}>
                {[
                    { icon: "♀", label: "Vestido largo o traje de noche" },
                    { icon: "♂", label: "Traje oscuro o smoking" },
                ].map(({ icon, label }) => (
                    <div key={label} style={{ textAlign: "center", maxWidth: "140px" }}>
                        <span style={{ fontSize: "24px", color: "var(--gold)", display: "block", marginBottom: "10px" }}>
                            {icon}
                        </span>
                        <span className="font-sans" style={{
                            fontSize: "11px", fontWeight: 300, color: "var(--gray-warm)",
                            letterSpacing: "0.04em", lineHeight: 1.6,
                        }}>
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: RSVP
═══════════════════════════════════════════════ */
function RSVPSection() {
    const [form, setForm] = useState({ nombre: "", asistencia: "", dieta: "", mensaje: "" });
    const [sent, setSent] = useState(false);

    const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = () => {
        if (!form.nombre || !form.asistencia) return;
        setSent(true);
    };

    return (
        <section style={{ background: "var(--warm-white)", padding: "100px 32px" }}>
            <div style={{ maxWidth: "440px", margin: "0 auto", textAlign: "center" }}>
                <span className="gold-line reveal" style={{ marginBottom: "52px" }} />

                <p className="font-sans reveal reveal-delay-1" style={{
                    fontSize: "10px", letterSpacing: "0.28em", color: "var(--gold)",
                    textTransform: "uppercase", marginBottom: "16px",
                }}>
                    Confirmación
                </p>
                <h3 className="font-serif reveal reveal-delay-2" style={{
                    fontSize: "clamp(28px, 7vw, 42px)", fontWeight: 300,
                    color: "var(--text)", letterSpacing: "0.03em", marginBottom: "48px",
                }}>
                    Nos gustaría saber si podrás estar
                </h3>

                {sent ? (
                    <div className="anim-fade-in" style={{ padding: "40px 0" }}>
                        <span className="gold-line-h" style={{ marginBottom: "28px" }} />
                        <p className="font-serif" style={{
                            fontSize: "22px", fontWeight: 300, fontStyle: "italic",
                            color: "var(--text)", lineHeight: 1.6,
                        }}>
                            Gracias, {form.nombre}.<br />
                            Te esperamos con el corazón abierto.
                        </p>
                        <span className="gold-line-h" style={{ marginTop: "28px" }} />
                    </div>
                ) : (
                    <div className="reveal reveal-delay-3" style={{
                        display: "flex", flexDirection: "column", gap: "32px", textAlign: "left",
                    }}>
                        <div>
                            <label className="font-sans" style={{
                                fontSize: "9px", letterSpacing: "0.2em", color: "var(--gray-warm)",
                                textTransform: "uppercase", display: "block", marginBottom: "6px",
                            }}>Tu nombre</label>
                            <input
                                className="elegant-input"
                                placeholder="Nombre completo"
                                value={form.nombre}
                                onChange={handle("nombre")}
                            />
                        </div>

                        <div>
                            <label className="font-sans" style={{
                                fontSize: "9px", letterSpacing: "0.2em", color: "var(--gray-warm)",
                                textTransform: "uppercase", display: "block", marginBottom: "6px",
                            }}>¿Podrás asistir?</label>
                            <select className="elegant-input" value={form.asistencia} onChange={handle("asistencia")}>
                                <option value="">Seleccioná una opción</option>
                                <option value="si">Sí, allí estaré</option>
                                <option value="no">Lamentablemente no podré</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-sans" style={{
                                fontSize: "9px", letterSpacing: "0.2em", color: "var(--gray-warm)",
                                textTransform: "uppercase", display: "block", marginBottom: "6px",
                            }}>Restricción alimentaria</label>
                            <input
                                className="elegant-input"
                                placeholder="Vegetariano, sin gluten, etc."
                                value={form.dieta}
                                onChange={handle("dieta")}
                            />
                        </div>

                        <div>
                            <label className="font-sans" style={{
                                fontSize: "9px", letterSpacing: "0.2em", color: "var(--gray-warm)",
                                textTransform: "uppercase", display: "block", marginBottom: "6px",
                            }}>Un mensaje (opcional)</label>
                            <textarea
                                className="elegant-input"
                                placeholder="Lo que quieras decirnos…"
                                rows={3}
                                value={form.mensaje}
                                onChange={handle("mensaje")}
                                style={{
                                    resize: "none", background: "transparent", borderBottom: "1px solid var(--beige-mid)",
                                    fontFamily: "'Manrope', sans-serif", fontSize: "14px", fontWeight: 300,
                                    color: "var(--text)", outline: "none", width: "100%", transition: "border-color 0.4s",
                                    letterSpacing: "0.04em", padding: "10px 0",
                                }}
                            />
                        </div>

                        <div style={{ textAlign: "center", paddingTop: "8px" }}>
                            <button className="btn-gold" onClick={submit}>
                                Confirmar asistencia
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   SECTION: FINAL
═══════════════════════════════════════════════ */
function FinalSection() {
    const imgRef = useRef(null);
    useParallax(imgRef, 0.15);

    return (
        <section style={{
            position: "relative", minHeight: "90vh",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
        }}>
            <div ref={imgRef} style={{ position: "absolute", inset: "-8%", zIndex: 0 }}>
                <img src={IMG.final} alt="" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "brightness(0.38) saturate(0.65)",
                }} />
            </div>
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(to bottom, rgba(26,22,18,0.3) 0%, rgba(26,22,18,0.6) 100%)",
            }} />

            <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 36px", maxWidth: "560px" }}>
                <span className="gold-line-h reveal" style={{ marginBottom: "44px" }} />

                <h2 className="font-serif reveal reveal-delay-1" style={{
                    fontSize: "clamp(28px, 7vw, 46px)", fontWeight: 300,
                    color: "var(--warm-white)", lineHeight: 1.45,
                    letterSpacing: "0.02em",
                }}>
                    Los esperamos para compartir<br />
                    el día más importante<br />
                    de nuestras vidas.
                </h2>

                <p className="font-serif reveal reveal-delay-2" style={{
                    fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 300, fontStyle: "italic",
                    color: "var(--sand)", marginTop: "32px", letterSpacing: "0.04em",
                }}>
                    Julia & José
                </p>

                <span className="gold-line-h reveal reveal-delay-3" style={{ marginTop: "44px" }} />

                <p className="font-sans reveal reveal-delay-4" style={{
                    fontSize: "10px", letterSpacing: "0.22em", color: "var(--gray-warm)",
                    textTransform: "uppercase", marginTop: "28px",
                }}>
                    18 · 12 · 2026
                </p>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function AuroraWedding() {
    const [entered, setEntered] = useState(false);
    useReveal();

    // Inject global CSS
    useEffect(() => {
        const id = "aurora-global-styles";
        if (!document.getElementById(id)) {
            const style = document.createElement("style");
            style.id = id;
            style.textContent = GLOBAL_CSS;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <div className="grain" style={{ background: "var(--ivory)" }}>
            {!entered && <IntroScreen onEnter={() => setEntered(true)} />}

            <main style={{ opacity: entered ? 1 : 0, transition: "opacity 1s 0.2s" }}>
                <HeroSection />
                <QuoteSection />
                <CountdownSection />
                <HistorySection />
                <GallerySection />
                <CeremoniaSection />
                <DressCodeSection />
                <RSVPSection />
                <FinalSection />

                {/* Footer */}
                <footer style={{
                    background: "var(--dark)", padding: "40px 32px", textAlign: "center",
                }}>
                    <span className="gold-line-h" style={{ marginBottom: "20px" }} />
                    <p className="font-sans" style={{
                        fontSize: "10px", letterSpacing: "0.18em", color: "var(--gray-warm)",
                        textTransform: "uppercase",
                    }}>
                        Julia & José · 18.12.2026
                    </p>
                </footer>
            </main>
        </div>
    );
}