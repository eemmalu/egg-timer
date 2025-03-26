import { Component, JSX } from "react";

type TimerProps = {
    seconds: bigint;
}

type TimerState = {
};

export class Timer extends Component<{}, TimerState> {
  constructor(props: TimerProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return <>
      <div>timer</div>
    </>
  }
}