import React from 'react'

import Time from '../../../assets/icons/events/icon-clock.svg'
import TimeLight from '../../../assets/icons/events/icon-clock-light.svg'
import './eventDetails.scss'

const EventTime = ({ hasPassed, time }) => (
  <div className='event-time event-datail'>
    <img src={hasPassed ? TimeLight : Time} />
    <span>{time}</span>
  </div>
)

export default EventTime
