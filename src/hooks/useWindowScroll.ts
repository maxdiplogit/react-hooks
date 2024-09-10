// Hooks
import { useState, useEffect } from "react";

// Interfaces
interface ScrollPosition {
    scrollX: number,
    scrollY: number
};


const useWindowScroll = () => {
    const [ scrollPosition, setScrollPostion ] = useState<ScrollPosition>({
        scrollX: window.scrollX,
        scrollY: window.scrollY
    });

    useEffect(() => {
        const handleWindowScroll = () => {
            setScrollPostion({
                scrollX: window.scrollX,
                scrollY: window.scrollY
            });
        };

        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    });

    return scrollPosition;
};


export default useWindowScroll;