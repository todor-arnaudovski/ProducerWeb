import img1 from "../../assets/images/round-img-1.jpg";
import img2 from "../../assets/images/round-img-2.jpg";
import img3 from "../../assets/images/round-img-3.jpg";
import styles from "./NewRelease.module.scss";

export const NewRelease = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container relative">
                <div className={`${styles["round-img-wrapper"]}`}>
                    <div
                        className={`${styles["round-img"]} ${styles["left"]} rounded-full z-30`}
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    />
                    <div
                        className={`${styles["round-img"]} ${styles["mid"]} mx-auto lg:rounded-full relative z-20`}
                        style={{
                            backgroundImage: `url(${img1})`,
                        }}
                    />
                    <div
                        className={`${styles["round-img"]} ${styles["right"]} rounded-full z-10`}
                        style={{
                            backgroundImage: `url(${img3})`,
                        }}
                    />
                </div>
                <div className={`${styles["text-wrapper"]} z-40`}>
                    <h2 className="font-bold lg:text-7xl text-white">
                        NEW
                        <br />
                        RELEASE
                    </h2>
                    <p className="md:mb-5 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus
                        pariatur laboriosam perspiciatis autem asperiores.{" "}
                        <a
                            href="#"
                            className="font-bold text-rose-500 hover:pl-5 duration-300 whitespace-nowrap "
                        >
                            LISTEN NOW
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
