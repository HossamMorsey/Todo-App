import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos:[
      {id: 1, content: 'Pray Fajir'},
      {id: 2, content: 'Have Your Brakfast'},
      {id: 3, content: 'Take Youe Coffee'}
    ]
  }


  deleteTodo =(id) =>{
    const todos = this.state.todos.filter(todos =>{
      return todos.id !== id

    });
    this.setState({
      todos
    })
    }

    addTodo = (todo)=>{
      todo.id = Math.random();
      let todos= [...this.state.todos, todo];
      this.setState({
        todos
      })
    }
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text"> Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;
