import { useContext } from "react";
import { AudioContext } from "../../contexts/audioContext";
import { truncate } from "../../utils/textUtilities";
import styles from "./MiniPlayer.module.scss";

export const MiniPlayer = () => {
    const audioContext = useContext(AudioContext);

    return (
        <div
            className={`${styles["mini-player"]} ${
                audioContext.isPlaying ? styles["playing"] : null
            } flex justify-center fixed z-50 bottom-0 bg-white shadow-xl p-5`}
        >
            <div className={styles["thumb"]}>
                <img
                    src={audioContext.metadata.artworkUrl ?? ""}
                    alt={audioContext.metadata.title ?? "Artwork"}
                />
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
