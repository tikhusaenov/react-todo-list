import React from 'react'
import TodoItem from "../TodoItem/TodoItem";
import PropTypes from "prop-types"
import './TodoList.css'



function TodoList(props) {
    return (
        <ul className='todo-list'>
            { props.todos.map((todo, index) => {
                return (
                    <TodoItem
                        todo={ todo }
                        key={todo.id}
                        index={index}
                    />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired

}


export default TodoList