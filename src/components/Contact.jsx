// Contact.jsx
// Requiere: framer-motion, tailwindcss
// Fuentes: Syne + DM Serif Display (igual que el resto del sitio)

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
});

// ─── Config — editá solo esto ─────────────────────────────────────────────────
const WHATSAPP_NUMBER = "5493814643636"; // sin + ni espacios
const WHATSAPP_MSG    = encodeURIComponent("Hola! Me interesa saber más sobre las invitaciones digitales.");
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const INFO = [
    { label: "Teléfono",   value: "+549 381 464 3636" },
    { label: "Email",      value: "savethedate_arg@gmail.com" },
    { label: "Ubicación",  value: "Argentina · Todo el mundo" },
];

const SOCIALS = [
    { name: "Instagram", href: "https://www.instagram.com/agendalafecha/" },
    { name: "Facebook",  href: "https://www.facebook.com/agendalafecha/" },
];

// ─── Reveal ───────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            variants={fadeUp(delay)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            {children}
        </motion.div>
    );
}

// ─── WhatsApp icon ────────────────────────────────────────────────────────────
function IconWhatsApp({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Contact() {
    return (
        <section id="contacto" className="bg-[#111111] px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-5xl">

                {/* Top label */}
                <Reveal>
                    <p
                        className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Contacto
                    </p>
                </Reveal>

                {/* Main block: headline + CTA + info */}
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

                    {/* Left — headline */}
                    <Reveal delay={0.05} className="md:max-w-lg">
                        <h2
                            className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[46px]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Hablemos sobre{" "}
                            <em
                                className="font-normal text-[34px] text-white/70 md:text-[48px]"
                                style={{
                                    fontFamily: "'DM Serif Display', Georgia, serif",
                                    fontStyle: "italic",
                                }}
                            >
                                tu evento.
                            </em>
                        </h2>

                        <p
                            className="mt-5 text-[14px] font-light leading-relaxed text-white/40"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Trabajamos desde Argentina para todo el mundo.
                            Escribinos para recibir asesoramiento personalizado, sin compromiso.
                        </p>

                        {/* WhatsApp CTA */}
                        <motion.a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-[14px] font-bold text-white no-underline shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#1ebe5a] hover:shadow-[#25D366]/30"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            <IconWhatsApp size={20} />
                            Consultar por WhatsApp
                        </motion.a>
                    </Reveal>

                    {/* Right — info + socials */}
                    <Reveal delay={0.15} className="flex flex-col gap-6 md:items-end">

                        {/* Info items */}
                        <div className="flex flex-col gap-4 md:items-end">
                            {INFO.map(({ label, value }) => (
                                <div key={label} className="md:text-right">
                                    <p
                                        className="mb-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        {label}
                                    </p>
                                    <p
                                        className="text-[13px] font-light text-white/60"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/10 md:w-40" />

                        {/* Social links */}
                        <div className="flex gap-2">
                            {SOCIALS.map(({ name, href }) => (
                                <motion.a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ borderColor: "rgba(255,255,255,0.4)" }}
                                    className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium text-white/50 no-underline transition-colors duration-200 hover:text-white/80"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    {name}
                                </motion.a>
                            ))}
                        </div>

                    </Reveal>
                </div>



            </div>
        </section>
    );
}