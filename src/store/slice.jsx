import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[
        {id:1,text:"create react app",status:"completed"},
        {id:2,text:"create redux app",status:"completed"},
        {id:3,text:"create tolkit app",status:"incompleted"},
    ]
    
}

export const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const newTodo=action.payload
            state.todos.push(newTodo)
        },
        
        editTodos:(state,action)=>{
            const {id,text}=action.payload
            const existingTodo=state.todos.find(item=>item.id===id)
            if(existingTodo){
                existingTodo.text=text
            }
        },

        removeFromTodos:(state,action)=>{
            const id=action.payload
            state.todos=state.todos.filter(item=>item.id!==id)
        },

        changeTodoStatus:(state,action)=>{
            const id=action.payload
            const existingTodo=state.todos.find(item=>item.id===id)
            if(existingTodo.status==="completed"){
                existingTodo.status="incompleted"
            }
            else{
                existingTodo.status="inompleted"
            }
        }


    }
})

export const {addTodos,editTodos,removeFromTodos,changeTodoStatus}=todoSlice.actions

export default todoSlice.reducer

