import { useState, useEffect } from "react";

export const Timer = (props: {duration: number}) => {
    const [time, setTime] = useState<number>(props.duration);

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [time]);

    const formatTime = () : string => {
        let minutes: number = Math.floor(time / 60);
        let seconds: number = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return <>
        <div>{formatTime()}</div>
    </>
}