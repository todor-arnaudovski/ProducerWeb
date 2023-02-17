import { forwardRef, useRef } from "react";
import Background from "../../assets/images/section-socials.jpg";
import { socials, SocialsPlatform } from "../../data/siteData";
import { Parallax } from "react-scroll-parallax";
import { Social } from "./Social";

export const Socials = forwardRef((props: {}, ref: React.LegacyRef<HTMLElement> | undefined) => {
    const textContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={ref} className="py-20 pb-0 text-break">
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
                        <h2 className="font-bold text-4xl lg:text-7xl">SOCIALS</h2>
                    </Parallax>
                </div>
            </div>
            <div
                className="text-white overlay-dark bg-fixed no-repeat bg-cover"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <div className="container">
                    <div className="grid md:grid-cols-3">
                        {socials.map((platform: SocialsPlatform, i) => {
                            return platform.isInSection ? (
                                <Social key={platform.name} index={i} platform={platform} />
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});
