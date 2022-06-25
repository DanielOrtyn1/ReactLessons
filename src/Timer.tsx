import { Component } from "react";

interface ITimerState {
  start: number;
  time: string;
  interval?: NodeJS.Timer;
}
const tickSpacing = 100;


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
    console.log('start');
    this.setStartTime();
  }

  componentWillUnmount() {
    console.log('end');
    clearInterval(this.state.interval);
  }

  setStartTime() {
    this.setState({
      start: Date.now()
    });
    this.startTimer();
  }

  startTimer() {
    this.endTimer();
    const newInterval = setInterval(() => this.tick(), tickSpacing);
    this.setState({
      interval: newInterval
    });
  }

  endTimer() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setStartTime()}>
          Restart
        </button>
        <button onClick={() => this.startTimer()}>
          Start
        </button>
        <button onClick={() => this.endTimer()}>
          Stop
        </button>
        <div>
          {`Seconds: ${this.state.time}`}
        </div>
      </div>
    );
  }
}

