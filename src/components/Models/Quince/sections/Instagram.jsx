// ╔══════════════════════════════════════════════════════╗
//  QUINCE — InstagramSection
//  Muestra el Instagram de la cumpleañera + hashtag.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { SectionHeading, GoldDivider, PinkButton } from "../components.jsx";

export default function InstagramSection({ instagram }) {
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
                    <SectionHeading heading={instagram.heading} accent={instagram.headingAccent} />
                    <GoldDivider className="w-full" />
                </motion.div>

                {/* Card de Instagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex flex-col items-center gap-6 p-8 rounded-sm"
                    style={{
                        background: `linear-gradient(135deg, var(--q-bg-card) 0%, rgba(232,160,180,0.05) 100%)`,
                        border: "1px solid var(--q-border)",
                    }}
                >
                    {/* Ícono de Instagram con gradiente */}
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                            boxShadow: "0 8px 24px rgba(220,39,67,0.3)",
                        }}
                    >
                        <Camera size={28} color="white" />
                    </div>

                    {/* Handle */}
                    <div className="flex flex-col items-center gap-1">
                        <span
                            className="font-display text-2xl font-bold"
                            style={{ color: "var(--q-text-primary)" }}
                        >
                            {instagram.handle}
                        </span>
                        <span
                            className="text-xs tracking-wider"
                            style={{ color: "var(--q-text-muted)" }}
                        >
                            Instagram
                        </span>
                    </div>

                    {/* Botón */}
                    <PinkButton href={instagram.url}>
                        <Camera size={14} />
                        {instagram.cta}
                    </PinkButton>
                </motion.div>

                {/* Hashtag */}
                {instagram.hashtag && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="w-full flex flex-col items-center gap-3 p-5 rounded-sm text-center"
                        style={{
                            background: "var(--q-gold-dim)",
                            border: "1px solid var(--q-border)",
                        }}
                    >
                        <span
                            className="font-display text-xl font-bold tracking-wide"
                            style={{ color: "var(--q-gold)" }}
                        >
                            {instagram.hashtag}
                        </span>
                        <span
                            className="text-xs leading-relaxed max-w-[220px]"
                            style={{ color: "var(--q-text-secondary)" }}
                        >
                            {instagram.hashtagNote}
                        </span>
                    </motion.div>
                )}
            </div>
        </section>
    );
}