import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import NoteList from "./components/NoteList";
function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <NoteList />
    </div>
  );
}

export default App;
