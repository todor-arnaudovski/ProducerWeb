import Logo from "../../../assets/logos/logo.png";
import styles from "../assets/Footer.module.scss";
import { socials, navLinks, email } from "../../../data/siteData";

export const Footer = () => {
    return (
        <footer className={`${styles["footer"]} bg-black text-white py-28`}>
            <div className="container text-center">
                <a href="#" className="inline-block mb-5">
                    <img className={styles["logo"]} src={Logo} alt="Koldmane Logo" />
                </a>
                <div className={`${styles["icons-wrapper"]} mb-5`}>
                    <ul className="flex justify-center">
                        {socials.map((platform, i) => {
                            return (
                                <li key={i} className="text-3xl mx-2">
                                    <a
                                        href={platform.url}
                                        className="hover:text-rose-500 duration-300"
                                        target={platform.url !== "#" ? "_blank" : "_top"}
                                    >
                                        {<platform.Icon />}
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
                        href={`mailto:${email}`}
                    >
                        {email}
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
                <p className="mb-0">© {new Date().getFullYear()} Koldmane Music.</p>
            </div>
        </footer>
    );
};
