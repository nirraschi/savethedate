// ╔══════════════════════════════════════════════════════════╗
//  EVENT SECTION — card flotante sobre foto fija
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import {
    Eyebrow, SectionHeading, Divider,
    FloatingCard, DarkZoneButton, FADE_UP,
} from "../Components.jsx";

function EventItem({ emoji, label, value, detail, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 + index * 0.09 }}
            className="flex items-start gap-4 py-4"
            style={{ borderBottom: "0.5px solid var(--b-border)" }}
        >
            <div
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl text-base"
                style={{
                    background: "var(--b-accent-dim)",
                    border: "0.5px solid var(--b-border-accent)",
                }}
            >
                {emoji}
            </div>
            <div className="flex flex-col">
                <span
                    className="text-[9px] tracking-[0.2em] uppercase mb-0.5"
                    style={{ color: "var(--b-text-muted)" }}
                >
                    {label}
                </span>
                <span
                    className="font-display text-[16px] font-light leading-snug"
                    style={{ color: "var(--b-text-card)" }}
                >
                    {value}
                </span>
                {detail && (
                    <span
                        className="mt-0.5 text-xs"
                        style={{ color: "var(--b-text-muted)" }}
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
        <div className="px-5 py-6">
            <div className="max-w-sm mx-auto">
                <FloatingCard>

                    <motion.div {...FADE_UP}>
                        <Eyebrow>{event.eyebrow}</Eyebrow>
                        <SectionHeading heading={event.heading} accent={event.headingAccent} />
                        <Divider />
                    </motion.div>

                    <div>
                        {event.items.map((item, i) => (
                            <EventItem key={item.label} {...item} index={i} />
                        ))}
                    </div>

                    <motion.div
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.42 }}
                        className="mt-6"
                    >
                        <DarkZoneButton href={event.mapUrl}>
                            📍 {event.mapLabel}
                        </DarkZoneButton>
                    </motion.div>

                </FloatingCard>
            </div>
        </div>
    );
}