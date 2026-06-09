// ╔══════════════════════════════════════════════════════╗
//  INSTAGRAM SECTION
//  Fondo crema. Botón con gradiente real de Instagram.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, FADE_UP } from "../components.jsx";

export default function InstagramSection({ instagram }) {
    return (
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-cream)" }}
        >
            <div className="max-w-sm mx-auto flex flex-col items-center text-center gap-5">

                {/* Eyebrow */}
                <motion.div {...FADE_UP}>
                    <Eyebrow>{instagram.eyebrow}</Eyebrow>
                </motion.div>

                {/* Handle */}
                <motion.p
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.1 }}
                    className="font-display"
                    style={{
                        fontSize: "clamp(26px, 8vw, 34px)",
                        color: "var(--q-text-dark)",
                        letterSpacing: "-0.01em",
                    }}
                >
                    {instagram.handle}
                </motion.p>

                {/* Botón IG — gradiente oficial */}
                <motion.a
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.18 }}
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase text-white active:opacity-75 transition-opacity"
                    style={{
                        background:
                            "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    {instagram.cta}
                </motion.a>

                {/* Hashtag pill */}
                {instagram.hashtag && (
                    <motion.div
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.26 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span
                            className="px-5 py-2 rounded-full text-sm tracking-wide"
                            style={{
                                background: "var(--q-bg-white)",
                                border: "0.5px solid var(--q-border-accent)",
                                color: "var(--q-pink)",
                            }}
                        >
                            {instagram.hashtag}
                        </span>
                        {instagram.hashtagNote && (
                            <p
                                className="text-xs text-center max-w-[220px]"
                                style={{ color: "var(--q-text-muted)" }}
                            >
                                {instagram.hashtagNote}
                            </p>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}