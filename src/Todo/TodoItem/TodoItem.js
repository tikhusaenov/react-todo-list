import React from 'react'
import PropTypes from "prop-types"
import './TodoItem.css'

function TodoItem({ todo, index, change }) {
    const classes = []
    if (todo.completed) {
        classes.push('todo-done')
    }
    return (
        <li className='todo-item'>
            <span className={classes.join(' ')}>
                <input
                    className='mr-1'
                    checked={todo.completed}
                    type='checkbox'
                    onChange={() => change(todo.id)}/>
                <strong>{index + 1 }</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='delete-btn'>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    change: PropTypes.func.isRequired
}


export default TodoItem