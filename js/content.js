import Component from './component';
import Clock from './clock';

export default class Content extends Component {
  constructor(props, state) {
    super(props, state);

    this.intervalId = null;
    this.clearInterval = () => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    this.setClockInterval = (clock) => {
      this.intervalId = setInterval(() => {
        clock.setState({
          date: new Date()
        });
      }, 1000);
    }
    this.createClock = () => {
      const clock = new Clock({}, {
        date: new Date()
      });
      this.setClockInterval(clock);
      return clock;
    }

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'content';
    this.render = () => {
      this.rootElement.innerText = '';
      this.clearInterval();

      switch (this.state.mode) {
        case 'clock':
          this.rootElement.appendChild(this.createClock().render());
          break;
      }

      return this.rootElement;
    };
  }
};
