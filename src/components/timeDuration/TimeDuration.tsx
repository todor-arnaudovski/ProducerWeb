import { useCallback, useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/audioContext";

export const TimeDuration = () => {
    const [timeText, setTimeText] = useState("--:--");
    const audioContext = useContext(AudioContext);

    // set initial audioTimeText
    useEffect(() => {
        if (!audioContext.audioElement) return;
        updateTimeText();
        audioContext.audioElement.addEventListener("loadedmetadata", updateTimeText);
        return () => {
            audioContext.audioElement?.removeEventListener("loadedmetadata", updateTimeText);
        };
    }, [audioContext.audioElement]);

    // update time text
    useEffect(() => {
        if (!audioContext.audioElement) return;
        updateTimeText();
    }, [audioContext.audioElement?.duration]);

    const updateTimeText = useCallback(() => {
        if (!audioContext.audioElement) return;
        const { duration } = audioContext.audioElement;

        if (Number.isNaN(duration)) return;

        let durationSeconds =
            Math.ceil(duration % 60) <= 10
                ? `0${Math.ceil(duration % 60)}`
                : `${Math.ceil(duration % 60)}`;
        const durationCalc = `${Math.floor(duration / 60)}:${durationSeconds}`;

        setTimeText(durationCalc);
    }, [audioContext.audioElement]);

    return <span>{timeText}</span>;
};
