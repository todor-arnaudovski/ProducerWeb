import styles from "./Video.module.scss";

export const Video = () => {
    return (
        <section className="pt-20">
            <div className="container">
                <div className="lg:px-36">
                    <div className={styles["video-container"]}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/7_9r1w88w9g"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
