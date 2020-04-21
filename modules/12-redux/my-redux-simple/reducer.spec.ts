import { reducer, Action } from './reducer'

describe('reducer', () => {
  it('should increment', () => {
    const initialState: number = 8
    const action: Action = { type: 'INCREMENT' }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(9)
  })

  it('should decrement', () => {
    const initialState: number = 5
    const action: Action = { type: 'DECREMENT' }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(4)
  })

  it('should increment by n', () => {
    const initialState: number = 5
    const action: Action = { type: 'N-INCREMENT', value: -3 }

    const actual = reducer(initialState, action)

    expect(actual).toEqual(2)
  })

})