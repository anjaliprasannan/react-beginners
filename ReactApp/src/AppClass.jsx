import React from "react";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Anjali", age: 27 };
  }
  render() {
    const handleclick = () => {
      this.setState({ name: "Prasannan" });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };

    return (
      <h1 onClick={handleclick}>
        Hi {this.state.name} {this.state.age}
      </h1>
    );
  }
}
