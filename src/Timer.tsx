import { useState, useEffect } from "react";

export const Timer = (props: {duration: number}) => {

    const [time, setTime] = useState<number>(props.duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);
    }, [time]);

    return <>
        <div>{time}</div>
    </>
}