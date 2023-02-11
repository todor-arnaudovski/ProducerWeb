import { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/logos/trillo-logo-1.png";

import styles from "../assets/Header.module.scss";
import { HamburgerIcon } from "./HamburgerIcon";

const navLinks = ["Player", "New Release", "My Music", "AboutMe", "Socials"];

export const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    const toggleNavbarHandler = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const navbarDynamicClassNames = [!isNavbarOpen && styles["closed"]].filter(Boolean).join(" ");

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-50">
            <nav className={`${styles["navbar"]} shadow`}>
                <div className="container flex flex-wrap items-center justify-between">
                    <a href="#" className="z-20">
                        <img src={Logo} className={`${styles["logo"]}`} alt="Trillo Logo" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="md:hidden z-20"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={toggleNavbarHandler}
                    >
                        <HamburgerIcon />
                    </button>
                    <div
                        className={`${styles["navbar-collapse"]} ${navbarDynamicClassNames} flex flex-col lg:flex-row grow w-screen bg-white z-10 lg:w-auto h-screen lg:h-auto px-5 lg:px-0`}
                    >
                        <ul className="lg:flex lg:mx-auto">
                            {navLinks.map((link, i) => {
                                return (
                                    <li key={i}>
                                        <a
                                            href={`#${link}`}
                                            className={`${styles["nav-link"]} lg:px-5 py-3 font-bold`}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div>
                            Contact me:{" "}
                            <a
                                href="mailto:trillobeats@gmail.com"
                                className="font-bold text-rose-500"
                            >
                                contact@koldmane.com
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
