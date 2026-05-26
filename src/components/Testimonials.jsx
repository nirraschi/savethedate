// Testimonials.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, FONT, fadeUp } from "./theme";

const TESTIMONIALS = [
    { quote: "Fue lo primero que comentaron todos nuestros invitados. La experiencia fue increíble.", author: "Valentina & Marcos", location: "Buenos Aires, 2024" },
    { quote: "Súper fácil de usar. En dos días teníamos todos los RSVP confirmados desde el link.", author: "Lucía & Sebastián", location: "Montevideo, 2024" },
    { quote: "El diseño es muy elegante. Nos encantó que podíamos incluir nuestra foto favorita.", author: "Carla & Tomás", location: "Córdoba, 2024" },
];

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

export default function Testimonials() {
    return (
        <section style={{ background: T.bg }}>
            <style>{`
                .testimonials-section { padding: 64px 20px; }
                .testimonials-h2 { font-size: 30px; }
                .testimonials-h2-accent { font-size: 32px; }
                .testimonials-grid { grid-template-columns: 1fr !important; }

                @media (min-width: 600px) {
                    .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (min-width: 768px) {
                    .testimonials-section { padding: 96px 40px; }
                    .testimonials-h2 { font-size: 38px; }
                    .testimonials-h2-accent { font-size: 40px; }
                    .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
            `}</style>

            <div className="testimonials-section">
                <Reveal style={{ marginBottom: 40 }}>
                    <SectionLabel>Testimonios</SectionLabel>
                    <h2 style={{
                        fontFamily: FONT.sans, fontWeight: 700,
                        color: T.ink, letterSpacing: "-0.03em", margin: 0,
                    }}>
                        <span className="testimonials-h2" style={{ display: "inline" }}>Lo que dicen </span>
                        <span className="testimonials-h2-accent" style={{
                            fontFamily: FONT.serif, fontStyle: "italic", fontWeight: 400,
                        }}>
                            las parejas.
                        </span>
                    </h2>
                </Reveal>

                <div className="testimonials-grid" style={{ display: "grid", gap: 12 }}>
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div style={{
                                background: T.surface, borderRadius: 16,
                                border: `1px solid ${T.border}`,
                                padding: "28px 28px 24px",
                                display: "flex", flexDirection: "column", gap: 20,
                                height: "100%", boxSizing: "border-box",
                            }}>
                                <div style={{ width: 28, height: 1, background: T.accent }} />
                                <p style={{
                                    fontFamily: FONT.serif, fontStyle: "italic",
                                    fontSize: 17, color: T.ink, lineHeight: 1.6, margin: 0,
                                }}>
                                    "{t.quote}"
                                </p>
                                <div>
                                    <div style={{ fontFamily: FONT.sans, fontSize: 12, fontWeight: 500, color: T.ink }}>
                                        {t.author}
                                    </div>
                                    <div style={{ fontFamily: FONT.sans, fontSize: 11, color: T.faint, marginTop: 2 }}>
                                        {t.location}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}