import { createStore } from "redux";
import todosReducer from "../reducers/todos";

export default () => {
  const store = createStore(todosReducer);

  return store;
};
