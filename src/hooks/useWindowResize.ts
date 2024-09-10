// Hooks
import { useState, useEffect } from "react";


// Interfaces
interface WindowSize {
    width: number,
    height: number
}


const useWindowResize = () => {
    const [ windowSize, setWindowSize ] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
};


export default useWindowResize;