import { useState } from "react";
import { Homepage } from "./Homepage";
import { Timer } from "./Timer";

type Page = 
  | {kind: "homepage"}
  | {kind: "timer"};

export const App = () => {
  const [page, setPage] = useState<Page>({kind: "homepage"});
  const [duration, setDuration] = useState<number>(0);

  // updates boil duration based on the egg type 
  const doEggTimerClick = (boilTime : number): void => {
    setDuration(boilTime);
    setPage({kind: "timer"});
  }

  // cancels timer and returns to homepage
  const doCancelClick = (): void => {
    setPage({kind: "homepage"});
  }
  
  return page.kind === "homepage" ? (<Homepage onEggTimerClick={doEggTimerClick}/>) : (<Timer duration={duration} onCancelClick={doCancelClick}/>);
}