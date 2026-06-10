// ╔══════════════════════════════════════════════════════════╗
//  GIFT SECTION — card flotante sobre foto fija
//  Botón copiar alias con fallback para iOS/Safari.
// ╚══════════════════════════════════════════════════════════╝

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, FloatingCard, FADE_UP } from "../components.jsx";

export default function GiftSection({ gift }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(gift.alias);
        } catch {
            // Fallback iOS / Safari
            const el = document.createElement("textarea");
            el.value = gift.alias;
            el.style.cssText = "position:fixed;opacity:0;";
            document.body.appendChild(el);
            el.focus();
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="px-5 py-6">
            <div className="max-w-sm mx-auto">
                <FloatingCard>

                    <motion.div {...FADE_UP} className="mb-5">
                        <Eyebrow>{gift.eyebrow}</Eyebrow>
                        <SectionHeading heading={gift.heading} accent={gift.headingAccent} />
                        <Divider />
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--b-text-muted)" }}
                        >
                            {gift.description}
                        </p>
                    </motion.div>

                    {/* Caja de transferencia */}
                    <motion.div
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.15 }}
                        className="rounded-xl p-4 flex flex-col gap-3"
                        style={{
                            background: "var(--b-accent-dim)",
                            border: "0.5px solid var(--b-border-accent)",
                        }}
                    >
                        {/* Banco */}
                        <div className="flex items-center justify-between">
                            <span
                                className="text-[10px] tracking-[0.2em] uppercase"
                                style={{ color: "var(--b-text-muted)" }}
                            >
                                {gift.bank}
                            </span>
                            <span className="text-sm">🏦</span>
                        </div>

                        <div
                            className="w-full h-px"
                            style={{ background: "var(--b-border)" }}
                        />

                        {/* Alias + copiar */}
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex flex-col">
                                <span
                                    className="text-[9px] tracking-[0.2em] uppercase mb-0.5"
                                    style={{ color: "var(--b-text-muted)" }}
                                >
                                    Alias
                                </span>
                                <span
                                    className="font-display text-[18px] font-light"
                                    style={{ color: "var(--b-text-card)" }}
                                >
                                    {gift.alias}
                                </span>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.92 }}
                                onClick={handleCopy}
                                className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[10px] font-medium tracking-wide uppercase transition-all duration-300"
                                style={{
                                    background: copied ? "rgba(100,180,120,0.15)" : "var(--b-btn-dark-bg)",
                                    color: copied ? "rgb(80,160,100)" : "var(--b-btn-dark-text)",
                                    border: `0.5px solid ${copied ? "rgba(100,180,120,0.4)" : "transparent"}`,
                                }}
                            >
                                {copied ? "✓" : "⎘"} {copied ? gift.copiedLabel : gift.copyLabel}
                            </motion.button>
                        </div>

                        {/* CBU truncado */}
                        {gift.cbu && (
                            <span
                                className="text-[10px] font-mono tracking-wider"
                                style={{ color: "var(--b-text-muted)" }}
                            >
                                CBU {gift.cbu.slice(0, 8)}···{gift.cbu.slice(-4)}
                            </span>
                        )}
                    </motion.div>

                </FloatingCard>
            </div>
        </div>
    );
}