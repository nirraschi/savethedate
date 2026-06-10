// ╔══════════════════════════════════════════════════════╗
//  EVENT SECTION
//  Lista de ítems con emoji + botón de Google Maps.
//  Fondo blanco.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, DarkButton, FADE_UP } from "../Components.jsx";

function EventItem({ emoji, label, value, detail, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 + index * 0.09 }}
            className="flex items-start gap-4 py-4"
            style={{ borderBottom: "0.5px solid var(--q-border)" }}
        >
            {/* Emoji icon */}
            <div
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl text-lg"
                style={{
                    background: "var(--q-bg-cream)",
                    border: "0.5px solid var(--q-border-accent)",
                }}
            >
                {emoji}
            </div>

            {/* Texto */}
            <div className="flex flex-col">
                <span
                    className="text-[10px] tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: "var(--q-text-muted)" }}
                >
                    {label}
                </span>
                <span
                    className="font-display text-[17px] leading-snug"
                    style={{ color: "var(--q-text-dark)" }}
                >
                    {value}
                </span>
                {detail && (
                    <span
                        className="mt-0.5 text-xs"
                        style={{ color: "var(--q-text-muted)" }}
                    >
                        {detail}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export default function EventSection({ event }) {
    return (
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-white)" }}
        >
            <div className="max-w-sm mx-auto">

                {/* Heading */}
                <motion.div {...FADE_UP}>
                    <Eyebrow>{event.eyebrow}</Eyebrow>
                    <SectionHeading heading={event.heading} accent={event.headingAccent} />
                    <Divider />
                </motion.div>

                {/* Ítems */}
                <div>
                    {event.items.map((item, i) => (
                        <EventItem key={item.label} {...item} index={i} />
                    ))}
                </div>

                {/* Botón Maps */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.45 }}
                    className="mt-8"
                >
                    <DarkButton href={event.mapUrl}>
                        📍 {event.mapLabel}
                    </DarkButton>
                </motion.div>
            </div>
        </section>
    );
}