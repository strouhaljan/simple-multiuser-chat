import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chatApp from './reducers'
import App from './components/App'

let store = createStore(chatApp)

window.getState = store.getState;

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
