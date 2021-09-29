export default class Component {
  constructor(props, state) {
    this.props = props;
    this.state = state;

    this.rootElement = document.createElement('div');
    this.render = () => {
      return this.rootElement;
    };

    this.setState = (newState) => {
      for (const [key, value] of Object.entries(newState)) {
        this.state[key] = value;
      }
      this.render();
    };
  }
};
