import React, {Component} from 'react';
import shortId from 'shortid';
import './App.scss';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

class App extends Component {
  state = {
    todos:[],
    category:"all"
  }

  addTodo = (todo) => {
    todo = {
      name: todo,
      id: shortId.generate(),
      isComplete:false
    }

    this.setState({
      todos:[todo, ...this.state.todos]
    })
}

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id){
          return {
            name:todo.name,
            id:todo.id,
            isComplete:!todo.isComplete
          } 
        } else {
          return todo
        }
      })
    })
  }

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  handleCategory = (category) => {
    this.setState({category})
  }

  deleteAllComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.isComplete)
    })
  }


  render(){

    let todos = [];
    if (this.state.category === "all"){
      todos = this.state.todos
    } else if (this.state.category ==="active"){
      todos = this.state.todos.filter(todo => todo.isComplete === false)
    } else if (this.state.category === "complete"){
      todos = this.state.todos.filter(todo => todo.isComplete === true)
    }
  
    return (
      <article className="todo-app">
        <header>
          <h1>todo list</h1>
        </header>
         <Form addTodo={this.addTodo}/>

         <List  todos={todos} 
                toggleComplete={this.toggleComplete}
                handleDelete={this.handleDelete}
         />

         <Footer todos={todos} 
                 handleCategory={this.handleCategory}
                 deleteAllComplete={this.deleteAllComplete}       
          />
      </article>
    )
  }
 
}

export default App;
