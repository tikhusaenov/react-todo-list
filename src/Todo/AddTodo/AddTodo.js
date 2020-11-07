import React, {useState} from 'react'
import PropTypes from "prop-types"
import './AddTodo.css'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }

}


function AddTodo({ onCreate }) {

    const input = useInputValue('')
    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <div className="d-block mb-1">
            <form className="form-edit ml-1" onSubmit={submitHandler}>
                <input {...input.bind}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo