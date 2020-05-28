import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todos";
import { v4 as uuidv4 } from "uuid";

const AddTodo = (props) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const val = e.target.val.value;
          props.dispatch(addTodo({ id: uuidv4(), val }));
          e.target.val.value = "";
        }}
      >
        <input placeholder="add todo here" name="val" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
