import { IconType } from "react-icons";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";

export interface SocialsPlatform {
    Icon: IconType;
    url: string;
    name: string;
    header: string;
    cta: string;
    isInSection: boolean;
}

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

export const navLinks = [
    { id: "player-section", title: "Player" },
    { id: "new-release-section", title: "New Release" },
    { id: "my-music-section", title: "My Music" },
    { id: "about-me-section", title: "About Me" },
    { id: "socials-section", title: "Socials" },
];

export const email = "contact@koldmane.com";
