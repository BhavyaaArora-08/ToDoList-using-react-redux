import React from "react";
import ReactDOM from "react-dom";
import TodoListApp from "./Components/TodoListApp";
import { Provider } from "react-redux"; // It helps to provide the store will all the react components
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./redux/store/configureStore";
import { addTodo } from "./redux/actions/todos";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  document.getElementById("root")
);
