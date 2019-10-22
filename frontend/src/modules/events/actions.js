import axios from 'axios';

import API_ROUTES from '../../lib/api';

// services
import { getSingleEventService } from './services';

import {
  EVENTS_REQUEST,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  MORE_EVENTS_SUCCESS,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
  SINGLE_EVENT_FAILURE,
} from './constants';

const requestEvents = () => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST });
    axios
      .get(API_ROUTES.events)
      .then(res => {
        const events = res.data;
        dispatch(requestEventsSuccess(events));
      })
      .catch(err => {
        dispatch(requestEventsFailure());
        console.log('error', err);
      });
  };
};

const getSingleEvent = id => {
  return dispatch => {
    dispatch({ type: SINGLE_EVENT_REQUEST });
    getSingleEventService(id)
      .then(res => {
        const event = res.data;
        dispatch(getSingleEventSuccess(event));
      })
      .catch(err => {
        dispatch(getSingleEventFailure(err));
        console.error('getSingleEventFailure', err);
      });
  };
};

const requestMoreEvents = nextApi => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST });
    axios
      .get(nextApi.replace('http://api.', 'https://api.'))
      .then(res => {
        const events = res.data;
        dispatch(requestMoreEventsSuccess(events));
      })
      .catch(err => {
        dispatch(requestEventsFailure());
        console.log('error', err);
      });
  };
};

const getSingleEventSuccess = event => ({
  type: SINGLE_EVENT_SUCCESS,
  payload: event,
});

const getSingleEventFailure = () => ({
  type: SINGLE_EVENT_FAILURE,
});

const requestEventsSuccess = data => ({
  type: EVENTS_SUCCESS,
  payload: data,
});

const requestMoreEventsSuccess = data => ({
  type: MORE_EVENTS_SUCCESS,
  payload: data,
});

const requestEventsFailure = () => ({
  type: EVENTS_FAILURE,
});

export {
  requestEvents,
  requestEventsSuccess,
  requestEventsFailure,
  requestMoreEvents,
  getSingleEvent,
  getSingleEventFailure,
  getSingleEventSuccess,
};
