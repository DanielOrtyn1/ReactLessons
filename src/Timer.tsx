import { Component } from "react";

interface ITimerState {
  start: number;
  time: string;
  interval?: NodeJS.Timer;
}


export class Timer extends Component<any, ITimerState, any> {
  constructor(props: any) {
    super(props);
    this.state = { start: 0, time: '0', interval: undefined };
  }

  tick() {
    const seconds = (Date.now() - this.state.start) / 1000;
    const wholeNumber = Math.floor(seconds);
    const decimals = Math.floor((seconds - wholeNumber) * 10);

    let time = `${wholeNumber}.${decimals}`
    time = time.padStart(5, '--');

    this.setState({
      time: time
    });
  }

  componentDidMount() {
    const tickSpacing = 100;
    this.setState({
      start: Date.now(),
      interval: setInterval(() => this.tick(), tickSpacing)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  setStartTime() {
    this.setState({ start: Date.now() })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setStartTime()}>
          Restart
        </button>
        <div>
          {`Seconds: ${this.state.time}`}
        </div>
      </div>
    );
  }
}

