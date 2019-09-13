import axios from 'axios'

import API_ROUTES from '../../utils/api'
import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './constants'

const requestEvents = nextApi => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST })
    const eventsUrl = nextApi ? nextApi : API_ROUTES.events
    axios
      .get(eventsUrl)
      .then(res => {
        const events = res.data
        dispatch(requestEventsSuccess(events))
      })
      .catch(err => {
        console.log('error', err)
      })
  }
}

const requestEventsSuccess = data => {
  return {
    type: EVENTS_SUCCESS,
    payload: data,
  }
}

const requestEventsFailure = () => {
  return {
    type: EVENTS_FAILURE,
  }
}

export { requestEvents, requestEventsSuccess, requestEventsFailure }
