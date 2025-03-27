import { useState } from "react";
import { Homepage } from "./Homepage";
import { Timer } from "./Timer";

type Page = 
  | {kind: "homepage"}
  | {kind: "timer"};

export const App = () => {
  const [page, setPage] = useState<Page>({kind: "homepage"});
  const [duration, setDuration] = useState<number>(0);

  const doEggTimerClick = (boilTime : number): void => {
    setDuration(boilTime);
  }

  const doStartClick = (): void => {
    setPage({kind: "timer"});
  }

  const doCancelClick = (): void => {
    setPage({kind: "homepage"});
  }
  
  return page.kind === "homepage" ? (<Homepage onEggTimerClick={doEggTimerClick} onStartClick={doStartClick}/>) : (<Timer duration={duration} onCancelClick={doCancelClick}/>);
}