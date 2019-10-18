import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// propstypes
import { arrayOf, number, string } from 'prop-types';

// components
import Home from './Home';

// action creators
import { requestEvents } from '../../modules/events/actions';

// types
import { eventType } from '../../lib/types';

const HomeContainer = () => {
  const dispatch = useDispatch();

  // selectors
  const events = useSelector(state => state.events.data);

  useEffect(() => {
    dispatch(requestEvents());
  }, []);

  return <Home events={events} />;
};

HomeContainer.propTypes = {
  // required attributes
  currentFetchEvents: arrayOf(eventType).isRequired,

  // non required attributes
  totalEventsCount: number,
  nextApi: string,
};

export default HomeContainer;
