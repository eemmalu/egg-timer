import { useState, useEffect } from "react";

export const Timer = (props: {duration: number; onCancelClick: () => void}) => {
    const [time, setTime] = useState<number>(props.duration);

    // waits one second before changing the time
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [time]);

    // returns formmated version of time in minutes:seconds
    const formatTime = () : string => {
        let minutes: number = Math.floor(time / 60);
        let seconds: number = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return <div className="timer-body">
        <div className="timer">{formatTime()}</div>
        <button onClick={props.onCancelClick}>Back</button>
    </div>
}