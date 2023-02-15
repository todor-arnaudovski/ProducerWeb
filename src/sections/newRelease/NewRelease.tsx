import { Parallax, useParallax } from "react-scroll-parallax";
import img1 from "../../assets/images/round-img-1.jpg";
import img2 from "../../assets/images/round-img-2.jpg";
import img3 from "../../assets/images/round-img-3.jpg";
import styles from "./NewRelease.module.scss";

export const NewRelease = () => {
    const { ref: leftCircleRef } = useParallax({ speed: 15, shouldAlwaysCompleteAnimation: true });
    const { ref: midCircleRef } = useParallax({
        scale: [1.2, 1],
        shouldAlwaysCompleteAnimation: true,
    });
    const { ref: rightCircleRef } = useParallax({ speed: 15, shouldAlwaysCompleteAnimation: true });

    return (
        <section className="py-32 bg-black">
            <div className="container relative">
                <div className={`${styles["round-img-wrapper"]}`}>
                    <div
                        ref={leftCircleRef as React.RefObject<HTMLDivElement>}
                        className={`${styles["round-img"]} ${styles["left"]} rounded-full z-30`}
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    />
                    <div
                        ref={midCircleRef as React.RefObject<HTMLDivElement>}
                        className={`${styles["round-img"]} ${styles["mid"]} mx-auto lg:rounded-full relative z-20`}
                        style={{
                            backgroundImage: `url(${img1})`,
                        }}
                    />
                    <div
                        ref={rightCircleRef as React.RefObject<HTMLDivElement>}
                        className={`${styles["round-img"]} ${styles["right"]} rounded-full z-10`}
                        style={{
                            backgroundImage: `url(${img3})`,
                        }}
                    />
                </div>
                <div className={`${styles["text-wrapper"]} z-40`}>
                    <Parallax translateX={[0, 30]} shouldAlwaysCompleteAnimation>
                        <h2 className="font-bold lg:text-7xl text-white">
                            NEW
                            <br />
                            RELEASE
                        </h2>
                        <p className="md:mb-5 text-white">
                            Experience an epic soundscape like no other. So, turn up the volume and
                            get ready for a musical experience that will leave a lasting impression.{" "}
                            <a
                                href="#"
                                className="font-bold text-rose-500 ml-3 whitespace-nowrap duration-300 hover:text-white hover-underline"
                            >
                                LISTEN NOW
                            </a>
                        </p>
                    </Parallax>
                </div>
            </div>
        </section>
    );
};
