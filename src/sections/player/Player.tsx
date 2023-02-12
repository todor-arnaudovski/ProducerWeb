import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Background from "../../assets/images/section-1.jpg";
import styles from "./Players.module.scss";
import { AiFillBackward, AiFillForward, AiFillCaretRight, AiOutlinePause } from "react-icons/ai";
import { AudioContext } from "../../contexts/audioContext";

export const Player = () => {
    const [progress, setProgress] = useState(0);
    const [audioTimeText, setAudioTimeText] = useState<{ current: string; total: string }>({
        current: "--:--",
        total: "--:--",
    });
    const audioContext = useContext(AudioContext);
    const scrubberRef = useRef<HTMLDivElement>(null);

    // update player on interval
    useEffect(() => {
        const progressInterval = () => {
            if (!audioContext.audio) return;
            updateTimeText();
            if (audioContext.audio?.currentTime >= audioContext.audio?.duration) {
                audioContext.next();
                setProgress(0);
            } else {
                const currentProgress =
                    (audioContext.audio.currentTime / audioContext.audio.duration) * 100;
                setProgress(currentProgress);
            }
        };
        let intervalId: number;
        if (audioContext.isPlaying) {
            intervalId = setInterval(progressInterval, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [audioContext.audio?.src, audioContext.isPlaying]);

    // set initial audioTimeText
    useEffect(() => {
        if (!audioContext.audio) return;
        audioContext.audio.addEventListener("loadedmetadata", updateTimeText);
        return () => {
            audioContext.audio?.removeEventListener("loadedmetadata", updateTimeText);
        };
    }, [audioContext.audio?.src]);

    const updateTimeText = useCallback(() => {
        if (!audioContext.audio) return;
        const { duration, currentTime } = audioContext.audio;
        let currentTimeSeconds =
            Math.floor(currentTime % 60) < 10
                ? `0${Math.ceil(currentTime % 60)}`
                : `${Math.ceil(currentTime % 60)}`;
        let durationSeconds =
            Math.ceil(duration % 60) < 10
                ? `0${Math.ceil(duration % 60)}`
                : `${Math.ceil(duration % 60)}`;
        const currentTimeCalc = `${Math.floor(currentTime / 60)}:${currentTimeSeconds}`;
        const durationCalc = `${Math.floor(duration / 60)}:${durationSeconds}`;
        setAudioTimeText({
            current: currentTimeCalc,
            total: durationCalc,
        });
    }, []);

    const setProgressHandler = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (!scrubberRef.current || !audioContext.audio) return;
            const width = scrubberRef.current.offsetWidth;
            const clickX = e.nativeEvent.offsetX;
            const duration = audioContext.audio?.duration;
            const currentTime = (clickX / width) * duration;
            audioContext.setCurrentTime(currentTime);
            const currentProgress =
                (audioContext.audio.currentTime / audioContext.audio.duration) * 100;
            setProgress(currentProgress);
            updateTimeText();
        },
        [scrubberRef]
    );

    const playAudioHandler = () => {
        !audioContext.isPlaying ? audioContext.play() : audioContext.pause();
    };

    const nextAudioHandler = () => {
        audioContext.next();
        setProgress(0);
    };

    const previousAudioHandler = () => {
        audioContext.previous();
        setProgress(0);
    };

    return (
        <section
            className="bg-img bg-fade-top pt-36 pb-40"
            style={{ backgroundImage: `url('${Background}')` }}
        >
            <div className={`${styles["player-container"]} container`}>
                <div className={`${styles["player"]} mx-auto text-center`}>
                    <div
                        className={`${styles["player-bg"]} bg-cover	bg-no-repeat bg-center blur`}
                        style={{
                            backgroundImage: `url(${audioContext.metadata.artworkUrl ?? ""})`,
                        }}
                    ></div>
                    <div className="relative z-10">
                        <div className={`${styles["player-thumb"]} mb-5`}>
                            <img
                                src={audioContext.metadata.artworkUrl ?? ""}
                                alt={audioContext.metadata.title ?? ""}
                                className="mx-auto"
                            />
                        </div>
                        <div className="text-white text-light">
                            <h3 className="font-bold lg:text-xl">{audioContext.metadata.title}</h3>
                            <span className="block tracking-widest">
                                {audioContext.metadata.released.getFullYear()}
                            </span>
                        </div>
                        <div className="py-10 lg:py-12 mx-12 text-white">
                            <div
                                className={`${styles["audio-controls"]} flex justify-between mb-7`}
                            >
                                <button onClick={previousAudioHandler}>
                                    <AiFillBackward />
                                </button>
                                <button onClick={playAudioHandler}>
                                    {audioContext.isPlaying ? (
                                        <AiOutlinePause />
                                    ) : (
                                        <AiFillCaretRight />
                                    )}
                                </button>
                                <button onClick={nextAudioHandler}>
                                    <AiFillForward />
                                </button>
                            </div>
                            <div
                                className={`${styles["audio-scrubber"]} mb-5`}
                                onClick={setProgressHandler}
                                ref={scrubberRef}
                            >
                                <div
                                    className={`${styles["audio-scrubber-fill"]}`}
                                    style={{ width: `${progress}%` }}
                                ></div>
                                <div
                                    className={`${styles["audio-scrubber-handle"]}`}
                                    style={{ left: `${progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between">
                                <span>{audioTimeText.current}</span>
                                <span>{audioTimeText.total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
