import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// proptypes
import { object } from 'prop-types';

// routing
import { withRouter } from 'react-router-dom';

// types
import { matchType } from '../../lib/types';

// components
import EventDetail from './EventDetail';

const EventDetailContainer = ({ match, history }) => {
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [indexOfSelectedPhoto, setIndexOfSelectedPhoto] = useState(0);

  const events = useSelector(state => state.events.data);
  const upcomingEvents = useSelector(state => state.events.upcomingEvents);

  const event = events.find(_event => String(_event.id) === String(match.params.id));

  if (!event) {
    history.push('/events');
    return null;
  }

  const checkEventStatus = () => upcomingEvents.includes(event);

  const handlePhotoClick = index => {
    setIndexOfSelectedPhoto(index);
    setIsPhotoView(true);
  };

  const handleOnCloseIconClick = () => setIsPhotoView(false);

  const ascendingId = (a, b) => a.id - b.id;

  const talks = event.talks ? event.talks.sort(ascendingId) : [];

  return (
    <EventDetail
      event={event}
      indexOfSelectedPhoto={indexOfSelectedPhoto}
      isPhotoView={isPhotoView}
      onPhotoClick={handlePhotoClick}
      talks={talks}
      onCloseIconClick={handleOnCloseIconClick}
      isUpcomingEvent={checkEventStatus()}
    />
  );
};

EventDetailContainer.propTypes = {
  match: matchType.isRequired,
  history: object.isRequired,
};

export default withRouter(EventDetailContainer);
