const ACTION = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETE: "SHOW_COMPLETE",
};

export function addTodo(text) {
  return { type: ACTION.ADD_TODO, text };
}

export function completeTodo(id) {
  return { type: ACTION.COMPLETE_TODO, id };
}

export function showAll() {
  return { type: ACTION.SHOW_ALL };
}

export function showCompletes() {
  return { type: ACTION.SHOW_COMPLETE };
}

export default ACTION;
