import logo from './logo.svg';
import './App.css';
import TodoList from './12-TodoList'

const todoList = [
  { id:'ax87', name:'Feed the cat' },
  { id:'ki98', name:'Shop for onion rings' },
  { id:'mh21', name:'Celecrate the day' }
]


function App() {
  return (
    <div className="App">
      <TodoList list={todoList} />
    </div>
  );
}

export default App;
