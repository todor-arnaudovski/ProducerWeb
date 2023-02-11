interface LinkProps {
    children: React.ReactNode;
    href: string;
    asButton?: boolean;
}

export const Link = (props: LinkProps) => {
    const { children, href, asButton = false } = props;

    return (
        <a
            href={href}
            className="inline-block color-white rounded-full px-5 py-3 hover:bg-rose-500 border-2 border-white hover:border-rose-500 duration-300"
        >
            {children}
        </a>
    );
};
