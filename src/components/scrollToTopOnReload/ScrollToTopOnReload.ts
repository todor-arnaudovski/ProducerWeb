import React, { useEffect } from "react";

const ScrollToTopOnReload: React.FC = () => {
    useEffect(() => {
        window.location.replace(window.location.href);
    }, []);

    return null;
};

export default ScrollToTopOnReload;
