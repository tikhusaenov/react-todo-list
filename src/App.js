import React, { useEffect, useState, lazy} from 'react'
import TodoList from "./Todo/TodoList/TodoList"
import Context from "./context"
import Loader from "./Loader/Loader"

const AddTodo = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./Todo/AddTodo/AddTodo'))
    },900)
}))



function App() {
  const [todos, setTodos] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(response => response.json())
          .then(todos => setTimeout(() => {
              setTodos(todos)
              setLoader(false)
          },800  ))
  },[])

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


  function addTodo(title) {
      setTodos(
          todos.concat([{
              title: title,
              id: Date.now(),
              completed: false
          }])

      )
  }




  return (
      <Context.Provider value={{ removeTodo, toggleTodo  }}>
          <div className='wrapper'>
              <div className="headingList d-flex">
                  <h1>React Tutorial</h1>
              </div>
              <React.Suspense fallback={<p>Loading...</p>}>
                  <AddTodo onCreate={ addTodo }/>
              </React.Suspense>
              {loader && <Loader />}
              {todos.length ? <TodoList todos={ todos }/> : loader ? null : <p className="colorGrey">No todos</p>}

          </div>
      </Context.Provider>
  )

}

export default App;
