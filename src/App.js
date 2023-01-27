import logo from './logo.svg';
import './App.css';
import AddTodo from './components/add-todo';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
