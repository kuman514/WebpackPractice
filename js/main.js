import Component from './component';
import Content from './content';
import Buttons from './buttons';

class Main extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.querySelector('main');
    this.rootElement.className  = 'main';
    this.render = () => {
      this.rootElement.appendChild(new Content({}, {
        mode: 'clock'
      }).render());

      return this.rootElement;
    };
  }
}

(new Main({}, {})).render();
