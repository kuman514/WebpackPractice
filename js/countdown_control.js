import Component from './component';

export default class CountdownControl extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'countdown-control';

    this.rootElement.addEventListener('click', (event) => {
      switch (event.target.id) {
        case 'countdown-start':
          this.props.onStart();
          break;
        case 'countdown-stop':
          this.props.onStop();
          break;
        case 'countdown-reset':
          this.props.onReset();
          break;
      }
    });

    this.render = () => {
      this.rootElement.innerText = '';
      if (this.state.isRunning) {
        const stopButton = document.createElement('button');
        stopButton.id = 'countdown-stop';
        stopButton.textContent = 'Stop';

        this.rootElement.appendChild(stopButton);
      } else {
        const startButton = document.createElement('button');
        startButton.id = 'countdown-start';
        startButton.textContent = 'Start';
        
        const resetButton = document.createElement('button');
        resetButton.id = 'countdown-reset';
        resetButton.textContent = 'Reset';

        this.rootElement.appendChild(startButton);
        this.rootElement.appendChild(resetButton);
      }

      return this.rootElement;
    }
  }
};
