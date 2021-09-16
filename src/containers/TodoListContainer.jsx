import { /*connect,*/ useSelector } from "react-redux";
import TodoList from "../components/TodoList";

/*
const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
*/

function TodoListContainer() {
  const todoState = useSelector((state) => state.todo);
  return <TodoList todoList={todoState.todoList} />;
}

export default TodoListContainer;
