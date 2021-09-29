import Component from './component';

export default class Clock extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className  = 'clock';
    this.render = () => {
      this.rootElement.textContent = this.state.date;
      return this.rootElement;
    };
  }
}
