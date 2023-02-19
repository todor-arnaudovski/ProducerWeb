import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/audioContext";
import styles from "./Preloader.module.scss";

export const Preloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const audioContext = useContext(AudioContext);
    console.log(isLoaded);

    useEffect(() => {
        let resourcePromises = [];

        // Add a promise for each resource that needs to be loaded
        if (audioContext.currentAudio.metadata.artworkUrl) {
            resourcePromises.push(
                new Promise((resolve) => {
                    const image = new Image();
                    if (audioContext.currentAudio.metadata.artworkUrl) {
                        image.src = audioContext.currentAudio.metadata.artworkUrl;
                        image.onload = resolve;
                    }
                })
            );
        }
        if (audioContext.currentAudio.metadata.artworkUrl) {
            resourcePromises.push(
                new Promise((resolve) => {
                    const audio = new Audio();
                    if (audioContext.currentAudio.url) {
                        audio.src = audioContext.currentAudio.url;
                        audio.oncanplaythrough = resolve;
                    }
                })
            );
        }

        Promise.all(resourcePromises).then(() => {
            setIsLoaded(true);
        });
    }, []);

    if (isLoaded) return;

    return (
        <div className={`${styles["preloader"]} ${isLoaded && styles["loaded"]}`}>
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
