// ╔══════════════════════════════════════════════════════╗
//  DRESS CODE SECTION
//  Cards en grilla 2 columnas. Última card opcional full-width.
//  Fondo blanco.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, FADE_UP } from "../Components.jsx";

function DressCard({ emoji, title, detail, fullWidth, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 + index * 0.1 }}
            className={`flex flex-col items-center text-center p-5 rounded-2xl ${fullWidth ? "col-span-2" : ""}`}
            style={{
                background: "var(--q-bg-cream)",
                border: "0.5px solid var(--q-border)",
            }}
        >
            <span className="text-2xl mb-3">{emoji}</span>
            <span
                className="font-semibold text-sm mb-1"
                style={{ color: "var(--q-text-dark)" }}
            >
                {title}
            </span>
            <span
                className="text-xs leading-relaxed"
                style={{ color: "var(--q-text-muted)" }}
            >
                {detail}
            </span>
        </motion.div>
    );
}

export default function DressCodeSection({ dresscode }) {
    const { items, fullWidthLast } = dresscode;

    // Si fullWidthLast está activo, separamos la última card
    const mainItems = fullWidthLast ? items.slice(0, -1) : items;
    const lastItem = fullWidthLast ? items[items.length - 1] : null;

    return (
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-white)" }}
        >
            <div className="max-w-sm mx-auto">

                {/* Heading */}
                <motion.div {...FADE_UP} className="mb-8">
                    <Eyebrow>{dresscode.eyebrow}</Eyebrow>
                    <SectionHeading heading={dresscode.heading} accent={dresscode.headingAccent} />
                    <Divider />
                    {dresscode.description && (
                        <p
                            className="text-sm leading-relaxed mt-1"
                            style={{ color: "var(--q-text-muted)" }}
                        >
                            {dresscode.description}
                        </p>
                    )}
                </motion.div>

                {/* Grilla */}
                <div className="grid grid-cols-2 gap-3">
                    {mainItems.map((item, i) => (
                        <DressCard key={item.title} {...item} fullWidth={false} index={i} />
                    ))}
                    {lastItem && (
                        <DressCard {...lastItem} fullWidth={true} index={mainItems.length} />
                    )}
                </div>

                {/* Nota */}
                {dresscode.note && (
                    <motion.p
                        {...FADE_UP}
                        transition={{ ...FADE_UP.transition, delay: 0.45 }}
                        className="mt-5 text-center text-xs"
                        style={{ color: "var(--q-text-muted)" }}
                    >
                        {dresscode.note}
                    </motion.p>
                )}
            </div>
        </section>
    );
}