// ╔══════════════════════════════════════════════════════════╗
//  RSVP SECTION
//  Fondo sólido claro. Botón que abre Google Form.
//  Es la última sección antes del footer.
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, LightZoneButton, FADE_UP } from "../Components.jsx";

export default function RSVPSection({ rsvp }) {
    return (
        <section
            className="px-5 py-20 text-center"
            style={{ background: "var(--b-rsvp-bg)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col items-center gap-5">

                <motion.div {...FADE_UP}>
                    <Eyebrow>{rsvp.eyebrow}</Eyebrow>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.08 }}
                    className="font-display text-[28px] font-light leading-tight"
                    style={{ color: "var(--b-text-rsvp)" }}
                >
                    {rsvp.heading}{" "}
                    <em style={{ fontStyle: "italic", color: "var(--b-accent)" }}>
                        {rsvp.headingAccent}
                    </em>
                </motion.h2>

                {/* Línea */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.14 }}
                    className="w-8 h-px"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, var(--b-accent), transparent)",
                    }}
                />

                {/* Descripción */}
                <motion.p
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.2 }}
                    className="text-sm leading-relaxed max-w-[260px]"
                    style={{ color: "var(--b-text-muted)" }}
                >
                    {rsvp.description}
                </motion.p>

                {/* Botón */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.28 }}
                    className="w-full"
                >
                    <LightZoneButton href={rsvp.googleFormUrl}>
                        {rsvp.cta}
                    </LightZoneButton>
                </motion.div>

                {/* Nota */}
                {rsvp.note && (
                    <motion.p
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.35 }}
                        className="text-[11px] tracking-wide"
                        style={{ color: "var(--b-text-muted)" }}
                    >
                        ⏳ {rsvp.note}
                    </motion.p>
                )}
            </div>
        </section>
    );
}