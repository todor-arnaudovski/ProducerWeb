import { useCallback, useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/audioContext";

export const TimeCurrent = () => {
    const [current, setCurrent] = useState("--:--");
    const audioContext = useContext(AudioContext);

    // set initial Current
    useEffect(() => {
        if (!audioContext.audioElement) return;
        updateTimeText();
        audioContext.audioElement.addEventListener("loadedmetadata", updateTimeText);
        return () => {
            audioContext.audioElement?.removeEventListener("loadedmetadata", updateTimeText);
        };
    }, [audioContext.audioElement, audioContext.audioElement?.src]);

    // update time text
    useEffect(() => {
        updateTimeText();
    }, [audioContext.audioElement?.currentTime]);

    const updateTimeText = useCallback(() => {
        if (!audioContext.audioElement) return;
        const { currentTime } = audioContext.audioElement;

        if (Number.isNaN(currentTime)) return;

        let currentTimeSeconds =
            Math.ceil(currentTime % 60) <= 10
                ? `0${Math.ceil(currentTime % 60)}`
                : `${Math.ceil(currentTime % 60)}`;
        const currentTimeCalc = `${Math.floor(currentTime / 60)}:${currentTimeSeconds}`;

        setCurrent(currentTimeCalc);
    }, [audioContext.audioElement, audioContext.audioElement?.currentTime]);

    return <span>{current}</span>;
};
