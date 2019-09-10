import React from 'react'

import Calendar from '../../../assets/icons/events/icon-calendar.svg'
import './eventDetails.scss'

const EventDate = ({ hasPassed, date }) => (
  <div className='event-date'>
    <img src={Calendar} />
    <span>{date}</span>
  </div>
)

export default EventDate
