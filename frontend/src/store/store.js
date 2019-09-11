import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(createRootReducer(), composeEnhancers(applyMiddleware(thunk)))
  return { store }
}

export { configureStore as default, history }
