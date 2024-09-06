import { useState, useEffect } from "react";


const useKeyPress = () => {
    const [ keyPressed, setKeyPressed ] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            setKeyPressed(event.key);
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return keyPressed;
};


export default useKeyPress;