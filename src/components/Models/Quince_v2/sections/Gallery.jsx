// ╔══════════════════════════════════════════════════════╗
//  GALLERY SECTION
//  Grilla 2×2 de fotos simples. Sin historia ni timeline.
//  src: null → placeholder color sólido.
//  Fondo crema.
// ╚══════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, Photo, FADE_UP } from "../components.jsx";

export default function GallerySection({ gallery }) {
    return (
        <section
            className="px-5 py-16"
            style={{ background: "var(--q-bg-cream)" }}
        >
            <div className="max-w-sm mx-auto">

                {/* Heading */}
                <motion.div {...FADE_UP} className="mb-8">
                    <Eyebrow>{gallery.eyebrow}</Eyebrow>
                    <SectionHeading heading={gallery.heading} accent={gallery.headingAccent} />
                    <Divider />
                </motion.div>

                {/* Grilla 2×2 */}
                <div className="grid grid-cols-2 gap-3">
                    {gallery.images.map((img, i) => (
                        <motion.div
                            key={i}
                            {...FADE_UP}
                            transition={{ ...FADE_UP.transition, delay: 0.08 + i * 0.09 }}
                            className="overflow-hidden rounded-2xl"
                            style={{ aspectRatio: "3/4" }}
                        >
                            <Photo
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}