const code = `import * as React from 'react';

interface IState {
  clicks: number;
}

export class Clicker extends React.Component<any, IState> {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  public clickHandler = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  public render() {
    return (
      <div>
        <p>You have clicked the button {this.state.clicks} time(s).</p>
        <p>
          <button onClick={this.clickHandler}>click me</button>
        </p>
      </div>
    );
  }
}`;

 export default code;