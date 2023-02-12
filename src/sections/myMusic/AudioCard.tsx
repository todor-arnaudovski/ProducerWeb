import { useContext } from "react";
import { AiFillCaretRight, AiOutlinePause } from "react-icons/ai";
import { AudioContext } from "../../contexts/audioContext";
import { AudioItem } from "../../services/audioService";
import styles from "./MyMusic.module.scss";

export const AudioCard = (props: { data: AudioItem }) => {
    const { data: audio } = props;
    const audioContext = useContext(AudioContext);

    const playAudioHandler = () => {
        audioContext.setCurrentAudioHandler(audio?.uuid ?? "");
        !audioContext.isPlaying && audioContext.play();
    };

    const pauseAudioHandler = () => {
        audioContext.isPlaying && audioContext.pause();
    };

    const getPlayState = () => {
        return audioContext.isPlaying && audioContext.currentAudio.uuid === audio.uuid
            ? styles["active"]
            : "";
    };

    const getPauseState = () => {
        return !audioContext.isPlaying && audioContext.currentAudio.uuid === audio.uuid
            ? styles["active"]
            : "";
    };

    return (
        <div className="mb-5">
            <div className={`${styles["song-card"]} mb-4`}>
                <div className={`${styles["controls"]}`}>
                    <AiFillCaretRight onClick={playAudioHandler} className={getPlayState()} />
                    <AiOutlinePause onClick={pauseAudioHandler} className={getPauseState()} />
                </div>
                <div className={`${styles["flip-cards"]} mb-5 lg:mb-0"`}>
                    <div className={`${styles["card-before"]}`}>
                        <img
                            src={audio.metadata.artworkUrl ?? ""}
                            alt={audio.metadata.title ?? ""}
                        />
                    </div>
                    <div className={`${styles["card-after"]}`}>
                        <img
                            src={audio.metadata.artworkUrl ?? ""}
                            alt={audio.metadata.title ?? ""}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">{audio.metadata.title}</h3>
                <span className="release-year">{audio.metadata.released?.getFullYear() ?? ""}</span>
            </div>
        </div>
    );
};
