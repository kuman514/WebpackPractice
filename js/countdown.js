import Component from './component';
import CountdownControl from './countdown_control';
import CountdownTimestamp from './countdown_timestamp';
import CountdownTimeAmount from './countdown_timeamount';
import intervals from './intervals';

export default class Countdown extends Component {
  constructor(props, state) {
    super(props, state);

    this.countdownInterval = null;
    this.deltaOrg = null;

    this.timestamp = new CountdownTimestamp({}, {
      remaining: 0
    });

    this.startCountdown = () => {
      this.deltaOrg = Date.now();
      this.countdownInterval = setInterval(() => {
        const deltaDst = Date.now();
        const deltaTime = deltaDst - this.deltaOrg;
        const totalTime = this.timestamp.state.remaining - deltaTime;
        this.timestamp.setState({
          remaining: totalTime
        });
        this.deltaOrg = Date.now();
      }, 10);
      intervals.addIntervalId(this.countdownInterval);

      this.controller.setState({
        isRunning: true
      });
    };
    this.stopCountdown = () => {
      if (this.countdownInterval) {
        intervals.stopInterval(this.countdownInterval);
        this.countdownInterval = null;

        this.controller.setState({
          isRunning: false
        });
      }
    };
    this.resetCountdown = () => {
      this.stopCountdown();
      this.timestamp.setState({
        remaining: this.timeAmount.getTotalMs()
      });
    };

    this.controller = new CountdownControl({
      onStart: this.startCountdown,
      onStop: this.stopCountdown,
      onReset: this.resetCountdown
    }, {
      isRunning: false
    });

    this.changeTimeAmount = () => {
      this.stopCountdown();
      this.timestamp.setState({
        remaining: this.timeAmount.getTotalMs()
      });
    };
    this.timeAmount = new CountdownTimeAmount({
      onChange: this.changeTimeAmount
    }, {});

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'countdown';

    this.render = () => {
      this.rootElement.appendChild(this.timeAmount.render());
      this.rootElement.appendChild(this.controller.render());
      this.rootElement.appendChild(this.timestamp.render());
      return this.rootElement;
    }
  }
};
