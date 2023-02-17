import Logo from "../../../assets/logos/logo.png";
import styles from "../assets/Footer.module.scss";
import { socials, navLinks, email } from "../../../data/siteData";

interface FooterProps {
    sectionRefs: React.RefObject<HTMLElement>[];
}

export const Footer = (props: FooterProps) => {
    const { sectionRefs } = props;

    const navLinkClickHandler = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        if (sectionRefs[index].current) {
            const el = sectionRefs[index].current;
            if (!el) return;
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const scrollToTopHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={`${styles["footer"]} bg-black text-white pt-28 pb-32`}>
            <div className="container text-center">
                <a href="#" onClick={scrollToTopHandler} className="inline-block mb-5">
                    <img className={styles["logo"]} src={Logo} alt="Koldmane Logo" />
                </a>
                <div className={`${styles["icons-wrapper"]} mb-5`}>
                    <ul className="flex justify-center flex-wrap">
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
                    <ul className="flex justify-center flex-wrap">
                        {navLinks.map((item, i) => {
                            return (
                                <li key={`${item.id}-${i}`} className="px-5">
                                    <a
                                        href="#"
                                        onClick={(e) => navLinkClickHandler(e, i)}
                                        className="hover:text-rose-500 duration-300"
                                    >
                                        {item.title}
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
