import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// types
import { matchType } from '../../lib/types';

// components
import EventDetail from './EventDetail';

const EventDetailContainer = ({ match }) => {
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [indexOfSelectedPhoto, setIndexOfSelectedPhoto] = useState(0);
  const events = useSelector(state => state.events.data);

  const event = events.find(_event => String(_event.id) === String(match.params.id));

  const handlePhotoClick = index => {
    setIndexOfSelectedPhoto(index);
    setIsPhotoView(true);
  };

  return (
    <EventDetail
      event={event}
      indexOfSelectedPhoto={indexOfSelectedPhoto}
      isPhotoView={isPhotoView}
      onPhotoClick={handlePhotoClick}
    />
  );
};

EventDetailContainer.propTypes = {
  match: matchType.isRequired,
};

export default EventDetailContainer;
