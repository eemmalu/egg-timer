import { useState } from "react";
import { Homepage } from "./Homepage";
import { Timer } from "./Timer";

type Page = 
  | {kind: "homepage"}
  | {kind: "timer"};

export const App = () => {
  const [page, setPage] = useState<Page>({kind: "homepage"});
  
  return page.kind === "homepage" ? (<Homepage/>) : (<Timer duration={100}/>);
}