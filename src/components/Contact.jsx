// Contact.jsx
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { T, FONT, fadeUp } from "./theme";

// ─── Shared primitives ───────────────────────────────────────────────────────

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

function SectionLabel({ children }) {
    return (
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#A8A8A4] mb-3">
            {children}
        </p>
    );
}

// ─── Input style — kept inline because it depends on JS focus state ──────────
const inputStyle = (isFocused) => ({
    width: "100%",
    background: T.bg,
    border: `1px solid ${isFocused ? T.ink : T.border}`,
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 14,
    color: T.ink,
    outline: "none",
    fontFamily: FONT.sans,
    fontWeight: 300,
    transition: "border-color 0.2s",
    boxSizing: "border-box",
});

// ─── Contact info list ────────────────────────────────────────────────────────
const INFO_ITEMS = [
    { label: "Teléfono", val: "+549 381 4643636" },
    { label: "Email", val: "savethedate_arg@gmail.com" },
    { label: "Ubicación", val: "Argentina" },
];

const SOCIAL_LINKS = [
    ["Instagram", "https://www.instagram.com/agendalafecha/"],
    ["Facebook", "https://www.facebook.com/agendalafecha/"],
];

const FORM_FIELDS = [
    { n: "nombre", l: "Nombre", t: "text", p: "Tu nombre completo" },
    { n: "email", l: "Email", t: "email", p: "tu@email.com" },
    { n: "fecha", l: "Fecha del evento", t: "text", p: "Ej: 15 de marzo de 2025" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContactInfo() {
    return (
        <Reveal>
            <SectionLabel>Contacto</SectionLabel>

            {/* Heading */}
            <h2 className="font-bold text-[#111111] leading-tight tracking-[-0.03em] mb-4
                text-[30px] md:text-[38px]">
                Hablemos sobre{" "}
                <span
                    className="font-normal italic text-[32px] md:text-[40px]"
                    style={{ fontFamily: FONT.serif }}
                >
                    tu evento.
                </span>
            </h2>

            {/* Body */}
            <p className="text-[14px] text-[#6B6B68] leading-relaxed font-light mb-10">
                Trabajamos desde Argentina y Uruguay para todo el mundo. Escribinos
                para recibir asesoramiento personalizado y sin compromiso.
            </p>

            {/* Info items */}
            <div className="flex flex-col gap-5 mb-8">
                {INFO_ITEMS.map(({ label, val }) => (
                    <div key={label}>
                        <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#A8A8A4] mb-1">
                            {label}
                        </p>
                        <p className="text-[14px] text-[#6B6B68] font-light">{val}</p>
                    </div>
                ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 mt-8">
                {SOCIAL_LINKS.map(([name, href]) => (
                    <motion.a
                        key={name}
                        whileHover={{ borderColor: T.ink }}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-normal text-[#111111] border border-[#ECECEA]
                    rounded-full px-[18px] py-2 no-underline transition-colors duration-200"
                    >
                        {name}
                    </motion.a>
                ))}
            </div>
        </Reveal>
    );
}

function SuccessState() {
    return (
        <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-14 text-center"
        >
            <p
                className="text-[40px] italic mb-3 text-[#C9A96E]"
                style={{ fontFamily: FONT.serif }}
            >
                ✓
            </p>
            <p className="text-[16px] font-semibold text-[#111111] mb-1">
                Mensaje enviado
            </p>
            <p className="text-[13px] text-[#6B6B68] font-light">
                Te respondemos a la brevedad.
            </p>
        </motion.div>
    );
}

function ContactForm({ form, focused, onChange, onFocus, onBlur, onSubmit }) {
    return (
        <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p className="text-[14px] font-medium text-[#111111] mb-6">
                Envianos una consulta
            </p>

            <div className="flex flex-col gap-[14px]">
                {/* Text fields */}
                {FORM_FIELDS.map((f) => (
                    <div key={f.n}>
                        <label className="block text-[10px] font-medium tracking-[0.1em] uppercase
                            text-[#A8A8A4] mb-[6px]">
                            {f.l}
                        </label>
                        <input
                            type={f.t}
                            name={f.n}
                            placeholder={f.p}
                            value={form[f.n]}
                            onChange={onChange}
                            onFocus={() => onFocus(f.n)}
                            onBlur={() => onBlur(f.n)}
                            style={inputStyle(focused[f.n])}
                        />
                    </div>
                ))}
                {/* Textarea */}
                <div>
                    <label className="block text-[10px] font-medium tracking-[0.1em] uppercase
                            text-[#A8A8A4] mb-[6px]">
                        Mensaje
                    </label>
                    <textarea
                        name="mensaje"
                        placeholder="Contanos sobre tu evento..."
                        value={form.mensaje}
                        onChange={onChange}
                        rows={4}
                        onFocus={() => onFocus("mensaje")}
                        onBlur={() => onBlur("mensaje")}
                        style={{ ...inputStyle(focused.mensaje), resize: "none" }}
                    />
                </div>

                {/* Submit */}
                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onSubmit}
                    className="w-full bg-[#111111] text-white text-[13px] font-medium
                    py-[13px] rounded-[10px] border-none cursor-pointer
                    transition-colors duration-200 hover:bg-[#2a2a28]"
                    style={{ fontFamily: FONT.sans }}
                >
                    Enviar consulta
                </motion.button>
            </div>
        </motion.div>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Contact() {
    const [form, setForm] = useState({ nombre: "", email: "", fecha: "", mensaje: "" });
    const [sent, setSent] = useState(false);
    const [focused, setFocused] = useState({});

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const handleFocus = (name) =>
        setFocused((prev) => ({ ...prev, [name]: true }));
    const handleBlur = (name) =>
        setFocused((prev) => ({ ...prev, [name]: false }));

    return (
        <section id="contacto" className="bg-white">
            <div className="px-5 py-16 md:px-10 md:py-24">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-20 md:items-start">
                    {/* Left — info */}
                    <ContactInfo />
                    {/* Right — form card */}
                    <Reveal delay={0.1}>
                        <div className="bg-[#FAFAF9] rounded-2xl border border-[#ECECEA] p-7">
                            <AnimatePresence mode="wait">
                                {sent ? (
                                    <SuccessState key="ok" />
                                ) : (
                                    <ContactForm
                                        key="form"
                                        form={form}
                                        focused={focused}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onSubmit={() => setSent(true)}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}