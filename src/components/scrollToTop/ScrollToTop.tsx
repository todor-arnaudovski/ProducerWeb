import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import styles from "./ScrollToTop.module.scss";

export const ScrollToTop = () => {
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        setIsHidden(window.scrollY <= 0);
        const changeHidden = () => {
            setIsHidden(window.scrollY <= 0);
        };
        window.addEventListener("scroll", changeHidden);
        return () => {
            window.removeEventListener("scroll", changeHidden);
        };
    }, []);

    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`${styles["icon"]} ${isHidden && "opacity-0"}`}
            onClick={scrollToTopHandler}
        >
            <BsChevronUp />
        </button>
    );
};
