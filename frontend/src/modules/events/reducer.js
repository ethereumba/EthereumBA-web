import axios from 'axios'

import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './actions'
import API_ROUTES from '../../utils/api'

const initialState = {
  data: {},
  loading: false,
}

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case [EVENTS_REQUEST]: {
      return { ...state }
    }
    case [EVENTS_SUCCESS]: {
      return { ...state }
    }
    case [EVENTS_FAILURE]: {
      return { ...state }
    }

    default:
      return state
  }
}

export default EventsReducer
