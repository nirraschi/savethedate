// ╔══════════════════════════════════════════════════════╗
//  QUINCE — EventSection
//  Info del evento: fecha, hora, lugar, música.
//  Botón que abre Google Maps.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Icon, SectionHeading, GoldDivider, GoldButton, GlassCard } from "../Components.jsx";

// Ítem individual de la lista de evento
function EventItem({ icon, label, value, detail, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <GlassCard className="flex items-center gap-4 p-4">
                {/* Icono */}
                <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-sm"
                    style={{ background: "var(--q-gold-dim)", color: "var(--q-gold)" }}
                >
                    <Icon name={icon} size={16} />
                </div>

                {/* Texto */}
                <div className="flex flex-col min-w-0">
                    <span
                        className="text-[9px] tracking-[0.22em] uppercase mb-0.5"
                        style={{ color: "var(--q-text-muted)" }}
                    >
                        {label}
                    </span>
                    <span
                        className="font-display text-base font-bold leading-tight"
                        style={{ color: "var(--q-text-primary)" }}
                    >
                        {value}
                    </span>
                    {detail && (
                        <span
                            className="text-xs mt-0.5"
                            style={{ color: "var(--q-text-secondary)" }}
                        >
                            {detail}
                        </span>
                    )}
                </div>
            </GlassCard>
        </motion.div>
    );
}

export default function EventSection({ event }) {
    return (
        <section
            className="py-20 px-5"
            style={{ background: "var(--q-bg-base)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col gap-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-4"
                >
                    {/* Ícono decorativo */}
                    <div
                        className="flex items-center justify-center w-12 h-12 rounded-full"
                        style={{
                            background: "var(--q-gold-dim)",
                            border: "1px solid var(--q-border)",
                        }}
                    >
                        <span style={{ color: "var(--q-gold)", fontSize: "20px" }}>✦</span>
                    </div>

                    <SectionHeading heading={event.heading} accent={event.headingAccent} />
                    <GoldDivider className="w-full" />
                </motion.div>

                {/* Lista de ítems */}
                <div className="flex flex-col gap-3">
                    {event.items.map((item, i) => (
                        <EventItem key={item.label} {...item} index={i} />
                    ))}
                </div>

                {/* Botón Google Maps */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <GoldButton href={event.mapUrl}>
                        <Icon name="map-pin" size={14} />
                        {event.mapLabel}
                    </GoldButton>
                </motion.div>
            </div>
        </section>
    );
}