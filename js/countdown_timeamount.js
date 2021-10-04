import Component from './component';

const MILLISECONDS_PER_HOUR = 3600 * 1000;
const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_SECOND = 1000;

export default class CountdownTimeAmount extends Component {
  constructor(props, state) {
    super(props, state);

    // Elements
    this.hourSetter = document.createElement('input');
    this.hourSetter.type = 'number';
    this.hourSetter.value = '0';
    this.hourSetter.min = '0';
    this.hourSetter.max = '99';

    this.minuteSetter = document.createElement('input');
    this.minuteSetter.type = 'number';
    this.minuteSetter.value = '0';
    this.minuteSetter.min = '0';
    this.minuteSetter.max = '59';

    this.secondSetter = document.createElement('input');
    this.secondSetter.type = 'number';
    this.secondSetter.value = '0';
    this.secondSetter.min = '0';
    this.secondSetter.max = '59';

    // Total milliseconds
    this.getTotalMs = () => {
      let totalMs = 0;
      totalMs += (this.hourSetter.value * MILLISECONDS_PER_HOUR);
      totalMs += (this.minuteSetter.value * MILLISECONDS_PER_MINUTE);
      totalMs += (this.secondSetter.value * MILLISECONDS_PER_SECOND);
      return totalMs;
    };

    this.rootElement = document.createElement('div');
    this.rootElement.className = 'countdown-timeamount';
    this.rootElement.addEventListener('change', () => {
      this.props.onChange();
    });

    this.render = () => {
      this.rootElement.appendChild(this.hourSetter);
      this.rootElement.appendChild(this.minuteSetter);
      this.rootElement.appendChild(this.secondSetter);
      return this.rootElement;
    };
  }
};
