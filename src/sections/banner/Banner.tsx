import { forwardRef } from "react";
import Background from "../../assets/images/header-background-3.jpg";
import styles from "./Banner.module.scss";
import { Parallax, useParallax } from "react-scroll-parallax";

export const Banner = forwardRef(
    (props: { spacingTop: number }, ref: React.LegacyRef<HTMLElement> | undefined) => {
        const { spacingTop } = props;
        const { ref: overlayRef } = useParallax({
            opacity: [0, 1.5],
            shouldAlwaysCompleteAnimation: true,
        });

        return (
            <section
                className="relative overflow-hidden py-48"
                style={{ marginTop: `${spacingTop}px` }}
            >
                <div
                    ref={overlayRef as React.RefObject<HTMLDivElement>}
                    className={styles["overlay"]}
                    style={{
                        marginTop: `-${spacingTop}px`,
                        height: `calc(100% + ${spacingTop}px)`,
                    }}
                ></div>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="d-flex flex-column">
                            <Parallax
                                scale={[1, 2.5]}
                                opacity={[1, 0]}
                                shouldAlwaysCompleteAnimation
                            >
                                <h1
                                    className="font-bold lg:text-9xl -skew-x-6 animated-background m-5"
                                    style={{ backgroundImage: `url(${Background})` }}
                                >
                                    KLDMN
                                </h1>
                            </Parallax>
                            <Parallax translateY={[1, 150]} shouldAlwaysCompleteAnimation>
                                <div ref={ref as React.RefObject<HTMLDivElement>}>
                                    <span>music by</span>{" "}
                                    <h2 className="font-bold lg:text-2xl dash-left">Koldmane</h2>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);
