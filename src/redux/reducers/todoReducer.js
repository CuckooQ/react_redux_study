import ACTION from "../actions/todoActions";

const FILTER = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
};

const initState = {
  todoList: [],
  displayTodoList: [],
  filter: FILTER.ALL,
};

function todoReducer(prevState = initState, action) {
  switch (action.type) {
    case ACTION.ADD_TODO: {
      const newState = { ...prevState };
      const todo = {
        id: newState.todoList.length,
        title: action.text,
        done: false,
      };
      newState.todoList = [...newState.todoList, todo];
      newState.displayTodoList = [...newState.todoList];
      newState.filter = FILTER.ALL;
      return newState;
    }
    case ACTION.COMPLETE_TODO: {
      const newState = { ...prevState };
      const idx = newState.todoList.findIndex((todo) => todo.id === action.id);
      if (idx >= 0) {
        newState.todoList[idx].done = true;
        newState.todoList = [...newState.todoList];
      }
      newState.displayTodoList = [...newState.todoList];
      newState.filter = FILTER.ALL;
      return newState;
    }
    case ACTION.SHOW_ALL: {
      const newState = { ...prevState };
      newState.filter = FILTER.ALL;
      newState.displayTodoList = [...newState.todoList];
      return newState;
    }
    case ACTION.SHOW_COMPLETE: {
      const newState = { ...prevState };
      newState.filter = FILTER.COMPLETE;
      newState.displayTodoList = [
        ...[...newState.todoList].filter((todo) => todo.done === true),
      ];
      return newState;
    }
    default:
  }
  return prevState;
}

export default todoReducer;
