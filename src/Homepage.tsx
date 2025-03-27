export const Homepage = (props: {onEggTimerClick: (boilTime: number) => void; onStartClick: () => void}) => {
    return <>
        <button onClick={() => props.onEggTimerClick(240)}>Runny</button>
        <button onClick={() => props.onEggTimerClick(360)}>Softboiled</button>
        <button onClick={() => props.onEggTimerClick(600)}>Hardboiled</button>
        <button onClick={props.onStartClick}>Start!</button>
    </>
}