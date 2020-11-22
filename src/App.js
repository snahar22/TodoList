import React, {useState} from 'react';
import './App.scss';

export default function App(){
  const [newTodo, setNewTodo] = useState('')
   const [todos, setTodos] = useState([
    {id:1, text: 'Be Positive'},
    {id:2, text: 'Be Happy'},
    {id:3, text: 'Repeat Tasks Above'},
    ])

 const handleNewTodoChange = (e) => {
    e.preventDefault()
  setNewTodo(e.target.value)
 }

const handleNewTodo = (e) => {
  e.preventDefault()
  if(newTodo === '') return
  setTodos([...todos, {id: Date.now(), text: newTodo}])
  e.target.reset()
}
const deleteItem = (id) => {
   setTodos(todos.filter((todo) => todo.id !=id))
}

  return (
    <div className="App">
     <h1>My Todo List</h1>
       <form onSubmit={handleNewTodo}>
          <input placeholder="Enter your task" onChange={handleNewTodoChange} />
          <ul className="todolist">
          {todos.map((todo) => (
            <li key={todo.id} className='item'>
             {todo.text}

             <a href="#" onClick={() => deleteItem(todo.id)}> X</a>
            </li>
            ))}
          </ul>
       </form>
    </div>
    )
}
