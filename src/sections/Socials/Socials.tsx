import Background from "../../assets/images/section-socials.jpg";
import { Link } from "../../components/Link/Link";
import styles from "./Socials.module.scss";

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
                        <div className={`${styles["social"]} px-7 pb-7 md:px-10 md:pb-10 lg:pt-96`}>
                            <div className="relative">
                                <h3
                                    className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}
                                >
                                    YouTube
                                </h3>
                                <div className={styles["hidden-items"]}>
                                    <p className="mb-3">Subscribe to my YouTube channel.</p>
                                    <Link href="#" asButton>
                                        Subscribe
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["social"]} px-7 pb-7 md:px-10 md:pb-10 lg:pt-96`}>
                            <div className="relative">
                                <h3
                                    className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}
                                >
                                    Soundcloud
                                </h3>
                                <div className={styles["hidden-items"]}>
                                    <p className="mb-3">Follow me on Soundcloud.</p>
                                    <Link href="#" asButton>
                                        Follow
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["social"]} px-7 pb-7 md:px-10 md:pb-10 lg:pt-96`}>
                            <div className="relative">
                                <h3
                                    className={`${styles["medium-name"]} font-bold lg:text-3xl mb-3"`}
                                >
                                    Instagram
                                </h3>
                                <div className={styles["hidden-items"]}>
                                    <p className="mb-3">Follow me on instagram.</p>
                                    <Link href="#" asButton>
                                        Follow
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
