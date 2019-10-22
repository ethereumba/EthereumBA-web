import { getChronologicallyOrderedEvents, getFilteredEvents } from '../../lib/helpers';

import {
  EVENTS_REQUEST,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  MORE_EVENTS_SUCCESS,
  SINGLE_EVENT_FAILURE,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
} from './constants';

const initialState = {
  data: [],
  loading: false,
};

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_REQUEST: {
      return { ...state, loading: true };
    }

    case EVENTS_SUCCESS: {
      const { count, next, results } = action.payload;
      const chronologicallyOrderEvents = getChronologicallyOrderedEvents(results);
      const filteredEvents = getFilteredEvents(chronologicallyOrderEvents);
      const { pastEvents, upcomingEvents } = filteredEvents;
      return {
        ...state,
        data: chronologicallyOrderEvents,
        pastEvents,
        upcomingEvents,
        loading: false,
        totalEventsCount: count,
        nextApi: next,
      };
    }

    case MORE_EVENTS_SUCCESS: {
      const { count, next, results } = action.payload;
      const chronologicallyOrderEvents = getChronologicallyOrderedEvents(results);
      const data = [...state.data].concat(chronologicallyOrderEvents);
      const filteredEvents = getFilteredEvents(data);
      const { pastEvents, upcomingEvents } = filteredEvents;
      return {
        ...state,
        data: data,
        pastEvents,
        upcomingEvents,
        loading: false,
        totalEventsCount: count,
        nextApi: next,
      };
    }

    case SINGLE_EVENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case SINGLE_EVENT_SUCCESS: {
      return {
        ...state,
        data: [action.payload],
      };
    }

    case SINGLE_EVENT_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case EVENTS_FAILURE: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export default EventsReducer;
