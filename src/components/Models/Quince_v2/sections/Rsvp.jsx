// ╔══════════════════════════════════════════════════════╗
//  RSVP SECTION
//  Fondo oscuro. Botón gradiente que abre Google Form.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, GradientButton, FADE_UP } from "../Components.jsx";

export default function RSVPSection({ rsvp }) {
    return (
        <section
            className="px-5 py-20 text-center"
            style={{ background: "var(--q-bg-dark)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col items-center gap-6">

                {/* Eyebrow */}
                <motion.div {...FADE_UP}>
                    <Eyebrow dark>{rsvp.eyebrow}</Eyebrow>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.08 }}
                    className="font-display text-[28px] font-normal leading-tight"
                    style={{ color: "var(--q-text-light)" }}
                >
                    {rsvp.heading}{" "}
                    <em
                        className="not-italic"
                        style={{ fontStyle: "italic", color: "var(--q-pink)" }}
                    >
                        {rsvp.headingAccent}
                    </em>
                </motion.h2>

                {/* Línea decorativa */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.14 }}
                    className="w-10 h-px"
                    style={{
                        background: "linear-gradient(to right, transparent, var(--q-gold), transparent)",
                    }}
                />

                {/* Descripción */}
                <motion.p
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.2 }}
                    className="text-sm leading-relaxed max-w-[260px]"
                    style={{ color: "var(--q-text-muted-dark)" }}
                >
                    {rsvp.description}
                </motion.p>

                {/* Botón */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.28 }}
                >
                    <GradientButton href={rsvp.googleFormUrl}>
                        {rsvp.cta}
                    </GradientButton>
                </motion.div>

                {/* Nota */}
                {rsvp.note && (
                    <motion.p
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.35 }}
                        className="text-[11px] tracking-wide"
                        style={{ color: "var(--q-text-muted-dark)" }}
                    >
                        ⏳ {rsvp.note}
                    </motion.p>
                )}
            </div>
        </section>
    );
}