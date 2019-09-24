import { combineReducers } from 'redux'

import eventsReducer from '../modules/events/reducer'

const createRootReducer = () => {
  const reducers = {
    events: eventsReducer,
  }

  return combineReducers(reducers)
}

export default createRootReducer
