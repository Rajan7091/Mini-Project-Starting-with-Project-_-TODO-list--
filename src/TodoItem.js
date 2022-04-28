import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log("Clicked!");
  }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <label> {this.state.text} </label>
      </div>
    );
  }
}

export default TodoItem;
