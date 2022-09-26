import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {add, remove, update} from '../Todo/todo.action'

const Todo = () => {
  const [input, setInput] = useState()
  let {todos} = useSelector(store=> store.todos)
  // console.log('todos: ', todos);
  const dispatch = useDispatch()

  return (
    <div>
    <div>Input ans add</div>
    <input type="text" onChange={(e)=> setInput(e.target.value)} placeholder='Add something...'/>
    <button onClick={()=> dispatch(add({title:input}))}>ADD</button>
    {todos.map((todo)=>(
        <div key={todo.id}>
        <h2 >{todo.title}</h2>
        <button onClick={()=> dispatch(remove(todo.id))}>Remove</button>
        <button onClick={()=> dispatch(update(todo.id))}>{todo.status ? "Done" : "Not Done"}</button>
        </div>
    ))}
</div>
  );
};

export default Todo;
