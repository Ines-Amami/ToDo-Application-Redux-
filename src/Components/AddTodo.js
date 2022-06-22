import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/toDoApp';
const AddTodo = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = useState({
     desc: '',
     descError: null
  });
  const handleChange = (e) =>{
    setState({...state, 
          [e.target.name]: e.target.value,
          [`${e.target.name}Error`]: null });
  }
  const add = () =>{
    if(desc === ''){
      setState({...state, 
         descError: 'You must write something!'});
       return;
    }
    dispatch(addToDo({newDesc: desc}));
    setState({...state, desc: ''});
  }
  const { desc, descError } = state;
   return <div className='form' style={{margin:"0 0 0 70px"}}>
      <h2 style={{color:"white"}}>TO-DO-APP</h2>
      <input type='text' value={desc} 
        name='desc' 
        onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={add}>Add
      </button>
      {descError ? 
         <div className='error'>{descError}</div>: null}
    </div>;
};
export default AddTodo;