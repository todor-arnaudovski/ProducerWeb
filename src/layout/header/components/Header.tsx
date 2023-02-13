import { forwardRef, useEffect, useRef, useState } from "react";
import Logo from "../../../assets/logos/logo.png";

import styles from "../assets/Header.module.scss";
import { HamburgerIcon } from "./HamburgerIcon";
import { navLinks, email } from "../../../data/siteData";
import { usePageIsScrolled } from "../../../hooks/useIsPageScrolled";

interface HeaderProps {
    setIsLoadedHandler: (state: boolean) => void;
}

export const Header = forwardRef(
    (props: HeaderProps, ref: React.LegacyRef<HTMLElement> | undefined) => {
        const { setIsLoadedHandler } = props;
        const [isNavbarOpen, setIsNavbarOpen] = useState(false);
        const logoRef = useRef<HTMLImageElement>(null);
        const isScrolled = usePageIsScrolled();

        useEffect(() => {
            const onLoad = () => {
                setIsLoadedHandler(true);
            };
            logoRef?.current?.addEventListener("load", onLoad);
            return () => {
                logoRef.current?.removeEventListener("load", onLoad);
            };
        }, []);

        const toggleNavbarHandler = () => {
            setIsNavbarOpen(!isNavbarOpen);
        };

        const closedClass = [!isNavbarOpen && styles["closed"]].filter(Boolean).join(" ");

        return (
            <header
                ref={ref}
                className={`fixed top-0 left-0 w-full z-50 bg-white duration-500 ${
                    isScrolled ? "shadow-md py-3" : "shadow py-7"
                }`}
            >
                <nav className={`${styles["navbar"]}`}>
                    <div className="container flex flex-wrap items-center justify-between">
                        <a href="#" className="z-20">
                            <img
                                ref={logoRef}
                                src={Logo}
                                className={`${styles["logo"]} invert`}
                                alt="Koldmane Logo"
                            />
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
                            className={`${styles["navbar-collapse"]} ${closedClass} flex flex-col lg:flex-row grow w-screen bg-white z-10 lg:w-auto h-screen lg:h-auto px-5 lg:px-0`}
                        >
                            <ul className="lg:flex lg:mx-auto">
                                {navLinks.map((link, i) => {
                                    return (
                                        <li key={`${link}-${i}`} className="lg:px-5 py-3">
                                            <a
                                                href={`#${link}`}
                                                className={`${styles["nav-link"]} font-bold block hover-underline`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div>
                                <span
                                    className={`text-sm duration-300 ${
                                        isScrolled && "text-slate-400"
                                    }`}
                                >
                                    Contact me:
                                </span>
                                <br />{" "}
                                <a
                                    href={`mailto:${email}`}
                                    className="font-bold hover:text-rose-500 duration-300"
                                >
                                    {email}
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
);
