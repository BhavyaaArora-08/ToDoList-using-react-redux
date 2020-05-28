// ADD_TODO
export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
  };
};

// REMOVE_TODO
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};
