import React from 'react'

import Calendar from '../../../assets/icons/events/icon-calendar.svg'
import CalendarLight from '../../../assets/icons/events/icon-calendar-light.svg'
import './eventDetails.scss'

const EventDate = ({ hasPassed, date }) => (
  <div className='event-date event-datail'>
    <img src={hasPassed ? CalendarLight : Calendar} />
    <span>{date}</span>
  </div>
)

export default EventDate
