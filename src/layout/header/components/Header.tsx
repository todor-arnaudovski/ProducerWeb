import { useState } from "react";
import Logo from "../../../assets/logos/trillo-logo-1.png";

import styles from "../assets/Header.module.scss";
import { HamburgerIcon } from "./HamburgerIcon";

const navLinks = ["Player", "New Release", "My Music", "AboutMe", "Socials"];

export const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbarHandler = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const navbarDynamicClassNames = [!isNavbarOpen && styles["closed"]]
        .filter(Boolean)
        .join(" ");

    return (
        <nav className={`${styles["navbar"]} shadow`}>
            <div className="container flex flex-wrap items-center justify-between">
                <a href="#" className="z-20">
                    <img src={Logo} className={`${styles["logo"]}`} />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={toggleNavbarHandler}
                >
                    <HamburgerIcon />
                </button>
                <div
                    className={`${styles["navbar-collapse"]} ${navbarDynamicClassNames} flex flex-col justify-center align-middle w-screen lg:w-auto h-screen lg:h-auto z-10`}
                >
                    <ul className="lg:flex">
                        {navLinks.map((link, i) => {
                            return (
                                <li key={i}>
                                    <a
                                        href={`#${link}`}
                                        className={`${styles["nav-link"]} px-5 py-3 font-bold`}
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
                            trillobeats@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
