import React from 'react'
import PropTypes from 'prop-types'


export default function List(props) {
    return (
        <section className="todo-list">
            <ul>
                {props.todos.map(todo => (
                    <li key={todo.id}>
                        <p className={todo.isComplete?'complete':null} onClick={()=>props.toggleComplete(todo.id)}>{todo.name} </p>
                        <button onClick={()=>props.handleDelete(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </section> 
    )
}

List.propTypes = {
    todos:PropTypes.array.isRequired
}
