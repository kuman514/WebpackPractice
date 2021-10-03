import Component from './component';
import StopwatchControl from './stopwatch_control';
import StopwatchTimestamp from './stopwatch_timestamp';
import intervals from './intervals';

export default class Stopwatch extends Component {
  constructor(props, state) {
    super(props, state);

    this.stopwatchInterval = null;
    this.deltaOrg = null;

    this.timestamp = new StopwatchTimestamp({}, {
      elapsed: 0
    });

    this.startStopwatch = () => {
      this.deltaOrg = Date.now();
      this.stopwatchInterval = setInterval(() => {
        const deltaDst = Date.now();
        const deltaTime = deltaDst - this.deltaOrg;
        const totalTime = this.timestamp.state.elapsed + deltaTime;
        this.timestamp.setState({
          elapsed: totalTime
        });
        this.deltaOrg = Date.now();
      }, 10);
      intervals.addIntervalId(this.stopwatchInterval);

      this.controller.setState({
        isRunning: true
      });
    };
    this.stopStopwatch = () => {
      if (this.stopwatchInterval) {
        intervals.stopInterval(this.stopwatchInterval);
        this.stopwatchInterval = null;

        this.controller.setState({
          isRunning: false
        });
      }
    };
    this.resetStopwatch = () => {
      this.stopStopwatch();
      this.timestamp.setState({
        elapsed: 0
      });
    };

    this.controller = new StopwatchControl({
      onStart: this.startStopwatch,
      onStop: this.stopStopwatch,
      onReset: this.resetStopwatch
    }, {
      isRunning: false
    });

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'stopwatch';

    this.render = () => {
      this.rootElement.appendChild(this.controller.render());
      this.rootElement.appendChild(this.timestamp.render());
      return this.rootElement;
    }
  }
};
