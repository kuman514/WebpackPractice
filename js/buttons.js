import Component from './component';

export default class Buttons extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'buttons';
    this.rootElement.addEventListener('click', (event) => {
      const parsedId = parseInt(event.target.id);
      if (parsedId === null || parsedId === undefined || Number.isNaN(parsedId)) {
        return;
      }
      this.props.onClick(this.props.modes[parsedId]);
    });

    this.render = () => {
      const buttons = Array.from({
        length: this.props.modes.length
      }, (_, index) => {
        const button = document.createElement('button');
        button.id = index;
        button.textContent = this.props.modes[index];
        return button;
      });
      
      buttons.forEach((item) => {
        this.rootElement.appendChild(item);
      });

      return this.rootElement;
    };
  }
};
