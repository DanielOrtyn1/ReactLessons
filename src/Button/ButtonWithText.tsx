import { Component } from "react";

interface IButtonWithTextProps {
  text: string;
  callBack: () => {};
}

export class ButtonWithText extends Component<IButtonWithTextProps, any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <button className="Square-button"
          onClick={() => this.props.callBack()}
        >
          {this.props.text}
        </button>
    );
  }
}

