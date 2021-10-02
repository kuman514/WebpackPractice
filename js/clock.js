import Component from './component';
import intervals from './intervals';

export default class Clock extends Component {
  constructor(props, state) {
    super(props, state);

    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
    intervals.addIntervalId(this.intervalId);

    this.rootElement = document.createElement('div');
    this.rootElement.className  = 'clock';
    this.render = () => {
      this.rootElement.textContent = this.state.date;
      return this.rootElement;
    };
  }
};
