// CTABand.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, FONT, fadeUp } from "./theme";

function Reveal({ children, delay = 0, style = {} }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} style={style} variants={fadeUp(delay)} initial="hidden" animate={inView ? "show" : "hidden"}>
            {children}
        </motion.div>
    );
}

function SectionLabel({ children }) {
    return (
        <div style={{
            fontSize: 10, fontWeight: 500, letterSpacing: "0.2em",
            textTransform: "uppercase", color: T.faint,
            fontFamily: FONT.sans, marginBottom: 12,
        }}>
            {children}
        </div>
    );
}

export default function CTABand() {
    return (
        <section style={{ background: T.surface }}>
            <style>{`
                .cta-section { padding: 0 20px 64px; }
                .cta-inner {
                    background: ${T.ink};
                    border-radius: 20px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .cta-left { padding: 40px 32px; }
                .cta-right {
                    background: #191917;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 32px;
                }
                .cta-h2 { font-size: 26px; }
                .cta-h2-accent { font-size: 28px; }
                .cta-grid { grid-template-columns: repeat(3, 1fr) !important; max-width: 220px; }

                @media (min-width: 768px) {
                    .cta-section { padding: 0 40px 96px; }
                    .cta-inner { flex-direction: row; }
                    .cta-inner > * { flex: 1; }
                    .cta-left { padding: 64px; }
                    .cta-right { padding: 48px; }
                    .cta-h2 { font-size: 34px; }
                    .cta-h2-accent { font-size: 36px; }
                    .cta-grid { max-width: 260px; }
                }
            `}</style>

            <div className="cta-section">
                <Reveal>
                    <div className="cta-inner">
                        <div className="cta-left" style={{ fontFamily: FONT.sans }}>
                            <SectionLabel>
                                <span style={{ color: "rgba(255,255,255,0.35)" }}>Diseño a medida</span>
                            </SectionLabel>
                            <h2 style={{
                                fontWeight: 700, color: "#FFF",
                                letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 16px",
                            }}>
                                <span className="cta-h2" style={{ display: "inline" }}>Más de 80 portadas para </span>
                                <span className="cta-h2-accent" style={{
                                    fontFamily: FONT.serif, fontStyle: "italic", fontWeight: 400,
                                }}>
                                    personalizar.
                                </span>
                            </h2>
                            <p style={{
                                fontSize: 14, color: "rgba(255,255,255,0.5)",
                                lineHeight: 1.8, margin: "0 0 36px", fontWeight: 300,
                            }}>
                                Elegís el modelo. Nosotros lo diseñamos con tu portada, colores, textos e imágenes. Cada invitación es única.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.95)" }}
                                whileTap={{ scale: 0.97 }}
                                href="https://wa.me/+5493518115010/?text=Hola!%20Quiero%20info%20sobre%20invitaciones%20digitales"
                                target="_blank" rel="noreferrer"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    background: "#FFF", color: T.ink,
                                    fontSize: 13, fontWeight: 500,
                                    padding: "12px 28px", borderRadius: 999,
                                    textDecoration: "none", fontFamily: FONT.sans,
                                }}
                            >
                                Hablar por WhatsApp <span>→</span>
                            </motion.a>
                        </div>

                        <div className="cta-right">
                            <div className="cta-grid" style={{
                                display: "grid", gap: 8, width: "100%",
                            }}>
                                {[
                                    { shade: "#222220" }, { shade: "#1E1E2A" }, { shade: "#241E1E" },
                                    { shade: "#1E2420" }, { shade: "#22201E" }, { shade: "#201E24" },
                                ].map((c, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.04 }}
                                        style={{
                                            aspectRatio: "3/4", background: c.shade,
                                            borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)",
                                            display: "flex", flexDirection: "column",
                                            justifyContent: "flex-end", padding: 8,
                                        }}
                                    >
                                        <div style={{
                                            fontFamily: FONT.serif, fontStyle: "italic",
                                            fontSize: 8, color: "rgba(255,255,255,0.2)",
                                        }}>
                                            0{i + 1}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}