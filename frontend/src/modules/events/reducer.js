import { getChronologicallyOrderedEvents, getFilteredEvents } from '../../utils/helpers'

import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './constants'

const initialState = {
  data: {},
  loading: false,
}

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_REQUEST: {
      return { ...state, loading: true }
    }
    case EVENTS_SUCCESS: {
      const chronologicallyOrderEvents = getChronologicallyOrderedEvents(action.payload.results)
      const filteredEvents = getFilteredEvents(chronologicallyOrderEvents)
      const { pastEvents, upcomingEvents } = filteredEvents
      return {
        ...state,
        data: chronologicallyOrderEvents,
        pastEvents,
        upcomingEvents,
        loading: false,
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
