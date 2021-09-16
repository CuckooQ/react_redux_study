import "./App.css";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <TodoListContainer />
        <TodoFormContainer />
      </main>
    </div>
  );
}

export default App;
