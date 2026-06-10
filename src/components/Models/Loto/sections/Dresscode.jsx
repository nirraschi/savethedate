// ╔══════════════════════════════════════════════════════════╗
//  DRESS CODE SECTION — card flotante sobre foto fija
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, FloatingCard, FADE_UP } from "../Components.jsx";

function DressItem({ emoji, title, detail, fullWidth, index }) {
    return (
        <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 + index * 0.1 }}
            className={`flex flex-col items-center text-center p-4 rounded-xl ${fullWidth ? "col-span-2" : ""}`}
            style={{
                background: "var(--b-accent-dim)",
                border: "0.5px solid var(--b-border-accent)",
            }}
        >
            <span className="text-xl mb-2">{emoji}</span>
            <span
                className="text-sm font-medium mb-1"
                style={{ color: "var(--b-text-card)" }}
            >
                {title}
            </span>
            <span
                className="text-xs leading-relaxed"
                style={{ color: "var(--b-text-muted)" }}
            >
                {detail}
            </span>
        </motion.div>
    );
}

export default function DressCodeSection({ dresscode }) {
    const mainItems = dresscode.fullWidthLast
        ? dresscode.items.slice(0, -1)
        : dresscode.items;
    const lastItem = dresscode.fullWidthLast
        ? dresscode.items[dresscode.items.length - 1]
        : null;

    return (
        <div className="px-5 py-6">
            <div className="max-w-sm mx-auto">
                <FloatingCard>

                    <motion.div {...FADE_UP} className="mb-5">
                        <Eyebrow>{dresscode.eyebrow}</Eyebrow>
                        <SectionHeading heading={dresscode.heading} accent={dresscode.headingAccent} />
                        <Divider />
                        {dresscode.description && (
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "var(--b-text-muted)" }}
                            >
                                {dresscode.description}
                            </p>
                        )}
                    </motion.div>

                    <div className="grid grid-cols-2 gap-2.5">
                        {mainItems.map((item, i) => (
                            <DressItem key={item.title} {...item} fullWidth={false} index={i} />
                        ))}
                        {lastItem && (
                            <DressItem {...lastItem} fullWidth={true} index={mainItems.length} />
                        )}
                    </div>

                </FloatingCard>
            </div>
        </div>
    );
}