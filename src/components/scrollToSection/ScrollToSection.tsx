import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { usePageIsScrolled } from "../../hooks/useIsPageScrolled";

interface ScrollToSectionProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export const ScrollToSection = (props: ScrollToSectionProps) => {
    const { sectionRef } = props;
    const [isHidden, setIsHidden] = useState(true);
    const [isRemoved, setIsRemoved] = useState(true);
    const isScrolled = usePageIsScrolled();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isScrolled) {
            setIsHidden(isScrolled);
            timeoutId = setTimeout(() => {
                setIsRemoved(isScrolled);
            }, 300);
        }

        if (!isScrolled) {
            setIsRemoved(isScrolled);
            timeoutId = setTimeout(() => {
                setIsHidden(isScrolled);
            }, 300);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isScrolled]);

    const onClickHandler = () => {
        if (sectionRef.current) {
            console.log("SCROLL TO", sectionRef.current.getBoundingClientRect().top);
            window.scrollTo({
                top: sectionRef.current.getBoundingClientRect().top - 300,
                left: 0,
                behavior: "smooth",
            });
            // sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return !isRemoved ? (
        <button
            onClick={onClickHandler}
            className={`fixed z-50 left-1/2 mb-12 bottom-0 text-center duration-300 ${
                isHidden && "opacity-0"
            }`}
            style={{ transform: "translateX(-50%)" }}
        >
            <span className="text-sm block mb-2">scroll down</span>
            <BsChevronDown className="mx-auto animate-bounce" />
        </button>
    ) : null;
};
