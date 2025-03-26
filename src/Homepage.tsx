import { Component, JSX } from "react";

type HomepageState = {
};

export class Homepage extends Component<{}, HomepageState> {
  constructor(props: {}) {
    super(props);
  }

  render = (): JSX.Element => {
    return <>
      <div>homepage</div>
    </>
  }
}