// Hero.jsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FONT, ease, containerVariants, childVariant } from "./theme";

// ── Reemplazá estos imports con tus imágenes reales ──────────────────────────
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/image-4.png";

// ── Portadas del mosaico ─────────────────────────────────────────────────────
// Para usar colores: { image: null, fallbackBg: "#2C2820" }
// Para usar imagen: { image: Image1, fallbackBg: "#2C2820" }
const COVERS = [
    { image: Image1, fallbackBg: "#2C2820", label: "Save the Date", labelColor: "text-white/80",  col: "col-span-1", row: "row-span-2" },
    { image: Image4, fallbackBg: "#E8E0D5", label: "Sofía & Martín",   labelColor: "text-[#6B6B68]", col: "col-span-2", row: "row-span-1" },
    { image: Image3, fallbackBg: "#1E2824", label: "A & T",         labelColor: "text-white/50",  col: "col-span-1", row: "row-span-1" },
    { image: Image2, fallbackBg: "#F5EDE0", label: "A & T",         labelColor: "text-[#8a7060]", col: "col-span-1", row: "row-span-1" },
];

// ─────────────────────────────────────────────────────────────────────────────

function Tag({ children }) {
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full bg-[#F5F0E8] px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-[#C9A96E]"
            style={{ fontFamily: FONT.sans }}
        >
            <span className="h-1 w-1 rounded-full bg-[#C9A96E]" />
            {children}
        </span>
    );
}

function Counter({ target = 847 }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / 1600, 1);
            setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target]);

    return <span ref={ref}>{val.toLocaleString()}</span>;
}

function CoverTile({ cover }) {
    const hasImage = Boolean(cover.image);
    return (
        <div
            className={`
                ${cover.col} ${cover.row}
                relative flex flex-col justify-end overflow-hidden rounded-2xl p-4
            `}
            style={!hasImage ? { background: cover.fallbackBg } : undefined}
        >
            {hasImage && (
                <img
                    src={cover.image}
                    alt={cover.label}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            {/* Degradé para que el texto sea legible sobre la imagen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span
                className={`relative text-xs italic leading-snug ${cover.labelColor}`}
                style={{ fontFamily: FONT.serif }}
            >
                {cover.label}
            </span>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="overflow-hidden bg-[#FAFAF9]" style={{ fontFamily: FONT.sans }}>
            <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-8 md:px-12 lg:px-16">

                {/* ── LEFT ── */}
                <motion.div variants={containerVariants} initial="hidden" animate="show">

                    <motion.div variants={childVariant} className="mb-7">
                        <Tag>Invitaciones digitales</Tag>
                    </motion.div>

                    <motion.h1
                        variants={childVariant}
                        className="mb-6 leading-[1.05] tracking-[-0.04em]"
                    >
                        <span className="block text-5xl font-bold text-[#111111] lg:text-6xl">
                            La invitación
                        </span>
                        <span className="block text-5xl font-light text-[#6B6B68] lg:text-6xl">
                            que tus invitados
                        </span>
                        <span
                            className="block text-[50px] italic text-[#111111] lg:text-[64px]"
                            style={{ fontFamily: FONT.serif }}
                        >
                            nunca olvidarán.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={childVariant}
                        className="mb-10 max-w-sm text-[15px] leading-8 text-[#6B6B68]"
                    >
Creamos invitaciones digitales elegantes, modernas y personalizadas para anunciar uno de los días más importantes de sus vidas.                    </motion.p>

                    <motion.div variants={childVariant} className="mb-12 flex flex-wrap gap-3">
                        <button
                            className="rounded-full bg-[#111111] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                            onClick={() => document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Ver diseños
                        </button>
                        <button
                            className="rounded-full border border-[#ECECEA] px-7 py-3 text-sm text-[#111111] transition hover:border-[#111111]"
                            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Consultar
                        </button>
                    </motion.div>

                    <motion.div variants={childVariant} className="flex flex-wrap items-center gap-6">
                        {[
                            { n: <><Counter target={847} />+</>, l: "bodas creadas" },
                            { n: "6",   l: "modelos" },
                            { n: "80+", l: "portadas" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6">
                                {i !== 0 && <div className="h-7 w-px bg-[#ECECEA]" />}
                                <div>
                                    <div className="text-2xl font-bold tracking-tight text-[#111111]">
                                        {item.n}
                                    </div>
                                    <div className="mt-1 text-[11px] text-[#A8A8A4]">
                                        {item.l}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>

                {/* ── RIGHT: mosaico de portadas ── */}
                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease }}
                        className="grid w-full max-w-sm gap-3"
                        style={{
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gridTemplateRows: "200px 200px",
                        }}
                    >
                        {COVERS.map((cover, i) => (
                            <CoverTile key={i} cover={cover} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}