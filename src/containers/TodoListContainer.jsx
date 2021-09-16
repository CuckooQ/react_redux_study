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
  const todo = useSelector((state) => state.todo);
  return <TodoList todoList={todo.todoList} />;
}

export default TodoListContainer;
