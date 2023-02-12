import Background from "../../assets/images/section-socials.jpg";
import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import styles from "./Socials.module.scss";
import { socials } from "../../data/siteData";

export const Socials = () => {
    return (
        <section className="py-20 pb-0 text-break">
            <div className="container">
                <div className="line-y-dark text-center">
                    <span className="block mb-2">Get Connected</span>
                    <h2 className="font-bold lg:text-7xl">SOCIALS</h2>
                </div>
            </div>
            <div
                className="text-white overlay-dark bg-fixed"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <div className="container">
                    <div className="grid lg:grid-cols-3">
                        {socials.map((platform) => {
                            return platform.isInSection ? (
                                <div
                                    key={platform.name}
                                    className={`${styles["social"]} px-7 pb-7 md:px-10 md:pb-10 lg:pt-96`}
                                >
                                    <div className="relative">
                                        <h3
                                            className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}
                                        >
                                            {platform.name}
                                        </h3>
                                        <div className={styles["hidden-items"]}>
                                            <p className="mb-3">{platform.header}</p>
                                            <ButtonLink
                                                href={platform.url}
                                                target={platform.url !== "#" ? "_blank" : "_top"}
                                            >
                                                {platform.cta}
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
