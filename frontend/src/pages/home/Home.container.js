import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Home from './Home';

// action creators
import { requestEvents } from '../../modules/events/actions';

const HomeContainer = () => {
  const dispatch = useDispatch();

  // selectors
  const events = useSelector(state => state.events.data);
  const upcomingEvents = useSelector(state => state.events.upcomingEvents);

  useEffect(() => {
    dispatch(requestEvents());
  }, []);

  return <Home events={events} upcomingEvents={upcomingEvents} />;
};

HomeContainer.propTypes = {};

export default HomeContainer;
