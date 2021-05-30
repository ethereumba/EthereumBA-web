import React from 'react';

// components
import Home from './Home';

// constants
import EVENTS from '../../constants/events';

const HomeContainer = () => {
  return <Home events={EVENTS.splice(0, 3)} upcomingEvents={[]} />;
};

HomeContainer.propTypes = {};

export default HomeContainer;
