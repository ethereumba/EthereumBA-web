import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isAfter } from 'date-fns';

// types
import { matchType } from '../../lib/types';

// components
import EventDetail from './EventDetail';

// redux
import { getSingleEvent } from '../../modules/events/actions';

const EventDetailContainer = ({ match }) => {
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [event, setEvent] = useState(null);
  const [talks, setTalks] = useState([]);
  const [indexOfSelectedPhoto, setIndexOfSelectedPhoto] = useState(0);

  const dispatch = useDispatch();

  const eventId = match.params.id;

  const events = useSelector(state => state.events.data);

  const getEventFromStore = () => events.find(_event => String(_event.id) === String(eventId));

  useEffect(() => {
    if (getEventFromStore() !== undefined) {
      setEvent(getEventFromStore());
    } else {
      dispatch(getSingleEvent(eventId));
    }

    if (event) setTalks(event.talks.sort(ascendingId));
  }, [event]);

  const handleChangeIndexOfSelectedPhoto = newIndex => {
    setIndexOfSelectedPhoto(newIndex);
  };

  useEffect(() => {
    if (events.length === 1 && !event) setEvent(events[0]);
  }, [events]);

  const checkEventStatus = () => isAfter(new Date(event.date), new Date());

  const handlePhotoClick = index => {
    setIndexOfSelectedPhoto(index);
    setIsPhotoView(true);
  };

  const handleOnCloseIconClick = () => setIsPhotoView(false);

  const ascendingId = (a, b) => a.id - b.id;

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
