import { useState, useContext } from "react";
import { AudioContext } from "../../contexts/audioContext";
import Spinner from "../../assets/loaders/Spinner-200.svg";

export const Thumbnail = () => {
    const audioContext = useContext(AudioContext);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <>
            {!isImageLoaded && <img src={Spinner} alt="Loading..." className="mx-auto" />}
            <img
                src={audioContext.currentAudio.metadata.artworkUrl ?? Spinner}
                alt={audioContext.currentAudio.metadata.title ?? "Artwork"}
                className="mx-auto"
                onLoad={() => setIsImageLoaded(true)}
                style={{ display: isImageLoaded ? "block" : "none" }}
            />
        </>
    );
};
