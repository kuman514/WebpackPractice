import Component from './component';

export default class StopwatchControl extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'stopwatch-control';

    this.rootElement.addEventListener('click', (event) => {
      switch (event.target.id) {
        case 'stopwatch-start':
          this.props.onStart();
          break;
        case 'stopwatch-stop':
          this.props.onStop();
          break;
        case 'stopwatch-reset':
          this.props.onReset();
          break;
      }
    });

    this.render = () => {
      const startButton = document.createElement('button');
      startButton.id = 'stopwatch-start';
      startButton.textContent = 'Start';

      const stopButton = document.createElement('button');
      stopButton.id = 'stopwatch-stop';
      stopButton.textContent = 'Stop';

      const resetButton = document.createElement('button');
      resetButton.id = 'stopwatch-reset';
      resetButton.textContent = 'Reset';

      this.rootElement.appendChild(startButton);
      this.rootElement.appendChild(stopButton);
      this.rootElement.appendChild(resetButton);

      return this.rootElement;
    }
  }
};
