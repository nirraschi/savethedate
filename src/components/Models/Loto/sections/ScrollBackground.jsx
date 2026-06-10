// ╔══════════════════════════════════════════════════════════╗
//  SCROLL BACKGROUND
//
//  La foto se inyecta directo en document.body como fondo CSS.
//  Es la única forma 100% confiable en iOS Safari — evita
//  todos los bugs de position:fixed dentro de contenedores
//  con overflow, transform o will-change.
//
//  El Hero y el RSVP tapan el fondo con su propio bg sólido.
//  Las secciones del medio tienen fondo transparente
//  → se ve la foto a través de ellas.
// ╚══════════════════════════════════════════════════════════╝

import { useEffect } from "react";

export default function ScrollBackground({ backgroundImage }) {
    useEffect(() => {
        const prev = {
            bg: document.body.style.background,
            bgColor: document.body.style.backgroundColor,
            bgSize: document.body.style.backgroundSize,
            bgPos: document.body.style.backgroundPosition,
            bgAttach: document.body.style.backgroundAttachment,
            bgRepeat: document.body.style.backgroundRepeat,
        };

        if (backgroundImage) {
            // Foto fija en el body — funciona en todos los browsers
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundRepeat = "no-repeat";
        } else {
            // Sin foto → color sólido del tema
            document.body.style.background = "var(--b-scroll-bg)";
        }

        // Limpia al desmontar (cuando se cambia de ruta)
        return () => {
            document.body.style.background = prev.bg;
            document.body.style.backgroundColor = prev.bgColor;
            document.body.style.backgroundSize = prev.bgSize;
            document.body.style.backgroundPosition = prev.bgPos;
            document.body.style.backgroundAttachment = prev.bgAttach;
            document.body.style.backgroundRepeat = prev.bgRepeat;
            document.body.style.backgroundImage = "";
        };
    }, [backgroundImage]);

    // No renderiza nada — solo efecto en el body
    return null;
}