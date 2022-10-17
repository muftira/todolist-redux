import React, { useState} from "react";


function Todolist() {
  const [todos,setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    
  }
  
  const handleButton = () => {
    const data = {
      id: Math.random(),
      text : input,
      isChecked : false
    }

    setTodos([...todos, data])

    setInput('')



    
  }

  const handleUpdate = (id) => {
    const updated = todos.map(todo => todo.id === id ? {...todo, isChecked : !todos.isChecked} : todo)

    setTodos(updated)
   
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    const hapus = todos.filter(item => item.id !== id)

    setTodos(hapus)
  }
  
  
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <h2>Todo App</h2>
      <div>

      
      <input type="text" onChange={handleChange} value={input}/>
      <button onClick={handleButton}>Submit</button>
      <ul>

      {todos.map(list => <li key={list.id} onClick={() => handleUpdate(list.id)} onContextMenu={e => handleDelete(e, list.id)} >{list.text} {list.isChecked ? <span>-done-</span> : null }</li> )}
      </ul>
      </div>
    </div>
  )
}

export default Todolist

