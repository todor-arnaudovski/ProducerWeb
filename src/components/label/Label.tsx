import styles from "./Label.module.scss";

interface LabelProps {
    children: React.ReactNode;
}

export const Label = (props: LabelProps) => {
    const { children } = props;

    return (
        <div
            className={`${styles["label"]} absolute z-40 left-5 top-5 rounded-full bg-rose-500 flex items-center justify-center`}
        >
            <span className="text-center text-sm text-white leading-3 font-bold">{children}</span>
        </div>
    );
};
