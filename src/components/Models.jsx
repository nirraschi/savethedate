// Models.jsx
// Requiere: framer-motion, tailwindcss
// Fuentes (agregar en index.html o CSS global):
//   https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Syne:wght@400;600;700;800&display=swap

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ─── Tokens ──────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
});

// ─── Data ────────────────────────────────────────────────────────────────────
// `image`: reemplazá con la ruta real de tu mockup, ej: "/images/aurora.jpg"
// `demoUrl`: ruta de React Router o href, ej: "/demo/aurora"
// `bgClass`: clase Tailwind para el fondo del área de imagen (cuando no hay foto)
const MODELS = [
    {
        id: "aurora",
        num: "01",
        label: "Más elegida",
        name: "Aurora",
        desc: "Elegancia minimalista con paleta clara y tipografía aérea. Para eventos de día o de noche. La elección más popular.",
        image: null,
        bgClass: "bg-[#E2DDD6]",
        demoUrl: "/demo/aurora",
        featured: true,
    },
    {
        id: "eclipse",
        num: "02",
        label: "Más original",
        name: "Eclipse",
        desc: "Concepto cinemático oscuro y dramático. Con impacto visual, ideal para fiestas de noche.",
        image: null,
        bgClass: "bg-[#1E1E24]",
        demoUrl: "/demo/eclipse",
        featured: true,
    },
    {
        id: "petals",
        num: "03",
        label: "Romantica",
        name: "Petals",
        desc: "Con muchas flores y estilo delicado y romántico.",
        image: null,
        bgClass: "bg-[#EAE0D8]",
        demoUrl: "/demo/romantica",
        featured: false,
    },
    {
        id: "vintage",
        num: "04",
        label: "Diseño único",
        name: "Vintage",
        desc: "Estética atemporal con cuenta regresiva.",
        image: null,
        bgClass: "bg-[#EAE2CC]",
        demoUrl: "/demo/vintage",
        featured: false,
    },
    {
        id: "clasica",
        num: "05",
        label: "Lo esencial",
        name: "Clásica",
        desc: "RSVP, galería y regalos. Simple y efectivo.",
        image: null,
        bgClass: "bg-[#D8E8DC]",
        demoUrl: "/demo/clasica",
        featured: false,
    },
    {
        id: "quince",
        num: "06",
        label: "Fiesta de 15",
        name: "Quince años",
        desc: "Todo para tu fiesta de 15 en un solo link.",
        image: null,
        bgClass: "bg-[#E6D8EC]",
        demoUrl: "/demo/quince",
        featured: false,
    },
];

// ─── PhoneMockup ─────────────────────────────────────────────────────────────
// Placeholder SVG de celular. Reemplazalo con <img src={image} /> cuando tengas los mockups reales.
function PhoneMockup({ dark = false }) {
    const line = dark ? "#3A3A48" : "#D0CCC8";
    const block = dark ? "#252530" : "#EAE6E1";
    const btn   = dark ? "rgba(255,255,255,0.1)" : "#1A1A1A";
    const fill  = dark ? "#1C1C22" : "rgba(255,255,255,0.92)";
    const stroke= dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";

    return (
        <svg width="80" height="152" viewBox="0 0 80 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="77" height="149" rx="13" fill={fill} stroke={stroke} strokeWidth="1"/>
            <rect x="10" y="16" width="60" height="5" rx="2.5" fill={line}/>
            <rect x="18" y="26" width="44" height="3.5" rx="1.75" fill={block}/>
            <rect x="10" y="36" width="60" height="38" rx="6" fill={block}/>
            <rect x="10" y="82" width="60" height="2.5" rx="1.25" fill={line}/>
            <rect x="10" y="89" width="48" height="2.5" rx="1.25" fill={line}/>
            <rect x="10" y="96" width="52" height="2.5" rx="1.25" fill={line}/>
            <rect x="20" y="108" width="40" height="14" rx="7" fill={btn}/>
            <rect x="27" y="132" width="26" height="2.5" rx="1.25" fill={line}/>
        </svg>
    );
}

// ─── Reveal ───────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} variants={fadeUp(delay)} initial="hidden" animate={inView ? "show" : "hidden"}>
            {children}
        </motion.div>
    );
}

