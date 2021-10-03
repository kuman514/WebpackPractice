import Component from './component';
import Clock from './clock';
import intervals from './intervals';
import Stopwatch from './stopwatch';

export default class Content extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'content';
    this.render = () => {
      this.rootElement.innerText = '';
      intervals.clearAllIntervals();

      switch (this.state.mode) {
        case 'clock':
          this.rootElement.appendChild(new Clock({}, {
            date: new Date()
          }).render());
          break;
        case 'stopwatch':
          this.rootElement.appendChild(new Stopwatch({}, {}).render());
          break;
        case 'countdown':
          break;
      }

      return this.rootElement;
    };
  }
};
