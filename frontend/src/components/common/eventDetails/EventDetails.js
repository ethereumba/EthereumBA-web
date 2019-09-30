import React from 'react'
import PropTypes from 'prop-types'

import EventDate from './EventDate'
import EventTime from './EventTime'
import EventAddress from './EventAddress'

const EventDetails = ({ date, address, time, hasPassed }) => (
  <div className='event-details'>
    <EventDate date={date} hasPassed={hasPassed} />
    <EventTime time={time} hasPassed={hasPassed} />
    <EventAddress address={address} hasPassed={hasPassed} />
  </div>
)

EventDetails.propTypes = {
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  hasPassed: PropTypes.bool,
}

EventDetails.defaultProps = {
  hasPassed: false,
}

export default EventDetails
