import { Parallax } from "react-scroll-parallax";

interface SplitLettersProps {
    text: string;
}

export const SplitLetters = (props: SplitLettersProps) => {
    const { text } = props;

    if (!text || text.length <= 0) return <></>;
    return (
        <>
            {text.split("").map((letter, i) => (
                <Parallax key={`copy-${i}`} translateX={[0, 1 * (i - 3)]} className="inline-block">
                    {letter}
                </Parallax>
            ))}
        </>
    );
};
