// ACTION TYPE
const ADD_TODO = "todo/ADD_TODO";
const COMPLETE_TODO = "todo/COMPLETE_TODO";
const SHOW_ALL = "todo/SHOW_ALL";
const SHOW_COMPLETE = "todo/SHOW_COMPLETE";

// ACTION CREATOR
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function showAll() {
  return { type: SHOW_ALL };
}

export function showCompletes() {
  return { type: SHOW_COMPLETE };
}

// REDUCER
const FILTER = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
};
const initState = {
  todoList: [],
  displayTodoList: [],
  filter: FILTER.ALL,
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case ADD_TODO: {
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
    case COMPLETE_TODO: {
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
    case SHOW_ALL: {
      const newState = { ...prevState };
      newState.filter = FILTER.ALL;
      newState.displayTodoList = [...newState.todoList];
      return newState;
    }
    case SHOW_COMPLETE: {
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

export default reducer;
