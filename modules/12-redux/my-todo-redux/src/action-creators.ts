
interface CreateAction { type: 'CREATE', id: number, text: string }

interface DeleteAction { type: 'DELETE', id: number }

interface CompleteAction { type: 'COMPLETE', id: number }

export const createTodo = (id: number, text: string): CreateAction => {
  return {
    type: 'CREATE',
    id,
    text
  }
}

export const deleteTodo = (id: number): DeleteAction => {
  return {
    type: 'DELETE',
    id
  }
}

export const completeTodo = (id: number): CompleteAction => {
  return {
    type: 'COMPLETE',
    id
  }
}

export type Action = CreateAction | DeleteAction | CompleteAction  