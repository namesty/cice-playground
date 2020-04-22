import { Todo } from "./todo"
import { Action } from "./action-creators"

export const todoReducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case 'CREATE':
      const todo: Todo = {
        completed: false,
        id: action.id,
        text: action.text
      }
      return [...todos, todo]
    case 'COMPLETE':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    case 'DELETE':
      return todos.filter(todo => todo.id !== action.id)
    default: 
      return todos
  }
}