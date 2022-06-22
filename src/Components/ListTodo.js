import React, { useState } from 'react';
import './style.css'

import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo, completeItem } from '../Reducers/toDoApp';
const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [ isEditing, setEditing ] = useState(false);
  const [ state, setState ] = useState({
   id: '', desc: '',isDone:'', descError: null
  });
  const onEditToggle = ( id, desc,isDone) => {
   setEditing(true);
   setState({ ...state, id, desc,isDone});
  }
  const handleChange = (e) =>{
   setState({...state, [e.target.name]: e.target.value,  
      [`${e.target.name}Error`]: null });
  }
  const { desc, descError, id } = state;
  const edit = () =>{
   if(desc === ''){
    setState({...state, descError: 'You must write something!'});
    return;
   }
   dispatch((editTodo({desc, id})));
   setEditing(false);
  }
return <div className='List'>
 {
   isEditing ?
    <div className='form'>
   
      <input type='text' value={desc} name='desc' 
         onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={edit}> Edit
     </button>
     {descError ? 
       <div className='error'>{descError}</div>: null
     }
   </div> :
   <ul className='todos'>
    {
      todoList.map(({id, desc,isDone})=> {
        return (<li className='grid' key={id}>
          <span   className={isDone ? 'Green' : 'Red'} >{desc}</span>
          <button className="iDone" 
            onClick={() => dispatch(completeItem(id))}
        > {isDone ? 'isDone' : 'unDone'} 
          </button>
          <button className="edit" 
              onClick={() =>onEditToggle(id, desc)} 
            >Edit</button>
            <button className="close" 
              onClick={() => dispatch(deleteToDo({id}))}
            >Remove</button>
            
              
       </li>
      )})
    }
  </ul>
  }
</div>;
};
export default ListTodo;