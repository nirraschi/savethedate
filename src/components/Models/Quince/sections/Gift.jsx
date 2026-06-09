// ╔══════════════════════════════════════════════════════╗
//  QUINCE — GiftSection
//  Sección de regalo por transferencia.
//  Botón que copia el alias al portapapeles.
// ╚══════════════════════════════════════════════════════╝

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift } from "lucide-react";
import { SectionHeading, GoldDivider, GlassCard } from "../components.jsx";

export default function GiftSection({ gift }) {
    const [copied, setCopied] = useState(false);

    const copyAlias = async () => {
        try {
            await navigator.clipboard.writeText(gift.alias);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // fallback para Safari/iOS
            const el = document.createElement("textarea");
            el.value = gift.alias;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    return (
        <section
            className="py-20 px-5"
            style={{ background: "var(--q-bg-base)" }}
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
                    <SectionHeading heading={gift.heading} accent={gift.headingAccent} />
                    <GoldDivider className="w-full" />
                    <p
                        className="text-sm text-center leading-relaxed"
                        style={{ color: "var(--q-text-secondary)" }}
                    >
                        {gift.description}
                    </p>
                </motion.div>

                {/* Card de transferencia */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full"
                >
                    <GlassCard className="p-6 flex flex-col gap-5">

                        {/* Ícono */}
                        <div className="flex items-center gap-3">
                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-sm flex-shrink-0"
                                style={{ background: "var(--q-gold-dim)", color: "var(--q-gold)" }}
                            >
                                <Gift size={18} />
                            </div>
                            <span
                                className="text-xs tracking-widest uppercase"
                                style={{ color: "var(--q-text-muted)" }}
                            >
                                Transferencia bancaria
                            </span>
                        </div>

                        {/* Banco */}
                        <div className="flex flex-col gap-1">
                            <span
                                className="text-[10px] tracking-[0.2em] uppercase"
                                style={{ color: "var(--q-text-muted)" }}
                            >
                                Banco
                            </span>
                            <span
                                className="text-sm font-medium"
                                style={{ color: "var(--q-text-primary)" }}
                            >
                                {gift.bank}
                            </span>
                        </div>

                        {/* Alias — el que se copia */}
                        <div className="flex flex-col gap-2">
                            <span
                                className="text-[10px] tracking-[0.2em] uppercase"
                                style={{ color: "var(--q-text-muted)" }}
                            >
                                Alias
                            </span>
                            <div
                                className="flex items-center justify-between gap-3 px-4 py-3 rounded-sm"
                                style={{
                                    background: "var(--q-bg-accent)",
                                    border: "1px solid var(--q-border-hi)",
                                }}
                            >
                                <span
                                    className="font-display text-lg font-bold tracking-wide"
                                    style={{ color: "var(--q-gold)" }}
                                >
                                    {gift.alias}
                                </span>
                                {/* Botón copiar */}
                                <motion.button
                                    onClick={copyAlias}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-sm text-xs font-medium tracking-wide transition-all duration-300"
                                    style={{
                                        background: copied ? "rgba(100,200,120,0.15)" : "var(--q-gold-dim)",
                                        border: `1px solid ${copied ? "rgba(100,200,120,0.4)" : "var(--q-border-hi)"}`,
                                        color: copied ? "rgb(100,200,120)" : "var(--q-gold)",
                                    }}
                                >
                                    {copied ? <Check size={13} /> : <Copy size={13} />}
                                    <span>{copied ? gift.successMessage : gift.cta}</span>
                                </motion.button>
                            </div>
                        </div>

                        {/* CBU truncado (informativo) */}
                        {gift.cbu && (
                            <div className="flex flex-col gap-1">
                                <span
                                    className="text-[10px] tracking-[0.2em] uppercase"
                                    style={{ color: "var(--q-text-muted)" }}
                                >
                                    CBU
                                </span>
                                <span
                                    className="text-xs font-mono tracking-wider"
                                    style={{ color: "var(--q-text-secondary)" }}
                                >
                                    {gift.cbu.slice(0, 8)}···{gift.cbu.slice(-4)}
                                </span>
                            </div>
                        )}
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}