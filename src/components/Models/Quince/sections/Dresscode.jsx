// ╔══════════════════════════════════════════════════════╗
//  QUINCE — DressCodeSection
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Icon, SectionHeading, GoldDivider, GlassCard } from "../Components.jsx";

function DressItem({ icon, title, detail, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
        >
            <GlassCard className="flex flex-col items-center gap-3 p-5 text-center">
                <div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ background: "var(--q-pink-dim)", color: "var(--q-pink)" }}
                >
                    <Icon name={icon} size={16} />
                </div>
                <span
                    className="font-display text-sm font-bold"
                    style={{ color: "var(--q-text-primary)" }}
                >
                    {title}
                </span>
                <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--q-text-secondary)" }}
                >
                    {detail}
                </span>
            </GlassCard>
        </motion.div>
    );
}

export default function DressCodeSection({ dresscode }) {
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
                    {/* Decorativo */}
                    <div
                        className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase"
                        style={{ color: "var(--q-pink)" }}
                    >
                        <span>✦</span>
                        <span>La noche pide</span>
                        <span>✦</span>
                    </div>

                    <SectionHeading heading={dresscode.heading} accent={dresscode.headingAccent} />
                    <GoldDivider className="w-full" />

                    <p
                        className="text-sm text-center leading-relaxed max-w-xs"
                        style={{ color: "var(--q-text-secondary)" }}
                    >
                        {dresscode.description}
                    </p>
                </motion.div>

                {/* Ítems en grilla */}
                <div className="grid grid-cols-3 gap-3">
                    {dresscode.items.map((item, i) => (
                        <DressItem key={item.title} {...item} index={i} />
                    ))}
                </div>

                {/* Nota */}
                {dresscode.note && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div
                            className="px-5 py-3 rounded-sm text-xs text-center tracking-wide"
                            style={{
                                background: "var(--q-gold-dim)",
                                border: "1px solid var(--q-border)",
                                color: "var(--q-gold)",
                            }}
                        >
                            {dresscode.note}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}