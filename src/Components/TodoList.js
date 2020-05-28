import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoListApp = (props) => {
  return (
    <div>
      <h1>Todolist bro</h1>
      {props.todos === undefined ? (
        <p>Add todos</p>
      ) : (
        props.todos.map((todo) => {
          return <TodoListItem todo={todo.val} id={todo.id} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    todos: state,
  };
};

export default connect(mapStateToProps)(TodoListApp);
