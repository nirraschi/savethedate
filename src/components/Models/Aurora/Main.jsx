// ============================================================
//  App.jsx — Raíz de la aplicación
//
//  Para agregar o quitar secciones:
//    → Comentá o borrá la línea del import y del JSX.
//  Para reordenar secciones:
//    → Mové los componentes en el <main>.
// ============================================================

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Secciones — cada una vive en su propio archivo
import Intro from "./sections/Intro";
import Hero from "./sections/Hero";
import Quote from "./sections/Quote";
import Countdown from "./sections/Countdown";
import History from "./sections/History";
import Gallery from "./sections/Gallery";
import Ceremony from "./sections/Ceremony";
import DressCode from "./sections/DressCode";
import RSVP from "./sections/RSVP";
import Final from "./sections/Final";

import { CONFIG } from "./config";

export default function App() {
    const [entered, setEntered] = useState(false);

    return (
        // Fuentes: cargadas vía index.html o index.css
        <div className="bg-[#f9f5ef]">

            {/* Pantalla inicial — desaparece al hacer click */}
            <AnimatePresence>
                {!entered && <Intro onEnter={() => setEntered(true)} />}
            </AnimatePresence>

            {/* Contenido principal — aparece después del intro */}
            <main
                className="transition-opacity duration-1000"
                style={{ opacity: entered ? 1 : 0 }}
            >
                <Hero />
                <Quote />
                <Countdown />
                <History />
                <Gallery />
                <Ceremony />
                <DressCode />
                <RSVP />
                <Final />

                {/* Footer mínimo */}
                <footer
                    className="py-10 text-center border-t"
                    style={{ background: "#1a1612", borderColor: "rgba(255,255,255,0.06)" }}
                >
                    <p className="font-sans text-[10px] tracking-[0.18em] text-[#8a8178] uppercase">
                        {CONFIG.names.full} · {CONFIG.event.dateShort}
                    </p>
                </footer>
            </main>

        </div>
    );
}
