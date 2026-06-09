// ╔══════════════════════════════════════════════════════╗
//  GIFT SECTION
//  Transferencia bancaria con botón copiar alias.
//  Fallback para Safari / iOS donde clipboard API puede fallar.
//  Fondo blanco.
// ╚══════════════════════════════════════════════════════╝

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, FADE_UP } from "../components.jsx";

export default function GiftSection({ gift }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(gift.alias);
        } catch {
            // fallback iOS / Safari
            const el = document.createElement("textarea");
            el.value = gift.alias;
            el.style.position = "fixed";
            el.style.opacity = "0";
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
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-white)" }}
        >
            <div className="max-w-sm mx-auto">

                {/* Heading */}
                <motion.div {...FADE_UP} className="mb-8">
                    <Eyebrow>{gift.eyebrow}</Eyebrow>
                    <SectionHeading heading={gift.heading} accent={gift.headingAccent} />
                    <Divider />
                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--q-text-muted)" }}
                    >
                        {gift.description}
                    </p>
                </motion.div>

                {/* Card de transferencia — fondo oscuro */}
                <motion.div
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.15 }}
                    className="rounded-2xl p-5 flex flex-col gap-4"
                    style={{ background: "var(--q-bg-dark)" }}
                >
                    {/* Banco */}
                    <div className="flex items-center justify-between">
                        <span
                            className="text-[10px] tracking-[0.2em] uppercase"
                            style={{ color: "var(--q-text-muted-dark)" }}
                        >
                            {gift.bank}
                        </span>
                        <span className="text-base">🏦</span>
                    </div>

                    {/* Separador */}
                    <div
                        className="w-full h-px"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                    />

                    {/* Alias + botón copiar */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col">
                            <span
                                className="text-[10px] tracking-[0.18em] uppercase mb-1"
                                style={{ color: "var(--q-text-muted-dark)" }}
                            >
                                Alias
                            </span>
                            <span
                                className="font-display text-xl"
                                style={{ color: "var(--q-gold)" }}
                            >
                                {gift.alias}
                            </span>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.93 }}
                            onClick={handleCopy}
                            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[10px] font-semibold tracking-wide uppercase transition-all duration-300"
                            style={{
                                background: copied
                                    ? "rgba(120,200,120,0.15)"
                                    : "rgba(255,255,255,0.08)",
                                border: `0.5px solid ${copied ? "rgba(120,200,120,0.4)" : "rgba(255,255,255,0.12)"}`,
                                color: copied ? "rgb(120,200,120)" : "var(--q-text-light)",
                            }}
                        >
                            {copied ? "✓" : "⎘"} {copied ? gift.copiedLabel : gift.copyLabel}
                        </motion.button>
                    </div>

                    {/* CBU truncado (informativo) */}
                    {gift.cbu && (
                        <p
                            className="text-[10px] font-mono tracking-wider"
                            style={{ color: "var(--q-text-muted-dark)" }}
                        >
                            CBU {gift.cbu.slice(0, 8)}···{gift.cbu.slice(-4)}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}