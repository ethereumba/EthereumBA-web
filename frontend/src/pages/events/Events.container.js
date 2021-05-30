import React from 'react';

// router
import { withRouter } from 'react-router-dom';

// components
import Events from './Events';

// constants
import EVENTS from '../../constants/events';

// types

const EventsContainer = ({ history }) => {
  const handleEventCardClick = id => {
    history.push(`/events/${id}`);
  };

  return (
    <Events handleEventCardClick={handleEventCardClick} pastEvents={EVENTS} upcomingEvents={[]} showMore={false} />
  );
};

export default withRouter(EventsContainer);
