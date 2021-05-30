import React from 'react';
import PropTypes from 'prop-types';

import Calendar from '../../../assets/icons/events/icon-calendar.svg';
import CalendarLight from '../../../assets/icons/events/icon-calendar-light.svg';
import './eventDetails.scss';

const EventDate = ({ hasPassed, date }) => (
  <div className={`event-date event-detail ${hasPassed ? 'past' : ''}`}>
    <img src={hasPassed ? CalendarLight : Calendar} alt="calendar" />
    <span>{date}</span>
  </div>
);

EventDate.propTypes = {
  hasPassed: PropTypes.bool,
  date: PropTypes.string.isRequired,
};

EventDate.defaultProps = {
  hasPassed: false,
};

export default EventDate;
