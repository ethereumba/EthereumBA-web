import React, { useState } from 'react';

import { isAfter } from 'date-fns';

// types
import { matchType } from '../../lib/types';

// components
import EventDetail from './EventDetail';

// constants
import EVENTS from '../../constants/events';

const EventDetailContainer = ({ match }) => {
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [indexOfSelectedPhoto, setIndexOfSelectedPhoto] = useState(0);

  const eventId = match.params.id;

  const event = EVENTS.find(ev => ev.id.toString() === eventId);
  const talks = event.talks ? event.talks.sort((a, b) => a.id - b.id) : [];

  const handleChangeIndexOfSelectedPhoto = newIndex => {
    setIndexOfSelectedPhoto(newIndex);
  };

  const checkEventStatus = () => isAfter(new Date(event.date), new Date());

  const handlePhotoClick = index => {
    setIndexOfSelectedPhoto(index);
    setIsPhotoView(true);
  };

  const handleOnCloseIconClick = () => setIsPhotoView(false);

  return (
    event &&
    talks && (
      <EventDetail
        event={event}
        indexOfSelectedPhoto={indexOfSelectedPhoto}
        isPhotoView={isPhotoView}
        onPhotoClick={handlePhotoClick}
        talks={talks}
        onCloseIconClick={handleOnCloseIconClick}
        onChangeIndex={handleChangeIndexOfSelectedPhoto}
        isUpcomingEvent={checkEventStatus()}
      />
    )
  );
};

EventDetailContainer.propTypes = {
  match: matchType.isRequired,
};

export default EventDetailContainer;
