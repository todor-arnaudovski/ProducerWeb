import { availableAudio } from "../../assets/music/audio";
import { AudioCard } from "./AudioCard";

export const MyMusic = () => {
    return (
        <section className="py-20">
            <div className="container">
                <div className="line-y-dark text-center">
                    <span className="block mb-2">My</span>
                    <h2 className="font-bold lg:text-7xl">MUSIC</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-x-5">
                    {availableAudio &&
                        availableAudio.length > 0 &&
                        availableAudio.map((audio) => {
                            return <AudioCard data={audio} key={audio.id} />;
                        })}
                </div>
            </div>
        </section>
    );
};
