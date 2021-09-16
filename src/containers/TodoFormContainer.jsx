import { /*connect,*/ useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import TodoForm from "../components/TodoForm";
import { useCallback } from "react";

/*
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
  };
};

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
*/

function TodoFormContainer() {
  const dispatch = useDispatch();
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  return <TodoForm addTodo={add} />;
}

export default TodoFormContainer;
