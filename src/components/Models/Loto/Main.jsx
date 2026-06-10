// ╔══════════════════════════════════════════════════════════╗
//  BODA — ROOT
// ╚══════════════════════════════════════════════════════════╝

import { useEffect } from "react";
import {
    couple, backgroundImage, heroImage,
    countdown, event, gallery, dresscode, gift, rsvp, footer,
    sections,
} from "./config.js";
import { useThemeVars } from "./hooks.js";

import HeroSection from "./sections/Hero.jsx";
import ScrollBackground from "./sections/ScrollBackground.jsx";
import CountdownSection from "./sections/Countdown.jsx";
import EventSection from "./sections/Event.jsx";
import GallerySection from "./sections/Gallery.jsx";
import DressCodeSection from "./sections/DressCode.jsx";
import GiftSection from "./sections/Gift.jsx";
import RSVPSection from "./sections/RSVP.jsx";

const FONT_ID = "boda-fonts";
const FONT_HREF =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap";

// ── CRÍTICO: overflow-x en html/body, NO en un div wrapper ──
// Si ponés overflow-x:hidden en un div que envuelve todo,
// ese div se convierte en containing block de position:fixed
// y la foto deja de quedar fija. Al ponerlo en html/body
// no hay ningún ancestro que rompa el fixed.
const BASE_CSS = `
  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }
  .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
  * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
`;

export default function Boda() {
    useThemeVars();

    useEffect(() => {
        if (!document.getElementById(FONT_ID)) {
            const link = document.createElement("link");
            link.id = FONT_ID; link.rel = "stylesheet"; link.href = FONT_HREF;
            document.head.appendChild(link);
        }
        const styleId = "boda-base-css";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId; style.textContent = BASE_CSS;
            document.head.appendChild(style);
        }
        // Limpia overflow al desmontar (cuando cambiás de ruta)
        return () => {
            document.documentElement.style.overflowX = "";
            document.body.style.overflowX = "";
        };
    }, []);

    return (
        // background: transparent → deja ver el fondo del body
        // width: 100% → no se sale del viewport
        // SIN overflow en este div → no rompe position:fixed
        <div
            style={{
                fontFamily: "'Jost', system-ui, sans-serif",
                background: "transparent",
                position: "relative",
                width: "100%",
            }}
        >
            {/* Inyecta la foto fija en el body */}
            <ScrollBackground backgroundImage={backgroundImage} />

            {/* ── 1. HERO — bg sólido, tapa la foto ── */}
            {sections.hero && (
                <div style={{ position: "relative", zIndex: 1 }}>
                    <HeroSection couple={couple} heroImage={heroImage} />
                </div>
            )}

            {/* ── 2. SECCIONES MEDIAS — bg transparente, se ve la foto ── */}
            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                <div className="pt-12 pb-4">

                    {sections.countdown && (
                        <CountdownSection countdown={countdown} dateISO={couple.dateISO} />
                    )}
                    {sections.event && (
                        <EventSection event={event} />
                    )}
                    {sections.gallery && (
                        <GallerySection gallery={gallery} />
                    )}
                    {sections.dresscode && (
                        <DressCodeSection dresscode={dresscode} />
                    )}
                    {sections.gift && (
                        <GiftSection gift={gift} />
                    )}

                </div>
            </div>

            {/* ── 3. RSVP — bg sólido, tapa la foto ── */}
            {sections.rsvp && (
                <div style={{ position: "relative", zIndex: 1 }}>
                    <RSVPSection rsvp={rsvp} />
                </div>
            )}

            {/* ── Footer ── */}
            <footer
                className="px-5 py-8 flex flex-col items-center gap-2 text-center"
                style={{
                    position: "relative",
                    zIndex: 1,
                    background: "var(--b-footer-bg)",
                    borderTop: "0.5px solid rgba(255,255,255,0.06)",
                }}
            >
                <div
                    className="w-8 h-px mb-2"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, var(--b-accent), transparent)",
                    }}
                />
                <p
                    className="text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: "var(--b-text-muted-dark)" }}
                >
                    {footer.text}
                </p>
                <p className="text-[11px]" style={{ color: "var(--b-text-muted-dark)" }}>
                    {footer.love}
                </p>
            </footer>

        </div>
    );
}