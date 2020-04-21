import {INCREMENT, DECREMENT, NINCREMENT} from "./action-types";
import { Action } from './reducer'

export function increment(): Action {
  return {
    type: INCREMENT
  }
}

export function decrement(): Action {
  return {
    type: DECREMENT
  }
}

export function nIncrement(value: number): Action {
  return {
    type: NINCREMENT,
    value: value
  }
}
