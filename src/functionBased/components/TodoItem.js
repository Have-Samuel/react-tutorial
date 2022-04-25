import React from "react";

class TodoItem extends React.Component {
  render() {
    return ( 
    <li>
       <input type="checked"
        checked={this.props.todo.title}
        onChange={() => console.log("click")}
        />
      </li>
    )
  }
  }

export default TodoItem;