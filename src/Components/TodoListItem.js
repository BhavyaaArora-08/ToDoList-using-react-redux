import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../redux/actions/todos";

const TodoListItem = (props) => {
  return (
    <div>
      <p>{props.todo}</p>
      <p
        onClick={(e) => {
          e.preventDefault();
          props.dispatch(removeTodo(props.id));
        }}
      >
        remove
      </p>
    </div>
  );
};

export default connect()(TodoListItem);
