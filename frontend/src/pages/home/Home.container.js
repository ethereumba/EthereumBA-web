import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// propstypes
import { number, string } from 'prop-types';

// components
import Home from './Home';

// action creators
import { requestEvents } from '../../modules/events/actions';

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
  // non required attributes
  totalEventsCount: number,
  nextApi: string,
};

export default HomeContainer;
