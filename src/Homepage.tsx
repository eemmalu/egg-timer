import runnyEgg from './assets/Runny_Egg.png';
import softBoiled from './assets/Soft_boiled_Egg.png';
import hardBoiled from './assets/Hardboiled_Egg.png';

export const Homepage = (props: {onEggTimerClick: (boilTime: number) => void}) => {
    return <div className="home-body">
      <div>What kind of egg would you like today?</div>
      <div className="egg-container">
        <button onClick={() => props.onEggTimerClick(240)} className="egg-option">
          <img src={runnyEgg}/>
          <div>Runny Egg</div>
        </button>
        <button onClick={() => props.onEggTimerClick(360)} className="egg-option">
          <img src={softBoiled}/>
          <div>Soft Boiled</div>
        </button>
        <button onClick={() => props.onEggTimerClick(600)} className="egg-option">
          <img src={hardBoiled}/>
          <div>Hard Boiled</div>
        </button>
      </div>
    </div>
}