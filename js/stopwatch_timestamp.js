import Component from './component';

export default class StopwatchTimestamp extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'stopwatch-timestamp';

    this.render = () => {
      this.rootElement.textContent = `${this.state.elapsed} ms`;
      return this.rootElement;
    }
  }
};
