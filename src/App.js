import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { game } from './reducers/game'
import { SetGame } from 'components/board'


const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('chessState', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('chessState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}


const reducer = combineReducers({
  game: game.reducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(reducer,
  persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveToLocalStorage(store.getState()))

export const App = () => {
  return (
    <Provider store={store}>
      <SetGame />

    </Provider>
  )
}