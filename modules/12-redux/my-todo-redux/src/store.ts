import { createStore } from 'redux'
import { todoReducer } from './todoReducer';

export const store = createStore(todoReducer, []);

export type RootState = ReturnType<typeof todoReducer>
export type AppDispatch = typeof store.dispatch