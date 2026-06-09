// ╔══════════════════════════════════════════════════════╗
//  QUINCE — RSVPSection
//  Confirmación de asistencia → abre Google Form.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import { SectionHeading, GoldDivider, GoldButton } from "../components.jsx";

export default function RSVPSection({ rsvp }) {
    return (
        <section
            className="py-20 px-5"
            style={{ background: "var(--q-bg-accent)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col items-center gap-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-4 w-full"
                >
                    <SectionHeading heading={rsvp.heading} accent={rsvp.headingAccent} />
                    <GoldDivider className="w-full" />
                </motion.div>

                {/* Card de RSVP */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex flex-col items-center gap-7 p-8 rounded-sm"
                    style={{
                        background: `linear-gradient(135deg, var(--q-bg-card) 0%, rgba(201,168,76,0.04) 100%)`,
                        border: "1px solid var(--q-border)",
                    }}
                >
                    {/* Corazón animado */}
                    <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center justify-center w-14 h-14 rounded-full"
                        style={{
                            background: "var(--q-pink-dim)",
                            border: "1px solid var(--q-border)",
                        }}
                    >
                        <Heart size={24} style={{ color: "var(--q-pink)" }} fill="var(--q-pink)" />
                    </motion.div>

                    {/* Descripción */}
                    <p
                        className="text-sm text-center leading-relaxed"
                        style={{ color: "var(--q-text-secondary)" }}
                    >
                        {rsvp.description}
                    </p>

                    {/* Botón principal */}
                    <GoldButton href={rsvp.googleFormUrl} className="w-full max-w-xs">
                        <ExternalLink size={14} />
                        {rsvp.cta}
                    </GoldButton>

                    {/* Nota de fecha límite */}
                    {rsvp.note && (
                        <p
                            className="text-[11px] text-center tracking-wide"
                            style={{ color: "var(--q-text-muted)" }}
                        >
                            ⏳ {rsvp.note}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}