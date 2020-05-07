import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Form extends Component {

    add = () => {
        const todo = this.todoInput.value.trim()
        if(!todo){
            return 
        } 
        this.props.addTodo(todo)
        this.todoInput.value = ""
    }

    render(){
        return (
            <section className="todo-form">
                <input type="text" 
                       ref={input => this.todoInput = input}
                       onBlur={this.add} 
                       placeholder="what needs to be done?"
                       autoFocus       
                />
                <button onClick={this.add}>add</button>
            </section>
        )
    }
    
}

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
}
