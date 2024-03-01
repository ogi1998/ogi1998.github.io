import { useEffect, useState } from "react";
import { theme } from "../../theme";

const useResponsive = () => {
    const { screens } = theme;
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            setWinWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return winWidth <= Number(screens.mob.max.slice(0, -2));
}

export default useResponsive;