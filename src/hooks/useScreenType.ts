import { useEffect, useState } from "react";

export const useScreenType = () => {
    const [screenType, setScreenType] = useState({
        isXs: true,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window?.innerWidth || 0;

            setScreenType({
                isXs: width < 640,
                isSm: width >= 576 && width < 768,
                isMd: width >= 768 && width < 1024,
                isLg: width >= 1024 && width < 1280,
                isXl: width >= 1280,
            });
        };

        handleResize();
        window?.addEventListener('resize', handleResize);
        return () => {
            window?.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenType;
};