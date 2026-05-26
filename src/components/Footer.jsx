
const T = {
    bg: "#FAFAF9",
    surface: "#FFFFFF",
    border: "#ECECEA",
    ink: "#111111",
    mid: "#6B6B68",
    faint: "#A8A8A4",
    muted: "#DDDDD9",
    accent: "#C9A96E",   // camel dorado — solo para detalles
    accentBg: "#F5F0E8",
};

const FONT = {
    sans: `'Inter', system-ui, sans-serif`,
    serif: `'DM Serif Display', Georgia, serif`,
};

function Divider({ margin = "0 40px" }) {
    return <div style={{ height: 1, background: T.border, margin }} />;
}

export default function Footer() {
    return (
        <>
            <Divider margin="0 40px" />
            <footer style={{
                background: T.surface, padding: "28px 40px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontFamily: FONT.sans,
            }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>Save the</span>
                    <span style={{ fontFamily: FONT.serif, fontStyle: "italic", fontSize: 15, color: T.ink, marginLeft: 3 }}>Date</span>
                    <span style={{ fontSize: 10, color: T.faint, marginLeft: 2 }}>®</span>
                </div>
                <span style={{ fontSize: 12, color: T.faint, fontWeight: 300 }}>
                    © 2026 · Argentina · Todos los derechos reservados
                </span>
            </footer>
        </>
    );
}