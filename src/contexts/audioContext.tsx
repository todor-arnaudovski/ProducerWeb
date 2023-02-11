import { createContext, useEffect, useRef, useState } from "react";
import { availableAudio } from "../assets/music/audio";

interface AudioContextTypes {
    id: string | null;
    audio: HTMLAudioElement | null;
    metadata: {
        title: string | null;
        artworkUrl: string | null;
        released: Date;
    };
    isPlaying: boolean;
    play: () => void;
    pause: () => void;
    stop: () => void;
    previous: () => void;
    next: () => void;
    setCurrentTime: (time: number) => void;
    setCurrentAudioHandler: (id: string) => void;
}

const initialAudioContext: AudioContextTypes = {
    id: null,
    audio: null,
    metadata: {
        title: null,
        artworkUrl: null,
        released: new Date(),
    },
    isPlaying: false,
    play: () => {},
    pause: () => {},
    stop: () => {},
    previous: () => {},
    next: () => {},
    setCurrentTime: () => {},
    setCurrentAudioHandler: () => {},
};

interface AudioContextProps {
    children: React.ReactNode;
}

export const AudioContext = createContext(initialAudioContext);

export const AudioProvider = ({ children }: AudioContextProps) => {
    const [index, setIndex] = useState(0);
    const [currentAudio, setCurrentAudio] = useState(availableAudio[index]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(availableAudio[index].url));

    useEffect(() => {
        audioRef.current.src = currentAudio.url;
        if (audioRef.current && isPlaying) play();
    }, [currentAudio.url]);

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const stop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(true);
    };

    const previous = () => {
        stop();
        const prevIndex = index <= 0 ? availableAudio.length - 1 : index - 1;
        setIndex(prevIndex);
        setCurrentAudio(availableAudio[prevIndex]);
    };

    const next = () => {
        stop();
        const nextIndex = index >= availableAudio.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
        setCurrentAudio(availableAudio[nextIndex]);
    };

    const setCurrentTime = (time: number) => {
        audioRef.current.currentTime = time;
    };

    const setCurrentAudioHandler = (id: string) => {
        const audio = availableAudio.find((a) => a.id === id);
        if (audio) {
            const foundIndex = availableAudio.findIndex((a) => a === audio);
            setIndex(foundIndex);
            setCurrentAudio(audio);
            return;
        }
        console.error("Audio not found");
    };

    const audioContext: AudioContextTypes = {
        id: currentAudio.id,
        audio: audioRef.current,
        metadata: {
            title: currentAudio.metadata.title,
            artworkUrl: currentAudio.metadata.artworkUrl,
            released: currentAudio.metadata.released,
        },
        isPlaying,
        play,
        pause,
        stop,
        previous,
        next,
        setCurrentTime,
        setCurrentAudioHandler,
    };

    return <AudioContext.Provider value={audioContext}>{children}</AudioContext.Provider>;
};
