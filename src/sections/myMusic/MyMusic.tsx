import { forwardRef, useContext, useRef } from "react";
import { AudioContext } from "../../contexts/audioContext";
import { AudioCard } from "../../components/audioCard/AudioCard";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export const MyMusic = forwardRef((props: {}, ref: React.LegacyRef<HTMLElement> | undefined) => {
    const audioContext = useContext(AudioContext);
    const textContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={ref} className="py-20">
            <div className="container">
                <div ref={textContainerRef} className="line-y-dark text-center">
                    <Parallax
                        translateX={[-10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <span className="block mb-2">The</span>
                    </Parallax>
                    <Parallax
                        translateX={[10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <h2 className="font-bold text-4xl lg:text-7xl">MUSIC</h2>
                    </Parallax>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5">
                    {audioContext.audioList &&
                        audioContext.audioList.length > 0 &&
                        audioContext.audioList.map((audio, i) => {
                            return (
                                <motion.div
                                    key={audio.uuid}
                                    className="self-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i / 3 }}
                                    viewport={{ once: true }}
                                >
                                    <AudioCard data={audio} />
                                </motion.div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
});
