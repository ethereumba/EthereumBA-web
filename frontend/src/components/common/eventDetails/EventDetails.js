import React from 'react'

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
export default EventDetails
