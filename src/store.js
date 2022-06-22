import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './Reducers/toDoApp';
export default configureStore({
 reducer: {
     toDo: toDoReducer
  
}})