import Logo from "../../../assets/logos/trillo-logo-1.png";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";
import styles from "../assets/Footer.module.scss";

const navLinks = ["Player", "New Release", "My Music", "About Me", "Socials"];
const socialIcons = [AiFillYoutube, AiFillInstagram, FaSoundcloud];

export const Footer = () => {
    return (
        <footer className={`${styles["footer"]} bg-black text-white py-28`}>
            <div className="container text-center">
                <a href="#" className="inline-block mb-5">
                    <img className={`${styles["logo"]} invert`} src={Logo} alt="Koldmane Logo" />
                </a>
                <div className={`${styles["icons-wrapper"]} mb-5`}>
                    <ul className="flex justify-center">
                        {socialIcons.map((Icon, i) => {
                            return (
                                <li key={i} className="text-3xl mx-2">
                                    <a href="#" className="hover:text-rose-500 duration-300">
                                        <Icon />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-contact fw-light mb-12">
                    Contact me:{" "}
                    <a
                        className="hover:text-rose-500 duration-300 font-bold"
                        href="mailto:trillobeats@gmail.com"
                    >
                        contact@koldmane.com
                    </a>
                </div>
                <div className="mb-5">
                    <ul className="flex justify-center">
                        {navLinks.map((item, i) => {
                            return (
                                <li key={`${item}-${i}`} className="px-5">
                                    <a className="hover:text-rose-500 duration-300" href="#player">
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <p className="mb-0">© {new Date().getFullYear()} Trillo Music.</p>
            </div>
        </footer>
    );
};
