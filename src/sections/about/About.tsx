import { useRef } from "react";
import Logo from "../../assets/logos/logo.png";
import Background from "../../assets/images/section-2.jpg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export const About = () => {
    const textContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 text-white" style={{ backgroundImage: `url(${Background})` }}>
            <div className="container">
                <div ref={textContainerRef} className="line-y-white text-center">
                    <Parallax
                        translateX={[10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <span className="block mb-2">The Beginning</span>
                    </Parallax>
                    <Parallax
                        translateX={[-10, 0]}
                        shouldAlwaysCompleteAnimation
                        targetElement={textContainerRef.current ?? undefined}
                    >
                        <h2 className="font-bold lg:text-7xl">ABOUT ME</h2>
                    </Parallax>
                </div>
                <div className="lg:px-36 flex flex-col py-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold lg:text-3xl mb-3">
                            He heard something that he knew to be music
                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-10">
                            Discover the magic behind the music. With a unique sound and innovative
                            production style, he brings a fresh and exciting energy to every track.
                            Experience the magic for yourself.
                        </p>
                    </motion.div>
                    <motion.div
                        className="self-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img
                            className="bounce"
                            style={{ maxWidth: "100px" }}
                            src={Logo}
                            alt="Trillo Logo"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
