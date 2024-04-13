import React from 'react'
import { useDispatch } from 'react-redux'
import {changeTodoStatus,removeFromTodos} from "../store/slice"
import { BsCheckCircle, BsPencil, BsTrash } from 'react-icons/bs'
import "./Todo.css"

function Todo({todo,handleEdit}) {
    
    const dispatch=useDispatch()

    const handleStatus=()=>{
        dispatch(changeTodoStatus(todo.id))
    }

    const handleDelete=()=>{
        dispatch(removeFromTodos(todo.id))
    }



  return (
    <div className='todo'>
        
        <div className='text'>
            <span className={`${todo.status==="completed && 'completed' "}`}>
            {todo.text}
            </span>
        </div>

        <div className='edit'>
            <div onClick={()=>handleEdit(todo.id)}>
                <BsPencil/>
            </div>
            <div onClick={handleStatus}>
                <BsCheckCircle/>
            </div>
            <div onClick={handleDelete}>
                    <BsTrash/>
            </div>
        </div>
    </div>
  )
}

export default Todo