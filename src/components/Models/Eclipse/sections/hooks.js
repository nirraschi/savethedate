// ═══════════════════════════════════════════════
//  ECLIPSE WEDDING — HOOKS
// ═══════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";

/* ── Scroll reveal ─────────────────────────── */
export function useEclipseReveal() {
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
            { threshold: 0.08 }
        );
        document.querySelectorAll(".ec-reveal").forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

/* ── Countdown ─────────────────────────────── */
export function useCountdown(target) {
    const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
    useEffect(() => {
        const tick = () => {
            const diff = new Date(target) - new Date();
            if (diff <= 0) return;
            setT({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [target]);
    return t;
}

/* ── Parallax ──────────────────────────────── */
export function useParallax(ref, speed = 0.2) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const fn = () => {
            const r = el.getBoundingClientRect();
            const offset = (window.innerHeight / 2 - r.top - r.height / 2) * speed;
            el.style.transform = `translateY(${offset}px) scale(1.1)`;
        };
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, [ref, speed]);
}