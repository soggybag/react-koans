import { useState } from 'react'
import './App.css';
import TodoList from './12-TodoList'
import Menu from './Menu'
import AllItems from './AllItems'

const todoList = [
  { id:'ax87', name:'Feed the cat' },
  { id:'ki98', name:'Shop for onion rings' },
  { id:'mh21', name:'Celecrate the day' }
]


function App() {
  const [item, setItem] = useState('')
  return (
    <div className="App">
      <Menu items={Object.keys(AllItems)} onClick={item => setItem(item)}/>
      {AllItems[item] && AllItems[item]}
    </div>
  );
}

export default App;
