interface ButtonProps {
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { children } = props;

    return <button type="button">{children}</button>;
};