// ─── ModelCard ────────────────────────────────────────────────────────────────
function ModelCard({ m, index, featured }) {
    const [hov, setHov] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    const imageHeight = featured
        ? "h-60 sm:h-64"
        : "h-40";

    const numSize = featured ? "text-8xl" : "text-6xl";

    return (
        <motion.a
            ref={ref}
            href={m.demoUrl}
            variants={fadeUp(index * 0.06)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#EBEBEA] bg-white no-underline transition-all duration-300"
            style={{
                borderColor: hov ? "#C8C8C5" : "#EBEBEA",
                boxShadow: hov
                    ? "0 16px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)"
                    : "0 1px 3px rgba(0,0,0,0.03)",
                transform: hov ? "translateY(-3px)" : "translateY(0)",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            {/* Image / mockup area */}
            <div className={`relative flex items-center justify-center overflow-hidden ${imageHeight} ${m.bgClass}`}>

                {m.image ? (
                    <motion.img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        animate={{ scale: hov ? 1.06 : 1 }}
                        transition={{ duration: 0.55, ease }}
                        className="h-full w-full object-cover object-top"
                    />
                ) : (
                    <motion.div
                        animate={{ scale: hov ? 1.06 : 1, y: hov ? -4 : 0 }}
                        transition={{ duration: 0.55, ease }}
                    >
                        <PhoneMockup dark={m.id === "eclipse"} />
                    </motion.div>
                )}

                {/* Gradient overlay */}
                <motion.div
                    animate={{ opacity: hov ? 0.7 : 0.4 }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                />

                {/* Number watermark */}
                <span
                    className={`pointer-events-none absolute bottom-0 right-3 select-none font-bold leading-none text-white/15 ${numSize}`}
                    style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
                >
                    {m.num}
                </span>

                {/* Label badge */}
                <span
                    className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-[#1A1A1A] backdrop-blur-sm"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {m.label}
                </span>
            </div>

            {/* Card body */}
            <div
                className="flex flex-1 flex-col px-5 pb-5 pt-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                <p className={`mb-1 font-bold tracking-tight text-[#111111] ${featured ? "text-[15px]" : "text-[13px]"}`}>
                    {m.name}
                </p>

                {featured && (
                    <p className="mb-4 flex-1 text-[11px] font-normal leading-relaxed text-[#6B6B68]">
                        {m.desc}
                    </p>
                )}

                <div className={`flex items-center gap-1.5 font-semibold uppercase tracking-widest text-[#111111] ${featured ? "mt-auto text-[10px]" : "mt-2 text-[10px]"}`}>
                    Ver demo
                    <motion.span
                        animate={{ x: hov ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                    >
                        →
                    </motion.span>
                </div>
            </div>
        </motion.a>
    );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Models() {
    const featured = MODELS.filter((m) => m.featured);
    const rest     = MODELS.filter((m) => !m.featured);

    return (
        <section id="modelos" className="bg-[#F8F7F5] px-5 py-16 md:px-10 md:py-24">

            {/* Header */}
            <Reveal>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-3 md:mb-14">
                    <div>
                        <p
                            className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A8A8A4]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Colección 2026
                        </p>
                        <h2
                            className="text-[30px] font-extrabold leading-tight tracking-[-0.03em] text-[#111111] md:text-[38px]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Elegí tu{" "}
                            <em
                                className="text-[32px] font-normal not-italic md:text-[40px]"
                                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
                            >
                                modelo.
                            </em>
                        </h2>
                    </div>
                    <span
                        className="text-sm text-[#A8A8A4]"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        6 modelos disponibles. 
                        Totalmente editables.
                    </span>
                    
                </div>
            </Reveal>

            {/* Featured row — 2 cards grandes */}
            <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featured.map((m, i) => (
                    <ModelCard key={m.id} m={m} index={i} featured />
                ))}
            </div>

            {/* Secondary grid — 4 cards pequeñas */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {rest.map((m, i) => (
                    <ModelCard key={m.id} m={m} index={i + 2} featured={false} />
                ))}
            </div>

        </section>
    );
}