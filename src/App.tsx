import { Component, JSX } from "react";
import { Homepage } from "./Homepage";
import { Timer } from "./Timer";

type Page = 
  | {kind: "homepage"}
  | {kind: "timer"};

type AppState = {
  show: Page;
};

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { show: { kind: "homepage" } };
  }

  render = (): JSX.Element => {
    return this.state.show.kind === "homepage" ? (<Homepage/>) : (<Timer/>)
  }
}