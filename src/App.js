import React from 'react'
import TodoList from "./Todo/TodoList/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo/AddTodo";


function App() {
  const [todos, setTodos] = React.useState([
      {
          id: 1,
          completed: false,
          title: 'Купить хлеб'
      },
      {
          id: 2,
          completed: false,
          title: 'Купить масло'
      },
      {
          id: 3,
          completed: false,
          title: 'Купить молоко'
      },
  ])


  function toggleTodo(id) {
      setTodos(
          todos.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
          })
      )
  }
  function removeTodo(id) {
      setTodos(
          todos.filter(todo => todo.id !== id)
      )
  }




  return (
      <Context.Provider value={{ removeTodo, toggleTodo  }}>
          <div className='wrapper'>
              <div className="headingList d-flex">
                  <h1>React Tutorial</h1>
              </div>
              <AddTodo/>
              {todos.length ? <TodoList todos={ todos }/> : <p className="colorGrey">No todos</p>}

          </div>
      </Context.Provider>
  )

}

export default App;
