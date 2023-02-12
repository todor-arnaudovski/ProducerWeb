import { useEffect, useState } from "react";
import styles from "./Preloader.module.scss";

export const Preloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadedContent = () => {
            setIsLoaded(true);
        };
        if (document.readyState !== "loading") {
            return loadedContent();
        }
    }, []);

    return (
        <div className={`${styles["preloader"]} ${styles[isLoaded ? "loaded" : ""]}`}>
            <div className={styles["lines-wrapper"]}>
                <div className={`${styles["line"]} ${styles["line-1"]}`}></div>
                <div className={`${styles["line"]} ${styles["line-2"]}`}></div>
                <div className={`${styles["line"]} ${styles["line-3"]}`}></div>
                <div className={`${styles["line"]} ${styles["line-4"]}`}></div>
                <div className={`${styles["line"]} ${styles["line-5"]}`}></div>
            </div>
        </div>
    );
};
