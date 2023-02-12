import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";

export const socials = [
    {
        Icon: AiFillYoutube,
        url: "https://www.youtube.com/@koldmane392/featured",
        name: "YouTube",
        header: "Subscribe to my YouTube channel.",
        cta: "Subscribe",
        isInSection: true,
    },
    {
        Icon: AiFillInstagram,
        url: "https://www.instagram.com/koldmane/?hl=en",
        name: "Instagram",
        header: "Follow me on Instagram.",
        cta: "Follow",
        isInSection: true,
    },
    {
        Icon: FaSoundcloud,
        url: "#",
        name: "Soundcloud",
        header: "Follow me on Soundcloud.",
        cta: "Follow",
        isInSection: true,
    },
];

export const navLinks = ["Player", "New Release", "My Music", "About Me", "Socials"];

export const email = "contact@koldmane.com";
