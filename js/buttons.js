import Component from './component';

export default class Buttons extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'buttons';
    this.render = () => {
      return this.rootElement;
    };
  }
};
