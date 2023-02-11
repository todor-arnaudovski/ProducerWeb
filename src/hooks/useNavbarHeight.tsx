import { useEffect, useState } from "react";

const useNavbarHeight = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const navbar = document.getElementById("navbar-main");

        if (navbar) setHeight(navbar.getBoundingClientRect().height);
    }, []);

    return height;
};

export default useNavbarHeight;
