import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleButton = () => {
    const inputan = {
      id: Math.random(),
      todo: this.state.input,
      isChecked: false,
    };
    this.setState({ todos: [...this.state.todos,inputan], input: "" });
  };

  handleUpdate = (id) => {
    console.log("handleUpdate", id);
    const update = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    
    this.setState({ todos: update });
  };

  handleDelete = (id,e) => {
    e.preventDefault()
    console.log('handleDelete',id);
    const hapus = this.state.todos.filter((todo) =>
      todo.id !== id )
      this.setState({todos: hapus })
  };

  render() {
    console.log("todos", this.state.todos);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      ><h2>TO DO LIST</h2>
        <div>
          
          <input
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.input}
          />
          <button onClick={() => this.handleButton()}>add</button>
        </div>
        <div>
          {this.state.todos.length > 0
            ? this.state.todos.map((todo) => (
                <div
                  key={todo.id}
                  onClick={() => this.handleUpdate(todo.id)}
                  onContextMenu={(event) => this.handleDelete(todo.id, event)}
                >
                  {todo.todo} {todo.isChecked ? <span>*Done*</span> : null}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Todolist;
