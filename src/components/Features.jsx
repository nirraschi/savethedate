// Features.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
    T,
    FONT,
    fadeUp,
    containerVariants,
    childVariant,
} from "./theme";

const FEATURES = [
    {
        n: "01",
        name: "RSVP Online",
        desc: "Confirmación en tiempo real, sin formularios externos.",
    },
    {
        n: "02",
        name: "GPS integrado",
        desc: "Un tap y tus invitados llegan sin complicaciones.",
    },
    {
        n: "03",
        name: "Lista de regalos",
        desc: "Transferencia o link de regalo, todo centralizado.",
    },
    {
        n: "04",
        name: "Álbum de fotos",
        desc: "Galería personalizada con su historia.",
    },
    {
        n: "05",
        name: "Instagram Wall",
        desc: "El feed oficial de la boda embebido.",
    },
    {
        n: "06",
        name: "Playlist",
        desc: "Tus invitados sugieren canciones para el evento.",
    },
    {
        n: "07",
        name: "Dress Code",
        desc: "Guía de vestimenta clara para cada invitado.",
    },
    {
        n: "08",
        name: "Cuenta regresiva",
        desc: "Contador animado que genera expectativa.",
    },
    {
        n: "09",
        name: "Multi idioma",
        desc: "Para invitados de todo el mundo.",
    },
    {
        n: "10",
        name: "Música de fondo",
        desc: "La canción favorita, al abrir la invitación.",
    },
    {
        n: "11",
        name: "Info útil",
        desc: "Hospedajes, traslados, todo el contexto.",
    },
    {
        n: "12",
        name: "Agendar",
        desc: "Un click para guardar en Google o Apple.",
    },
];

function Reveal({ children, delay = 0 }) {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-60px",
    });

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

function SectionLabel({ children }) {
    return (
        <div
            className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{
                color: T.faint,
                fontFamily: FONT.sans,
            }}
        >
            {children}
        </div>
    );
}

function FeatureCard({ feature }) {
    return (
        <motion.div
            variants={childVariant}
            whileHover={{ y: -2 }}
            className="group p-5 transition-colors duration-300"
            style={{
                background: T.surface,
            }}
        >
            <div
                className="mb-3 text-xs italic"
                style={{
                    color: T.accent,
                    fontFamily: FONT.serif,
                }}
            >
                {feature.n}
            </div>

            <h3
                className="mb-2 text-[13px] font-medium"
                style={{
                    color: T.ink,
                    fontFamily: FONT.sans,
                }}
            >
                {feature.name}
            </h3>

            <p
                className="text-xs leading-[1.7] font-light"
                style={{
                    color: T.mid,
                    fontFamily: FONT.sans,
                }}
            >
                {feature.desc}
            </p>
        </motion.div>
    );
}

export default function Features() {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-60px",
    });

    return (
        <section
            id="invitaciones"
            style={{
                background: T.surface,
            }}
        >
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">

                {/* HEADER */}
                <Reveal>
                    <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                        <div>
                            <SectionLabel>
                                Funcionalidades
                            </SectionLabel>

                            <h2
                                className="leading-[1.1] tracking-[-0.03em]"
                                style={{
                                    color: T.ink,
                                    fontFamily: FONT.sans,
                                }}
                            >
                                <span className="text-[32px] font-bold md:text-[42px]">
                                    Todo en{" "}
                                </span>

                                <span
                                    className="text-[34px] italic font-normal md:text-[44px]"
                                    style={{
                                        fontFamily: FONT.serif,
                                    }}
                                >
                                    un solo link.
                                </span>
                            </h2>
                        </div>

                        <p
                            className="max-w-[300px] text-sm leading-7 md:text-right"
                            style={{
                                color: T.mid,
                                fontFamily: FONT.sans,
                            }}
                        >
                            Cada invitación viene con las herramientas
                            que hacen tu evento memorable.
                        </p>
                    </div>
                </Reveal>

                {/* GRID */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid overflow-hidden rounded-2xl border md:grid-cols-4"
                    style={{
                        borderColor: T.border,
                    }}
                >
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.n}
                            className="
                border-b
                md:border-r
              "
                            style={{
                                borderColor: T.border,
                            }}
                        >
                            <FeatureCard feature={feature} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}