import { useState } from "react";
import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  render() {
    const increment = () => {
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 };
      });
    };
    return <h1 onClick={increment}>{this.state.counter}</h1>;
  }
}
