import React, {useContext} from 'react'
import PropTypes from "prop-types"
import './TodoItem.css'
import Context from "../../context";

function TodoItem({ todo, index}) {
    const { removeTodo, toggleTodo } = useContext(Context)

    const classes = []
    if (todo.completed) {
        classes.push('todo-done','colorGrey')
    }
    return (
        <li className='todo-item'>
            <span className={classes.join(' ')}>
                <input
                    className='mr-1'
                    checked={todo.completed}
                    type='checkbox'
                    onChange={toggleTodo.bind(null, todo.id)}/>
                <strong>{index + 1 }</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='delete-btn' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
}


export default TodoItem