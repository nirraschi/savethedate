// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, FONT, ease } from "./theme";

const NAV_LINKS = ["Invitaciones", "Modelos", "Blog"];

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );
    useEffect(() => {
        const fn = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    }, [breakpoint]);
    return isMobile;
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        const fn = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    position: "sticky", top: 0, zIndex: 100,
                    height: 58,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0 20px",
                    background: scrolled ? "rgba(250,250,249,0.92)" : T.bg,
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
                    transition: "all 0.35s ease",
                    fontFamily: FONT.sans,
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: T.ink, letterSpacing: "-0.02em" }}>
                        Save the
                    </span>
                    <span style={{ fontFamily: FONT.serif, fontStyle: "italic", fontSize: 17, color: T.ink, marginLeft: 4 }}>
                        Date
                    </span>
                    <span style={{ fontSize: 10, color: T.faint, marginLeft: 2, fontWeight: 300 }}>®</span>
                </div>

                {/* Desktop links */}
                {!isMobile && (
                    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                        {NAV_LINKS.map(l => (
                            <motion.a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                whileHover={{ color: T.ink }}
                                style={{ fontSize: 13, color: T.mid, textDecoration: "none", transition: "color 0.2s" }}
                            >
                                {l}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contacto"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                background: T.ink, color: "#FFF",
                                fontSize: 12, fontWeight: 500,
                                padding: "8px 20px", borderRadius: 999,
                                textDecoration: "none",
                            }}
                        >
                            Contactar
                        </motion.a>
                    </div>
                )}

                {/* Hamburger (mobile only) */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Abrir menú"
                        style={{
                            background: "none", border: "none",
                            cursor: "pointer", padding: 6,
                            display: "flex", flexDirection: "column",
                            gap: 5, justifyContent: "center",
                        }}
                    >
                        {[0, 1, 2].map(i => (
                            <motion.span
                                key={i}
                                animate={{
                                    rotate:  menuOpen && i === 0 ? 45  : menuOpen && i === 2 ? -45 : 0,
                                    y:       menuOpen && i === 0 ? 10  : menuOpen && i === 2 ? -10 : 0,
                                    opacity: menuOpen && i === 1 ? 0   : 1,
                                }}
                                transition={{ duration: 0.25, ease }}
                                style={{
                                    display: "block", width: 22, height: 1.5,
                                    background: T.ink, borderRadius: 2,
                                    transformOrigin: "center",
                                }}
                            />
                        ))}
                    </button>
                )}
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="drawer"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease }}
                        style={{
                            position: "fixed", top: 58, left: 0, right: 0, zIndex: 99,
                            background: "rgba(250,250,249,0.97)",
                            backdropFilter: "blur(16px)",
                            borderBottom: `1px solid ${T.border}`,
                            padding: "20px 24px 28px",
                            display: "flex", flexDirection: "column", gap: 4,
                            fontFamily: FONT.sans,
                        }}
                    >
                        {NAV_LINKS.map(l => (
                            <a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    fontSize: 17, color: T.mid, textDecoration: "none",
                                    padding: "10px 0",
                                    borderBottom: `1px solid ${T.border}`,
                                }}
                            >
                                {l}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setMenuOpen(false)}
                            style={{
                                marginTop: 12,
                                display: "inline-flex", justifyContent: "center",
                                background: T.ink, color: "#FFF",
                                fontSize: 13, fontWeight: 500,
                                padding: "11px 24px", borderRadius: 999,
                                textDecoration: "none",
                            }}
                        >
                            Contactar
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}