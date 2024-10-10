import React from "react";

export class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.isComplete} />
        {this.props.children}
      </div>
    );
  }
}
