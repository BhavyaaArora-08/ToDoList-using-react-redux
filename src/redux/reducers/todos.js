const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      // console.log(state);
      return [...state, action.todo];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => {
        return todo.id != action.id;
      });
    }
  }
};
