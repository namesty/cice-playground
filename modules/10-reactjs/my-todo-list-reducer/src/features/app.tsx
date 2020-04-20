import React, { useState, useReducer } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

type Payload = {action: 'create', text: string} | {action: 'complete', id: number}

export const App: React.FC = () => {

  const reducer = (state: Todo[], payload: Payload): Todo[] => {
    switch(payload.action) {
      case 'create': {
        const newTodo: Todo = { id: Math.floor(Math.random() * 1000), text: payload.text, completed: false }
        console.log(state)
        return [...state, newTodo]
      }

      case 'complete': {
        return state.map(todo => {
          if(todo.id === payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    }
  }

  const [todos, dispatch] = useReducer(reducer, [])
  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <li onClick={() => dispatch({action: 'complete', id: todo.id})} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({action:'create', text: todoText})
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
