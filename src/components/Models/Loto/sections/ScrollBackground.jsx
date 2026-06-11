// ╔══════════════════════════════════════════════════════════╗
//  SCROLL BACKGROUND
//
//  Solución cross-browser para fondo fijo en mobile:
//
//  background-attachment: fixed → NO funciona en iOS Safari
//  position: fixed en div hijo  → NO funciona si hay un
//    ancestro con transform/overflow/will-change
//
//  Solución: createPortal() monta el div fijo DIRECTAMENTE
//  en document.body, sin ningún ancestro que lo rompa.
//  Funciona en iOS Safari, Android Chrome y desktop.
// ╚══════════════════════════════════════════════════════════╝

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function FixedBackground({ backgroundImage }) {
    return createPortal(
        <div
            aria-hidden
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                // Sin pointer-events para no bloquear clicks en el contenido
                pointerEvents: "none",
            }}
        >
            {backgroundImage ? (
                <img
                    src={backgroundImage}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        filter: "brightness(0.38) saturate(0.65)",
                        // Sin transform ni will-change — evita crear
                        // un nuevo stacking context que rompa el fixed
                        display: "block",
                    }}
                />
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "var(--b-scroll-bg)",
                    }}
                />
            )}

            {/* Overlay de color del tema */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--b-photo-overlay)",
                }}
            />
        </div>,
        document.body   // ← montado directo en body, sin ancestros problemáticos
    );
}

export default function ScrollBackground({ backgroundImage }) {
    // Esperamos que el DOM esté listo antes de usar createPortal
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return <FixedBackground backgroundImage={backgroundImage} />;
}