import React from 'react';
import PropTypes from 'prop-types';

import EventDate from '../eventDetails/EventDate';
import './eventCard.scss';

const EventCard = ({ handleClick, date, title, hasPassed }) => (
  <div className="card-home" onClick={handleClick}>
    <a className="card card-shadow">
      <div className="card-container">
        <EventDate date={date} hasPassed={hasPassed} />
        <div className={`title-card ${hasPassed ? 'past' : ''}`} variant="h5" component="h2">
          <p>{title}</p>
        </div>
      </div>
    </a>
  </div>
);

EventCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default EventCard;
