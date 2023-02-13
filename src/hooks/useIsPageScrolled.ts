import { useEffect, useState } from "react";

export const usePageIsScrolled = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkIfScrolled = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", checkIfScrolled);
        return () => {
            window.removeEventListener("scroll", checkIfScrolled);
        };
    }, []);

    return isScrolled;
};
