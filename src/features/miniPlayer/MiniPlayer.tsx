import { useContext } from "react";
import { AiFillCaretRight, AiOutlinePause } from "react-icons/ai";
import { AudioContext } from "../../contexts/audioContext";
import { truncate } from "../../utils/textUtilities";
import styles from "./MiniPlayer.module.scss";

export const MiniPlayer = () => {
    const audioContext = useContext(AudioContext);

    const playAudioHandler = () => {
        !audioContext.isPlaying ? audioContext.play() : audioContext.pause();
    };

    return (
        <div
            className={`${styles["mini-player"]} ${
                audioContext.isPlaying ? styles["playing"] : null
            } flex justify-center fixed z-50 bottom-0 bg-white shadow-xl p-5`}
        >
            <div className={`${styles["thumb"]} relative`}>
                <img
                    src={audioContext.metadata.artworkUrl ?? ""}
                    alt={audioContext.metadata.title ?? "Artwork"}
                    className="w-full h-auto"
                />
                <button
                    onClick={playAudioHandler}
                    className={`${styles["controls"]} absolute inset-0 w-full duration-300 p-5`}
                >
                    {audioContext.isPlaying ? <AiOutlinePause /> : <AiFillCaretRight />}
                </button>
            </div>
            <div className="flex flex-col justify-center text-center px-5">
                <span className="text-sm block mb-2">Now playing</span>
                <h5 className="text-xl font-bold">
                    {truncate(audioContext.metadata.title, 15, "...")}
                </h5>
            </div>
        </div>
    );
};
