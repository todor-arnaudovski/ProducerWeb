import { forwardRef, useEffect, useRef, useState } from "react";
import Logo from "../../../assets/logos/logo.png";

import styles from "../assets/Header.module.scss";
import { HamburgerIcon } from "./HamburgerIcon";
import { navLinks, email } from "../../../data/siteData";
import { usePageIsScrolled } from "../../../hooks/useIsPageScrolled";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { ConditionalWrapper } from "../../../components/conditionalWrapper/ConditionalWrapper";

interface HeaderProps {
    headerHeight: number;
    setIsLoadedHandler: (state: boolean) => void;
    sectionRefs: React.RefObject<HTMLElement>[];
}

export const Header = forwardRef(
    (props: HeaderProps, ref: React.LegacyRef<HTMLElement> | undefined) => {
        const { setIsLoadedHandler, headerHeight, sectionRefs } = props;
        const [isNavbarOpen, setIsNavbarOpen] = useState(false);
        const logoRef = useRef<HTMLImageElement>(null);
        const isScrolled = usePageIsScrolled();
        const isMobile = useIsMobile();

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

        const navLinkClickHandler = (e: React.MouseEvent<HTMLElement>, index: number) => {
            e.preventDefault();
            if (sectionRefs[index].current) {
                const el = sectionRefs[index].current;
                if (!el) return;
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                setIsNavbarOpen(false);
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
                        <a href="#" onClick={scrollToTopHandler} className="z-50">
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
                            className="lg:hidden z-50"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            onClick={toggleNavbarHandler}
                        >
                            <HamburgerIcon />
                        </button>
                        <div
                            className={`${styles["navbar-collapse"]} ${closedClass} flex flex-col lg:flex-row grow bg-white z-40 w-screen lg:w-auto h-screen lg:h-auto py-5 lg:py-0 px-0 shadow lg:shadow-none`}
                            style={{ paddingTop: isMobile ? "95px" : "" }}
                        >
                            <ConditionalWrapper
                                condition={isMobile}
                                wrapper={(children) => <div className="container">{children}</div>}
                            >
                                <ul className="flex flex-col lg:flex-row lg:mx-auto">
                                    {navLinks.map((link, i) => {
                                        return (
                                            <li
                                                key={`${link.id}-${i}`}
                                                className="self-start lg:px-5 py-3"
                                            >
                                                <a
                                                    href="#"
                                                    onClick={(e) => navLinkClickHandler(e, i)}
                                                    className={`${styles["nav-link"]} font-bold block hover-underline`}
                                                >
                                                    {link.title}
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
                            </ConditionalWrapper>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
);
