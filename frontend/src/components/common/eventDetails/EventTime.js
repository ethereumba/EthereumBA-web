import React from 'react'
import PropTypes from 'prop-types'

import Time from '../../../assets/icons/events/icon-clock.svg'
import TimeLight from '../../../assets/icons/events/icon-clock-light.svg'
import './eventDetails.scss'

const EventTime = ({ hasPassed, time }) => (
  <div className='event-time event-detail'>
    <img src={hasPassed ? TimeLight : Time} />
    <span>{time}</span>
  </div>
)

EventTime.propTypes = {
  time: PropTypes.string.isRequired,
  hasPassed: PropTypes.bool,
}

EventTime.defaultProps = {
  hasPassed: false,
}

export default EventTime
