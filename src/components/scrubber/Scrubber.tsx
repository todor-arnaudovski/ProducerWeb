import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AudioContext } from "../../contexts/audioContext";
import styles from "./Scrubber.module.scss";

interface ScrubberProps {
    className?: string;
}

export const Scrubber = (props: ScrubberProps) => {
    const { className } = props;
    const audioContext = useContext(AudioContext);
    const scrubberRef = useRef<HTMLDivElement>(null);

    // update player on interval
    useEffect(() => {
        const progressInterval = () => {
            if (!audioContext.audioElement) return;
            if (audioContext.audioElement?.currentTime >= audioContext.audioElement?.duration) {
                audioContext.next();
                audioContext.setProgressHandler(0);
            } else {
                const currentProgress =
                    (audioContext.audioElement.currentTime / audioContext.audioElement.duration) *
                    100;
                audioContext.setProgressHandler(currentProgress);
            }
        };
        let intervalId: NodeJS.Timer;
        if (audioContext.isPlaying) {
            intervalId = setInterval(progressInterval, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [
        audioContext.audioElement?.src,
        audioContext.audioElement?.currentTime,
        audioContext.isPlaying,
    ]);

    const setProgressHandler = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (!scrubberRef.current || !audioContext.audioElement) return;
            const width = scrubberRef.current.offsetWidth;
            const clickX = e.nativeEvent.offsetX;
            const duration = audioContext.audioElement?.duration;
            if (Number.isNaN(duration)) return;
            const currentTime = (clickX / width) * duration;
            const currentProgress = (currentTime / audioContext.audioElement.duration) * 100;
            audioContext.setCurrentTime(currentTime);
            audioContext.setProgressHandler(currentProgress);
        },
        [scrubberRef, audioContext.audioElement]
    );

    return (
        <div
            className={`${styles["audio-scrubber"]} ${className}`}
            onClick={setProgressHandler}
            ref={scrubberRef}
        >
            <div
                className={`${styles["audio-scrubber-fill"]}`}
                style={{ width: `${audioContext.progress}%` }}
            ></div>
            {/* <div
                className={`${styles["audio-scrubber-handle"]}`}
                style={{ left: `${progress}%` }}
            ></div> */}
        </div>
    );
};
