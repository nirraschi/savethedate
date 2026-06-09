// ╔══════════════════════════════════════════════════════╗
//  QUINCE — ROOT
//  Punto de entrada del template.
//  Todo el contenido se controla desde config.js.
//
//  USO en tu router (React Router v6):
//    import Quince from "@/components/Models/quince/Quince";
//    <Route path="/modelos/quince" element={<Quince />} />
// ╚══════════════════════════════════════════════════════╝

import { useEffect } from "react";
import { config } from "./config.js";
import { useThemeVars } from "./hooks.js";

// Secciones
import HeroSection from "./sections/Hero.jsx";
import CountdownSection from "./sections/Countdown.jsx";
import EventSection from "./sections/Event.jsx";
import CarouselSection from "./sections/Carousel.jsx";
import DressCodeSection from "./sections/DressCode.jsx";
import InstagramSection from "./sections/Instagram.jsx";
import GiftSection from "./sections/Gift.jsx";
import RSVPSection from "./sections/RSVP.jsx";

// Google Fonts para este template
const FONT_LINK_ID = "quince-fonts";
const FONT_HREF =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:wght@200;300;400;500;600&display=swap";

export default function Quince() {
    // Inyecta las CSS vars del tema en :root
    useThemeVars(config.theme);

    // Inyecta Google Fonts una sola vez
    useEffect(() => {
        if (!document.getElementById(FONT_LINK_ID)) {
            const link = document.createElement("link");
            link.id = FONT_LINK_ID;
            link.rel = "stylesheet";
            link.href = FONT_HREF;
            document.head.appendChild(link);
        }
    }, []);

    const { sections, girl, hero, countdown, event, carousel, dresscode, instagram, gift, rsvp, footer, images } = config;

    return (
        <div
            className="min-h-screen w-full overflow-x-hidden"
            style={{
                background: "var(--q-bg-base)",
                color: "var(--q-text-primary)",
                // Fuentes: display para títulos, sans para cuerpo
                fontFamily: "'DM Sans', system-ui, sans-serif",
                "--font-display": "'Cormorant Garamond', Georgia, serif",
            }}
        >
            {/*
        Tailwind no sabe de --font-display, entonces lo aplicamos
        con una clase custom. Definí esto en tu index.css o tailwind.config:

        @layer utilities {
          .font-display { font-family: var(--font-display); }
        }

        O agregá en tailwind.config.js:
        theme: { extend: { fontFamily: { display: ["var(--font-display)"] } } }
      */}

            {/* ── Secciones ─────────────────────────────── */}

            {sections.hero && (
                <HeroSection
                    girl={{ ...girl, subtitle: hero.subtitle }}
                    heroImage={images?.hero}
                />
            )}

            {sections.countdown && (
                <CountdownSection
                    countdown={countdown}
                    dateISO={girl.dateISO}
                />
            )}

            {sections.event && (
                <EventSection event={event} />
            )}

            {sections.carousel && (
                <CarouselSection carousel={carousel} />
            )}

            {sections.dresscode && (
                <DressCodeSection dresscode={dresscode} />
            )}

            {sections.instagram && (
                <InstagramSection instagram={instagram} />
            )}

            {sections.gift && (
                <GiftSection gift={gift} />
            )}

            {sections.rsvp && (
                <RSVPSection rsvp={rsvp} />
            )}

            {/* ── Footer ────────────────────────────────── */}
            <footer
                className="py-10 px-5 flex flex-col items-center gap-3"
                style={{
                    background: "var(--q-bg-base)",
                    borderTop: "1px solid var(--q-border)",
                }}
            >
                {/* Divisor dorado */}
                <div
                    className="w-16 h-px"
                    style={{
                        background: "linear-gradient(to right, transparent, var(--q-gold), transparent)",
                    }}
                />
                <p
                    className="text-xs tracking-[0.22em] uppercase text-center"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    {footer.text}
                </p>
                <p
                    className="text-xs text-center"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    {footer.love}
                </p>
            </footer>
        </div>
    );
}