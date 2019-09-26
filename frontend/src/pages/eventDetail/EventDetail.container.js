import React from 'react'
import { useSelector } from 'react-redux'

// proptypes

// components
import EventDetail from './EventDetail'

// action creators
const EventDetailContainer = ({ match }) => {
  const events = useSelector(state => state.events.data)

  const event = events.find((event) => String(event.id) === String(match.params.id))

  return (
    <EventDetail event={event} />
  )
}

export default EventDetailContainer 