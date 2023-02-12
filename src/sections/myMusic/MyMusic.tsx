import { useContext } from "react";
import { AudioContext } from "../../contexts/audioContext";
import { AudioCard } from "../../components/audioCard/AudioCard";

export const MyMusic = () => {
    const audioContext = useContext(AudioContext);

    return (
        <section className="py-20">
            <div className="container">
                <div className="line-y-dark text-center">
                    <span className="block mb-2">My</span>
                    <h2 className="font-bold lg:text-7xl">MUSIC</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-x-5">
                    {audioContext.audioList &&
                        audioContext.audioList.length > 0 &&
                        audioContext.audioList.map((audio) => {
                            return <AudioCard data={audio} key={audio.uuid} />;
                        })}
                </div>
            </div>
        </section>
    );
};
