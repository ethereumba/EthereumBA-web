import axios from 'axios'

import API_ROUTES from '../../utils/api'
import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE, MORE_EVENTS_SUCCESS } from './constants'

const requestEvents = () => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST })
    axios
      .get(API_ROUTES.events)
      .then(res => {
        const events = res.data
        dispatch(requestEventsSuccess(events))
      })
      .catch(err => {
        dispatch(requestEventsFailure())
        console.log('error', err)
      })
  }
}

const requestMoreEvents = nextApi => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST })
    axios
      .get(nextApi)
      .then(res => {
        const events = res.data
        dispatch(requestMoreEventsSuccess(events))
      })
      .catch(err => {
        dispatch(requestEventsFailure())
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

const requestMoreEventsSuccess = data => {
  return {
    type: MORE_EVENTS_SUCCESS,
    payload: data,
  }
}

const requestEventsFailure = () => {
  return {
    type: EVENTS_FAILURE,
  }
}

export { requestEvents, requestEventsSuccess, requestEventsFailure, requestMoreEvents }
