import { useRef } from "react";
import { asyncTimeout } from "./utils"

export function Uploader({ onItemCompleted, onAllCompleted }) {
    const upload = async () => {
        for (let i = 0; i < 3; i++) {
            await asyncTimeout(800);
            onItemCompleted(`Item ${i + 1}`);
        }
        await asyncTimeout(800);
        onAllCompleted();
    };

    return <button onClick={upload}>Start the fun</button>
}