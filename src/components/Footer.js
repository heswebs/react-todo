import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
    return (
        <section className="bottom-controls">
            <div>
                <span>
                    {props.todos.filter( todo => todo.isComplete === false).length} 
                </span> task left
            </div>
            <div>
                <button onClick={()=>props.handleCategory("all")}>all</button>
                <button onClick={()=>props.handleCategory("active")}>active</button>
                <button onClick={()=>props.handleCategory("complete")}>complete</button>
            </div>
            <div>
                <button onClick={props.deleteAllComplete}>clear completed</button>
            </div>
        </section>
    )
}

Footer.propTypes = {
    todos: PropTypes.array.isRequired
}
