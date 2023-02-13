import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface AudioItem {
    uuid: string | null;
    url: string | null;
    metadata: {
        title: string | null;
        artworkUrl: string | null;
        released: Date | null;
    };
}

export const getAudio = async () => {
    const audioList: AudioItem[] = [];
    const querySnapshot = await getDocs(collection(db, "Audio"));

    querySnapshot.forEach(async (audio) => {
        if (audio.exists()) {
            const audioItem: AudioItem = {
                uuid: audio.data().uuid ?? "",
                url: audio.data().url ?? "",
                metadata: {
                    title: audio.data().title ?? "",
                    artworkUrl: audio.data().artworkUrl ?? "",
                    released: audio.data().released.toDate() ?? "",
                },
            };

            audioList.push(audioItem);
        } else {
            console.error("No such document!");
            return;
        }
    });

    return audioList;
};
