// ╔══════════════════════════════════════════════════════════╗
//  GALLERY SECTION — card flotante sobre foto fija
//  Grilla 2×2. src: null → placeholder color sólido.
// ╚══════════════════════════════════════════════════════════╝

import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, Divider, FloatingCard, Photo, FADE_UP } from "../components.jsx";

export default function GallerySection({ gallery }) {
    return (
        <div className="px-5 py-6">
            <div className="max-w-sm mx-auto">
                <FloatingCard>

                    <motion.div {...FADE_UP} className="mb-5">
                        <Eyebrow>{gallery.eyebrow}</Eyebrow>
                        <SectionHeading heading={gallery.heading} accent={gallery.headingAccent} />
                        <Divider />
                    </motion.div>

                    <div className="grid grid-cols-2 gap-2.5">
                        {gallery.images.map((img, i) => (
                            <motion.div
                                key={i}
                                {...FADE_UP}
                                transition={{ ...FADE_UP.transition, delay: 0.08 + i * 0.08 }}
                                className="overflow-hidden rounded-xl"
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

                </FloatingCard>
            </div>
        </div>
    );
}