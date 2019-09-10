import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function configureStore() {
  const store = createStore(createRootReducer(), applyMiddleware(thunk))
  return store
}

export { configureStore as default, history }
