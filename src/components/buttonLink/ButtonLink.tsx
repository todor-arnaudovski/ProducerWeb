import React from "react";

type LinkProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    target?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const ButtonLink: React.FC<LinkProps> = ({ children, className, href, target, onClick }) => {
    return (
        <a
            href={href}
            className={`inline-block color-white rounded-full px-5 py-3 hover:bg-rose-500 border-2 border-white hover:border-rose-500 duration-300 ${className}`}
            target={target}
            onClick={onClick}
        >
            {children}
        </a>
    );
};
