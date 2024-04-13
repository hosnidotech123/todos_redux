import { useState } from 'react'

import './App.css'

import Todo from "./Components/Todo"

import { BsPlusCircle} from 'react-icons/bs'


import { useDispatch, useSelector } from 'react-redux'

import {addTodos, removeFromTodos} from './store/slice'


function App() {
  
  const disptach=useDispatch()

  const todos=useSelector((state)=>state.todos.todos)

  const [text,setText]=useState('')


  const handleAdd=()=>{
    if(text===""){
      return 
    }

    disptach(addTodos({
      id:Math.floor(Math.random()*1000),
      text,
      status:"incompleted"
    }))
    setText('')
  }


  const handleEdit=(id)=>{
      const existingTodo=todos.find(item=>item.id===id)
      setText(existingTodo.text)
      disptach(removeFromTodos(id))
  }

  

  

return (
<div className="app">
    <div className="content">
      <div className="header">
          <span className="title">Todo List</span>
      </div>
      <div className="add">
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            type="text"/>
          <button onClick={handleAdd}>
            <BsPlusCircle />
            <span>Add</span>
          </button>
      </div>
      <div className="main">
          {todos.map((todo, index) => (
          <Todo key={index} todo={todo} handleEdit={handleEdit} />
          ))}
      </div>
  </div>
</div>
);
}

export default App
