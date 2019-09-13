import { getChronologicallyOrderedEvents, getFilteredEvents } from '../../utils/helpers'

import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './constants'

const initialState = {
  data: [],
  loading: false,
}

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_REQUEST: {
      return { ...state, loading: true }
    }
    case EVENTS_SUCCESS: {
      const chronologicallyOrderEvents = getChronologicallyOrderedEvents(action.payload.results)
      const { count, next } = action.payload
      const data = state.data ? [...state.data].concat(chronologicallyOrderEvents) : chronologicallyOrderEvents
      const filteredEvents = getFilteredEvents(data)
      const { pastEvents, upcomingEvents } = filteredEvents
      return {
        ...state,
        data: data,
        pastEvents,
        upcomingEvents,
        loading: false,
        totalEventsCount: count,
        nextApi: next,
      }
    }
    case EVENTS_FAILURE: {
      return { ...state, loading: false }
    }

    default:
      return state
  }
}

export default EventsReducer
