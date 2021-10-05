import Component from './component';
import Content from './content';
import Buttons from './buttons';
import style from '../css/style.module.css';

class Main extends Component {
  constructor(props, state) {
    super(props, state);

    this.content = new Content({}, {
      mode: 'clock'
    });

    this.changeMode = (newMode) => {
      this.content.setState({
        mode: newMode
      });
    };

    this.buttons = new Buttons({
      modes: ['clock', 'stopwatch', 'countdown'],
      onClick: this.changeMode
    }, {});

    this.rootElement = document.querySelector('main');
    this.rootElement.className = 'main';
    this.render = () => {
      this.rootElement.appendChild(this.buttons.render());
      this.rootElement.appendChild(this.content.render());
      return this.rootElement;
    };
  }
}

(new Main({}, {})).render();
