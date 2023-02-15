import { useRef } from "react";
import Background from "../../assets/images/section-socials.jpg";
import { socials } from "../../data/siteData";
import { Parallax } from "react-scroll-parallax";
import { Social } from "./Social";
import { motion } from "framer-motion";

export const Socials = () => {
    const textContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 pb-0 text-break">
            <div className="container">
                <div ref={textContainerRef} className="line-y-dark text-center">
                    <Parallax
                        translateX={[-10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <span className="block mb-2">Get Connected</span>
                    </Parallax>
                    <Parallax
                        translateX={[10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <h2 className="font-bold lg:text-7xl">SOCIALS</h2>
                    </Parallax>
                </div>
            </div>
            <div
                className="text-white overlay-dark bg-fixed no-repeat bg-cover"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <div className="container">
                    <div className="grid lg:grid-cols-3">
                        {socials.map((platform, i) => {
                            return platform.isInSection ? (
                                <motion.div
                                    key={platform.name}
                                    className="self-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + i / 3 }}
                                    viewport={{ once: true }}
                                >
                                    <Social platform={platform} />
                                </motion.div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
