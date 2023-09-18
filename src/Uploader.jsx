import { useRef } from "react";
import { asyncTimeout } from "./utils"

export function Uploader(props) {
    const propsRef = useRef();
    propsRef.current = props;

    const upload = async () => {
        for (let i = 0; i < 3; i++) {
            await asyncTimeout(800);
            propsRef.current.onItemCompleted(`Item ${i + 1}`);
        }
        await asyncTimeout(800);
        propsRef.current.onAllCompleted();
    };

    return <button onClick={upload}>Start the fun</button>
}