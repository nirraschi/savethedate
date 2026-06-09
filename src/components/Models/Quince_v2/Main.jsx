// ╔══════════════════════════════════════════════════════╗
//  QUINCE — ROOT
//  Importá este componente en tu router:
//
//  import Quince from "@/components/Models/quince/Quince";
//  <Route path="/modelos/quince" element={<Quince />} />
//
//  Todo el contenido y colores se editan en config.js.
// ╚══════════════════════════════════════════════════════╝

import { useEffect } from "react";
import { config } from "./config.js";
import { useThemeVars } from "./hooks.js";

import HeroSection from "./sections/Hero.jsx";
import CountdownSection from "./sections/Countdown.jsx";
import EventSection from "./sections/Event.jsx";
import GallerySection from "./sections/Gallery.jsx";
import DressCodeSection from "./sections/DressCode.jsx";
import InstagramSection from "./sections/Instagram.jsx";
import GiftSection from "./sections/Gift.jsx";
import RSVPSection from "./sections/RSVP.jsx";

// Google Fonts — Playfair Display (display) + Plus Jakarta Sans (body)
const FONT_ID = "quince-fonts";
const FONT_HREF =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap";

// CSS base mínimo para la fuente display (Tailwind no la conoce hasta que
// la registremos en tailwind.config o la inyectemos aquí).
const BASE_CSS = `
  .font-display { font-family: 'Playfair Display', Georgia, serif; }
  * { -webkit-tap-highlight-color: transparent; }
  html { scroll-behavior: smooth; }
`;

export default function Quince() {
    // Inyecta CSS vars del tema en :root
    useThemeVars(config.theme);

    // Inyecta fuentes y CSS base una sola vez
    useEffect(() => {
        if (!document.getElementById(FONT_ID)) {
            const link = document.createElement("link");
            link.id = FONT_ID;
            link.rel = "stylesheet";
            link.href = FONT_HREF;
            document.head.appendChild(link);
        }
        const styleId = "quince-base-css";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.textContent = BASE_CSS;
            document.head.appendChild(style);
        }
    }, []);

    const { sections, girl, heroImage, countdown, event, gallery,
        dresscode, instagram, gift, rsvp, footer, theme } = config;

    return (
        <div
            className="w-full overflow-x-hidden"
            style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                background: "var(--q-bg-cream)",
                color: "var(--q-text-dark)",
            }}
        >
            {/* ── Barra superior decorativa ── */}
            <div
                className="w-full"
                style={{ height: "3px", background: "var(--q-top-bar)" }}
            />

            {/* ── Secciones ── */}
            {sections.hero && <HeroSection girl={girl} heroImage={heroImage} theme={theme} />}
            {sections.countdown && <CountdownSection countdown={countdown} dateISO={girl.dateISO} />}
            {sections.event && <EventSection event={event} />}
            {sections.gallery && <GallerySection gallery={gallery} />}
            {sections.dresscode && <DressCodeSection dresscode={dresscode} />}
            {sections.instagram && <InstagramSection instagram={instagram} />}
            {sections.gift && <GiftSection gift={gift} />}
            {sections.rsvp && <RSVPSection rsvp={rsvp} />}

            {/* ── Footer ── */}
            <footer
                className="px-5 py-8 flex flex-col items-center gap-2"
                style={{
                    background: "var(--q-bg-dark)",
                    borderTop: "0.5px solid rgba(255,255,255,0.06)",
                }}
            >
                <div
                    className="w-8 h-px mb-2"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, var(--q-gold), transparent)",
                    }}
                />
                <p
                    className="text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: "var(--q-text-muted-dark)" }}
                >
                    {footer.text}
                </p>
                <p
                    className="text-[11px]"
                    style={{ color: "var(--q-text-muted-dark)" }}
                >
                    {footer.love}
                </p>
            </footer>
        </div>
    );
}