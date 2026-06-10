// ╔══════════════════════════════════════════════════════╗
//  QUINCE — CarouselSection
//  Carrusel de fotos con swipe táctil (mobile-first).
//  Las imágenes se configuran en config.js → carousel.images
// ╚══════════════════════════════════════════════════════╝

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, GoldDivider } from "../Components.jsx";

// Variantes de animación del slide
const SLIDE_VARIANTS = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: ({ x: 0, opacity: 1 }),
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function CarouselSection({ carousel }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1); // 1=next, -1=prev

    // ── Touch swipe ─────────────────────────────────────
    const touchStartX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) {
            delta < 0 ? goNext() : goPrev();
        }
        touchStartX.current = null;
    };

    // ── Navegación ──────────────────────────────────────
    const goNext = () => {
        setDirection(1);
        setCurrent((c) => (c + 1) % carousel.images.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + carousel.images.length) % carousel.images.length);
    };

    const goTo = (i) => {
        setDirection(i > current ? 1 : -1);
        setCurrent(i);
    };

    const img = carousel.images[current];

    return (
        <section
            className="py-20 px-5"
            style={{ background: "var(--q-bg-accent)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col gap-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-4"
                >
                    <SectionHeading heading={carousel.heading} accent={carousel.headingAccent} />
                    <GoldDivider className="w-full" />
                </motion.div>

                {/* Frame del carrusel */}
                <div className="flex flex-col items-center gap-5">

                    {/* Imagen */}
                    <div
                        className="relative w-full overflow-hidden rounded-sm"
                        style={{
                            aspectRatio: "3/4",
                            border: "1px solid var(--q-border)",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Brillo de esquina decorativo */}
                        <div
                            className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none"
                            style={{
                                background: "linear-gradient(135deg, var(--q-gold-dim) 0%, transparent 70%)",
                            }}
                        />

                        <AnimatePresence custom={direction} initial={false}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={SLIDE_VARIANTS}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={img.src}
                                    alt={img.caption || `Foto ${current + 1}`}
                                    className="w-full h-full object-cover"
                                    style={{ filter: "brightness(0.92) saturate(0.9)" }}
                                />
                                {/* Overlay gradiente */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(13,13,20,0.7) 0%, transparent 40%)",
                                    }}
                                />
                                {/* Caption */}
                                {img.caption && (
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                        <span
                                            className="px-3 py-1 text-xs tracking-widest uppercase rounded-sm"
                                            style={{
                                                background: "rgba(13,13,20,0.7)",
                                                color: "var(--q-gold)",
                                                border: "1px solid var(--q-border)",
                                                backdropFilter: "blur(8px)",
                                            }}
                                        >
                                            {img.caption}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Flechas de navegación */}
                        <button
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all active:scale-90"
                            style={{
                                background: "rgba(13,13,20,0.7)",
                                border: "1px solid var(--q-border)",
                                color: "var(--q-gold)",
                                backdropFilter: "blur(8px)",
                            }}
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all active:scale-90"
                            style={{
                                background: "rgba(13,13,20,0.7)",
                                border: "1px solid var(--q-border)",
                                color: "var(--q-gold)",
                                backdropFilter: "blur(8px)",
                            }}
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={16} />
                        </button>

                        {/* Contador */}
                        <div
                            className="absolute top-3 right-3 z-20 px-2 py-0.5 text-[10px] tracking-wider rounded-sm"
                            style={{
                                background: "rgba(13,13,20,0.7)",
                                color: "var(--q-text-muted)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            {current + 1} / {carousel.images.length}
                        </div>
                    </div>

                    {/* Dots de navegación */}
                    <div className="flex items-center gap-2">
                        {carousel.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="transition-all duration-300 rounded-full"
                                style={{
                                    width: i === current ? "24px" : "6px",
                                    height: "6px",
                                    background: i === current ? "var(--q-gold)" : "var(--q-border)",
                                }}
                                aria-label={`Ir a foto ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}