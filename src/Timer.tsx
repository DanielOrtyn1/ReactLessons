import { Component } from "react";

interface ITimerState {
  seconds: number;
  interval?: NodeJS.Timer;
}


export class Timer extends Component<any, ITimerState, any> {
  constructor(props: any) {
    super(props);
    this.state = { seconds: 0, interval: undefined };
  }

  tick() {
    this.setState({
      seconds: this.state.seconds+1
    });
  }

  componentDidMount() {
    const tickSpacing = 1 * 1000;
    this.setState({
      interval: setInterval(() => this.tick(), tickSpacing)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

