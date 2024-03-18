import React, { Component } from "react";
import Child from "./Child";

export class Pparent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "initial message"
    };
  }

  newMessage = (newMessage) => {
    this.setState({
      message: newMessage
    });
  }

  render() {
    return (
      <div>
        Message: { this.state.message }
        <Child newMessage={ this.newMessage } />
      </div>
    );
  }
}
export default Pparent;