import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";
import { useSelector, useDispatch } from "react-redux";
import { addlisttodo, deletelisttodo, detaillisttodo, updatelisttodo } from "../action/todolistaction";
import { uuid } from "uuidv4";



function Form() {
  const [input, setInput] = useState('');
  
  

  // const [todos, setTodos] = useState([])

  const dispatch = useDispatch();
  const { list, detailTodo } = useSelector((state) => state.TodoReducers);
  const data = {
    id: uuid(),
    text: input,
    check : false
    
  };

  useEffect(()=> {
    
    setInput(detailTodo.text);
  },[detailTodo])

 

  

  const handleClick = () => {
     if(input != ''){
      if(detailTodo.check){
        dispatch(updatelisttodo(list.map(todos => todos.id === detailTodo.id ? {...todos, text:input} : todos)))
        dispatch(detaillisttodo({...list, check : false}))
      }else {
        dispatch(addlisttodo(data))
      }
     }
      
    
    
    
    
    
    
    setInput("");
  };

  const handlehapus = (id) => {
    const hapus = list.filter((todo) => todo.id !== id);
    dispatch(deletelisttodo(hapus));
  };

  const handleDetail = (todo) => {
      
      dispatch(detaillisttodo({...todo, check: true}))
      
      
      
  };

  
  return (
      
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>TO DO LIST</h2>
      <div>
        <input
          type="text"
          placeholder="type here . . ."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={() => handleClick()}>+</button>
        <ul>
          {list.map(todo => (
            <p key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => handlehapus(todo.id)}>Hapus</button>{" "}
              <button onClick={() => handleDetail(todo)}>Update</button>{" "}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
