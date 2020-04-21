export type Action = { type: 'INCREMENT'} | { type: | 'DECREMENT' } | { type: | 'N-INCREMENT', value: number }

export function reducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1

    case 'DECREMENT':
      return state - 1

    case 'N-INCREMENT':
      return state + action.value
  }
}
