import { createSlice } from '@reduxjs/toolkit'
export const toDoApp = createSlice({
 name: 'toDo',
 initialState: {
   todoList:   [
     { id: 1, desc: "Task1",isDone:true },
     { id: 2, desc: "Task2",isDone:false}
   ]
 },
 reducers: {
   addToDo: (state, action) => {
     let newTodoList = {
       id: Math.random(),
       desc: action.payload.newDesc
     }
     state.todoList.push(newTodoList);
   },
   deleteToDo: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.filter((item) => 
         item.id !==action.payload.id);
   },
   editTodo: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.map((item) => 
       item.id === action.payload.id ? action.payload : item);
   }
   ,  
   completeItem: (state, action) => {
    let { todoList } = state;
    state.todoList = todoList.map((item) => 
        item.id ===action.payload ? { ...item, isDone : !item.isDone }:item);
  }
  },
})

export const { addToDo, deleteToDo, editTodo, completeItem} = toDoApp.actions
export default toDoApp.reducer;