import Component from './component';
import '../css/stopwatch_timestamp.css';

const MILLISECONDS_PER_HOUR = 3600 * 1000;
const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_SECOND = 1000;

export default class StopwatchTimestamp extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'stopwatch-timestamp';

    this.render = () => {
      let remainMs = this.state.elapsed;

      const hr = String(Math.floor(remainMs / MILLISECONDS_PER_HOUR)).padStart(2, '0');
      remainMs %= MILLISECONDS_PER_HOUR;

      const min = String(Math.floor(remainMs / MILLISECONDS_PER_MINUTE)).padStart(2, '0');
      remainMs %= MILLISECONDS_PER_MINUTE;

      const sec = String(Math.floor(remainMs / MILLISECONDS_PER_SECOND)).padStart(2, '0');
      remainMs %= MILLISECONDS_PER_SECOND;

      const ms = String(Math.floor(remainMs / 10)).padStart(2, '0');

      this.rootElement.textContent = `${hr}:${min}:${sec}.${ms}`;
      return this.rootElement;
    }
  }
};
