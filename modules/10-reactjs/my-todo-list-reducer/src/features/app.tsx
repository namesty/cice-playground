import React, { useState, useReducer } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

type Payload = {type: 'create', id: number, text: string} | {type: 'complete', id: number}

export const App: React.FC = () => {

  const reducer = (state: Todo[], payload: Payload): Todo[] => {
    switch(payload.type) {
      case 'create': {
        const newTodo: Todo = { id: payload.id, text: payload.text, completed: false }
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
          <li onClick={() => dispatch({type: 'complete', id: todo.id})} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({type:'create', id: Math.floor(Math.random() * 1000), text: todoText})
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
