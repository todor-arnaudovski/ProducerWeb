import { createContext, useEffect, useRef, useState } from "react";
import { AudioItem, getAudio } from "../services/audioService";

interface AudioContextTypes {
    audioList: AudioItem[];
    currentAudio: AudioItem;
    audioElement: HTMLAudioElement | null;
    isPlaying: boolean;
    progress: number;
    play: () => void;
    pause: () => void;
    stop: () => void;
    previous: () => void;
    next: () => void;
    setCurrentTime: (time: number) => void;
    setCurrentAudioHandler: (uuid: string) => void;
    setProgressHandler: (value: number) => void;
}

const initialAudioContext: AudioContextTypes = {
    audioList: [],
    currentAudio: {
        uuid: null,
        url: null,
        metadata: {
            title: null,
            artworkUrl: null,
            released: null,
        },
    },
    audioElement: null,
    isPlaying: false,
    progress: 0,
    play: () => {},
    pause: () => {},
    stop: () => {},
    previous: () => {},
    next: () => {},
    setCurrentTime: () => {},
    setCurrentAudioHandler: () => {},
    setProgressHandler: () => {},
};

interface AudioContextProps {
    children: React.ReactNode;
}

export const AudioContext = createContext(initialAudioContext);

export const AudioProvider = ({ children }: AudioContextProps) => {
    const [index, setIndex] = useState(0);
    const [audioList, setAudioList] = useState<AudioItem[]>([]);
    const [currentAudio, setCurrentAudio] = useState<AudioItem | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(new Audio(audioList[index]?.url ?? ""));

    useEffect(() => {
        getAudio()
            .then((data) => {
                if (!data || data.length <= 0) return;
                console.log("FETCHED");
                setAudioList(data);
                setCurrentAudio(data[index]);
            })
            .catch((e) => {
                console.error("Fetch audio error!", e);
            });
    }, []);

    useEffect(() => {
        audioRef.current.src = currentAudio?.url ?? "";
        if (audioRef.current && isPlaying) play();
    }, [currentAudio, currentAudio?.url]);

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
        const prevIndex = index <= 0 ? audioList.length - 1 : index - 1;
        setIndex(prevIndex);
        setCurrentAudio(audioList[prevIndex]);
    };

    const next = () => {
        stop();
        const nextIndex = index >= audioList.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
        setCurrentAudio(audioList[nextIndex]);
    };

    const setCurrentTime = (time: number) => {
        audioRef.current.currentTime = time;
    };

    const setCurrentAudioHandler = (uuid: string) => {
        const audio = audioList.find((a) => a.uuid === uuid);
        if (audio) {
            const foundIndex = audioList.findIndex((a) => a === audio);
            setIndex(foundIndex);
            setCurrentAudio(audio);
            return;
        }
        console.error("Audio not found");
    };

    const setProgressHandler = (value: number) => {
        setProgress(value);
    };

    const audioContext: AudioContextTypes = {
        audioList,
        currentAudio: {
            uuid: currentAudio?.uuid ?? "",
            url: currentAudio?.url ?? "",
            metadata: {
                title: currentAudio?.metadata.title ?? "",
                artworkUrl: currentAudio?.metadata.artworkUrl ?? "",
                released: currentAudio?.metadata.released ?? new Date(),
            },
        },
        audioElement: audioRef.current,
        isPlaying,
        progress,
        play,
        pause,
        stop,
        previous,
        next,
        setCurrentTime,
        setCurrentAudioHandler,
        setProgressHandler,
    };

    return <AudioContext.Provider value={audioContext}>{children}</AudioContext.Provider>;
};
