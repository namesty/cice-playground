import React, { useState } from 'react'
// import styles from './app.module.css'
// import { bind } from './utils/bind'
import { RootState, AppDispatch } from './store'
import { useSelector, useDispatch } from 'react-redux'

//const cx = bind(styles)

export const App: React.FC = () => {

  const todoSelector = (state: RootState) => state
  const [todoText, setTodoText] = useState('')

  const todos = useSelector(todoSelector)
  const dispatch: AppDispatch = useDispatch()
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <li onClick={() => dispatch({type: 'COMPLETE', id: todo.id})} 
            //className={cx({ completed: todo.completed })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({type:'CREATE', id: Math.floor(Math.random() * 1000), text: todoText})
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={clearTodo}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
