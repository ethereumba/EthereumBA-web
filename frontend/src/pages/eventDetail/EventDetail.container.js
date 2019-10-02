import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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

  const checkEventStatus = () => upcomingEvents.includes(event);

  const event = events.find(_event => String(_event.id) === String(match.params.id));

  console.log(event);

  if (!event) {
    history.push('/events');
    return null;
  }

  const handlePhotoClick = index => {
    setIndexOfSelectedPhoto(index);
    setIsPhotoView(true);
  };

  const handleOnCloseIconClick = () => setIsPhotoView(false);

  const ascendingId = (a, b) => a.id - b.id;

  const talks = event.talks ? event.talks.sort(ascendingId) : null;

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
};

export default withRouter(EventDetailContainer);
