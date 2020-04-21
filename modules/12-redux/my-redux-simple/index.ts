import { createStore } from 'redux'
import { reducer } from './reducer'
import { increment, decrement, nIncrement } from './action-creators'

const store = createStore(reducer)

document.querySelector('#button')?.addEventListener('click', () => {
  store.dispatch(increment())
})

document.querySelector('#button2')?.addEventListener('click', () => {
  store.dispatch(decrement())
})

document.querySelector('#nincrement-button')?.addEventListener('click', () => {
  const value = parseInt((document.querySelector('#nincrement-input') as HTMLInputElement).value)
  store.dispatch(nIncrement(value))
})

store.subscribe(() => {
  const counter = document.querySelector('#counter')
  if (counter !== null) {
    counter.innerHTML = store.getState().toString()
  }
})
