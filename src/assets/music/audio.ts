import { nanoid } from "nanoid";
import audio1 from "./all-i-heard/all-i-heard.mp3";
import artwork1 from "./all-i-heard/all-i-heard.jpg";
import audio2 from "./choices/choices.mp3";
import artwork2 from "./choices/choices.jpg";
import audio3 from "./every-step/every-step.mp3";
import artwork3 from "./every-step/every-step.jpg";

export interface AudioItem {
    id: string;
    url: string;
    metadata: {
        title: string;
        artworkUrl: string;
        released: Date;
    };
}

export const availableAudio: AudioItem[] = [
    {
        id: nanoid(),
        url: audio1,
        metadata: { title: "All I Heard", artworkUrl: artwork1, released: new Date() },
    },
    {
        id: nanoid(),
        url: audio2,
        metadata: { title: "Choices", artworkUrl: artwork2, released: new Date() },
    },
    {
        id: nanoid(),
        url: audio3,
        metadata: { title: "Every Step", artworkUrl: artwork3, released: new Date() },
    },
];
