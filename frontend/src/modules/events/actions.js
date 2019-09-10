import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './constants'

const requestEvents = () => {
  return {
    type: EVENTS_REQUEST,
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
