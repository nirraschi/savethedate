// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, FONT, ease } from "./theme";

const NAV_LINKS = ["Invitaciones", "Modelos"];

// Hook para detectar si estamos en mobile
function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== "undefined" && window.innerWidth < breakpoint
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    // Detectar scroll para cambiar fondo
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú al pasar a desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* ── Barra de navegación principal ── */}
            <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    fontFamily: FONT.sans,
                    background: scrolled ? "rgba(250,250,249,0.92)" : T.bg,
                    borderBottomColor: scrolled ? T.border : "transparent",
                }}
                className={`
                    sticky top-0 z-50
                    h-[58px] flex items-center justify-between
                    px-5
                    border-b transition-all duration-300
                    ${scrolled ? "backdrop-blur-md" : ""}
                `}
            >
                {/* Logo */}
                <div className="flex items-baseline gap-0.5">
                    <span
                        style={{ color: T.ink }}
                        className="text-[15px] font-bold tracking-tight"
                    >
                        Save the
                    </span>
                    <span
                        style={{ fontFamily: FONT.serif, color: T.ink }}
                        className="italic text-[17px] ml-1"
                    >
                        Date
                    </span>
                    <span
                        style={{ color: T.faint }}
                        className="text-[10px] font-light ml-0.5"
                    >
                        ®
                    </span>
                </div>

                {/* Links — solo en desktop */}
                {!isMobile && (
                    <div className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                whileHover={{ color: T.ink }}
                                style={{ color: T.mid }}
                                className="text-[13px] no-underline transition-colors duration-200"
                            >
                                {link}
                            </motion.a>
                        ))}

                        {/* Botón CTA */}
                        <motion.a
                            href="#contacto"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ background: T.ink }}
                            className="text-white text-xs font-medium px-5 py-2 rounded-full no-underline"
                        >
                            Contactar
                        </motion.a>
                    </div>
                )}

                {/* Botón hamburguesa — solo en mobile */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Abrir menú"
                        className="flex flex-col justify-center gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
                    >
                        {/* Tres líneas que se animan al abrir/cerrar */}
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    rotate:  menuOpen && i === 0 ? 45  : menuOpen && i === 2 ? -45 : 0,
                                    y:       menuOpen && i === 0 ? 10  : menuOpen && i === 2 ? -10 : 0,
                                    opacity: menuOpen && i === 1 ? 0   : 1,
                                }}
                                transition={{ duration: 0.25, ease }}
                                style={{ background: T.ink }}
                                className="block w-[22px] h-[1.5px] rounded-sm origin-center"
                            />
                        ))}
                    </button>
                )}
            </motion.nav>

            {/* ── Menú desplegable mobile ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="drawer"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease }}
                        style={{
                            fontFamily: FONT.sans,
                            background: "rgba(250,250,249,0.97)",
                            borderBottomColor: T.border,
                        }}
                        className="fixed top-[58px] left-0 right-0 z-40 backdrop-blur-xl border-b flex flex-col gap-1 px-6 pt-5 pb-7"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                style={{ color: T.mid, borderBottomColor: T.border }}
                                className="text-[17px] no-underline py-2.5 border-b"
                            >
                                {link}
                            </a>
                        ))}

                        {/* Botón CTA mobile */}
                        <a
                            href="#contacto"
                            onClick={() => setMenuOpen(false)}
                            style={{ background: T.ink }}
                            className="mt-3 inline-flex justify-center text-white text-[13px] font-medium px-6 py-[11px] rounded-full no-underline"
                        >
                            Contactar
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}