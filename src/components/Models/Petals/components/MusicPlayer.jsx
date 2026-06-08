// Reproductor de música flotante en la esquina inferior derecha.
// Muestra el nombre de la canción y anima las barras cuando está reproduciendo.

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music } from "lucide-react";
import { config } from "../config.js";

// Barras animadas que simulan un ecualizador
function SoundBars({ playing }) {
  return (
    <div className="flex items-end gap-[2px]" style={{ height: 14 }}>
      {[0.4, 0.7, 1, 0.6, 0.85].map((h, i) => (
        <motion.div
          key={i}
          style={{
            width: 2,
            borderRadius: 1,
            background: "var(--accent)",
            height: playing ? `${h * 14}px` : "3px",
          }}
          animate={playing ? {
            height: [`${h * 14}px`, `${(1 - h * 0.5) * 14}px`, `${h * 14}px`],
          } : { height: "3px" }}
          transition={playing ? {
            duration: 0.6 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          } : { duration: 0.3 }}
        />
      ))}
    </div>
  );
}

export default function MusicPlayer() {
  const { url, songName, autoplay } = config.music;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  // Crea el elemento audio una sola vez
  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audioRef.current = audio;

    if (autoplay) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }

    // Muestra el nombre de la canción al inicio por 3 segundos
    setShowLabel(true);
    const t = setTimeout(() => setShowLabel(false), 3500);

    return () => {
      clearTimeout(t);
      audio.pause();
      audio.src = "";
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }

  return (
    <div
      className="fixed z-50 flex items-center gap-3"
      style={{ bottom: 24, right: 20 }}
    >
      {/* Etiqueta con el nombre de la canción */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            style={{
              background: "var(--bg-dark)",
              color: "var(--text-light)",
              fontSize: "10px",
              letterSpacing: "1.5px",
              padding: "6px 12px",
              borderRadius: "2px",
              whiteSpace: "nowrap",
              opacity: 0.9,
            }}
          >
            ♪ {songName}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón circular */}
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.92 }}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--bg-dark)",
          border: "1px solid var(--accent)",
          color: "var(--text-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
      >
        {playing ? (
          <SoundBars playing={true} />
        ) : (
          <Music size={16} color="var(--accent)" />
        )}
      </motion.button>
    </div>
  );
}
