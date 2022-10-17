import React from 'react'

function ListItems() {

    
    // const handleDelete = (e,id) => {
    //     e.preventDefault()
    //     const hapus = todos.filter( (list, i) => i !== id)
    //     setTodos(hapus)
    // }

    // const handleUpdate = (index) => {
    //     const update = todos.map((todo, i) => i === index ? {...todo, isChecked : !todo.isChecked} : todo)
    //     setTodos(update)
    //     console.log();
    // }

    return (
        <div>
            <ul>
            {/* {todos.map((list, index) => <li onContextMenu={(e) =>handleDelete(e,index)} onClick={() =>handleUpdate(index)}>{list.text} {list.isChecked ? <span>-done-</span> : null }</li> )} */}
            </ul>
        </div>
    )
}

export default ListItems
