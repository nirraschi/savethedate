// Models.jsx
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { FONT, fadeUp, T } from "./theme";

const MODELS = [
    { id: "Aurora",     num: "01", label: "Más elegida",     name: "Aurora",       desc: "Elegancia minimalista - Light experience" },
    { id: "Eclipse",   num: "02", label: "Más original",      name: "Eclipse",     desc: "Concepto cinemático - Dark experience" },
    { id: "romantica", num: "03", label: "Énfasis en fotos", name: "Romántica",   desc: "Diseño que destaca las fotografías de la pareja como protagonistas." },
    { id: "vintage",   num: "04", label: "Diseño único",     name: "Vintage",     desc: "Estética atemporal con iconografía especial y cuenta regresiva." },
    { id: "clasica",   num: "05", label: "Lo esencial",      name: "Clásica",     desc: "RSVP, galería de fotos y regalos. Simple, limpio y efectivo." },
    { id: "quince",    num: "06", label: "Fiesta de 15",     name: "Quince años", desc: "Todo para compartir los detalles de tu fiesta de 15 con el mundo." },
];

function Reveal({ children, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            variants={fadeUp(delay)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            {children}
        </motion.div>
    );
}

function ModelCard({ m, i }) {
    const [hov, setHov] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    const isQuince = m.id === "quince";

    return (
        <motion.div
            ref={ref}
            variants={fadeUp(i * 0.07)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            className="overflow-hidden rounded-2xl border bg-white cursor-pointer transition-shadow duration-300"
            style={{
                borderColor: hov ? "#D4D4D0" : "#ECECEA",
                boxShadow: hov ? "0 16px 40px rgba(0,0,0,0.06)" : "none",
            }}
        >
            {/* Preview area */}
            <motion.div
                animate={{ backgroundColor: hov ? "#F0EFEC" : "#FAFAF9" }}
                transition={{ duration: 0.3 }}
                className="relative flex h-36 flex-col items-center justify-center gap-1"
            >
                <span
                    className="absolute right-4 top-4 text-sm italic text-yellow-800/50"
                    style={{ fontFamily: FONT.serif }}
                >
                    {m.num}
                </span>

                <div className="h-px w-7 bg-[#DDDDD9]" />
                <span
                    className="text-base italic text-[#111111]"
                    style={{ fontFamily: FONT.serif }}
                >
                    {isQuince ? "Camila" : "Ana & Tomás"}
                </span>
                <span
                    className="text-[10px] tracking-[0.15em] text-[#A8A8A4]"
                    style={{ fontFamily: FONT.sans }}
                >
                    {isQuince ? "15 AÑOS · 2025" : "12 · ABRIL · 2025"}
                </span>
                <div className="h-px w-7 bg-[#DDDDD9]" />
            </motion.div>

            {/* Content */}
            <div className="px-5 pb-5 pt-4" style={{ fontFamily: FONT.sans }}>
                <span className="mb-2.5 inline-block rounded-full border border-[#ECECEA] bg-[#FAFAF9] px-2.5 py-0.5 text-[10px] font-medium tracking-[0.06em] text-[#A8A8A4]">
                    {m.label}
                </span>

                <p className="mb-1.5 text-[15px] font-semibold tracking-[-0.01em] text-[#111111]">
                    {m.name}
                </p>

                <p className="mb-4 text-xs font-light leading-relaxed text-[#6B6B68]">
                    {m.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-medium text-[#111111]">
                    Ver demo
                    <motion.span
                        animate={{ x: hov ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                    >
                        →
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}

export default function Models() {
    return (
        <section id="modelos" className="bg-[#FAFAF9] px-5 py-16 md:px-10 md:py-24">

            {/* Header */}
            <Reveal>
                <div className="mb-8 flex flex-col gap-2 md:mb-12 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A8A8A4]">
                            Colección
                        </p>
                        <h2 className="text-[30px] font-bold tracking-[-0.03em] text-[#111111] md:text-[38px]">
                            Elegí tu{" "}
                            <span
                                className="text-[32px] italic font-normal md:text-[40px]"
                                style={{ fontFamily: FONT.serif }}
                            >
                                modelo.
                            </span>
                        </h2>
                    </div>
                    <span className="text-sm text-[#A8A8A4]">6 modelos disponibles</span>
                </div>
            </Reveal>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3">
                {MODELS.map((m, i) => (
                    <ModelCard key={m.id} m={m} i={i} />
                ))}
            </div>

        </section>
    );
}