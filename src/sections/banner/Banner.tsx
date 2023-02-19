import { forwardRef } from "react";
import Background from "../../assets/images/header-background-3.jpg";
import styles from "./Banner.module.scss";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Banner = forwardRef(
    (props: { headerHeight: number }, ref: React.LegacyRef<HTMLElement> | undefined) => {
        // const { headerHeight } = props;
        const { ref: overlayRef } = useParallax({
            opacity: [0, 1.5],
            shouldAlwaysCompleteAnimation: true,
        });
        const isMobile = useIsMobile();

        return (
            <section
                className={`${styles["banner"]} flex items-center relative overflow-hidden`}
                style={{ marginTop: isMobile ? "95px" : "105px" }}
            >
                <div
                    ref={overlayRef as React.RefObject<HTMLDivElement>}
                    className={styles["overlay"]}
                ></div>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="d-flex flex-column max-w-full">
                            <Parallax
                                scale={[1, 2.5]}
                                opacity={[1, 0]}
                                shouldAlwaysCompleteAnimation
                            >
                                <h1
                                    className="font-bold text-7xl md:text-8xl lg:text-9xl -skew-x-6 animated-background m-3 lg:m-5"
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
