// Marquee.jsx
import { motion } from "framer-motion";
import { T, FONT } from "./Theme.js"; 

const STRIP_ITEMS = [
    "RSVP Online", "GPS", "Lista de regalos", "Álbum de fotos",
    "Instagram Wall", "Playlist", "Dress Code", "Cuenta regresiva",
    "Multi idioma", "Música de fondo",
];

export default function Marquee() {
    const items = [...STRIP_ITEMS, ...STRIP_ITEMS];
    return (
        <div style={{
            background: T.ink, padding: "14px 0",
            overflow: "hidden", display: "flex",
        }}>
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{ display: "flex", gap: 0, whiteSpace: "nowrap", flexShrink: 0 }}
            >
                {items.map((item, i) => (
                    <span key={i} style={{
                        fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.55)",
                        fontFamily: FONT.sans, letterSpacing: "0.12em",
                        padding: "0 28px",
                        display: "inline-flex", alignItems: "center", gap: 28,
                    }}>
                        {item}
                        <span style={{
                            width: 3, height: 3, borderRadius: "50%",
                            background: T.accent, display: "inline-block",
                        }} />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}