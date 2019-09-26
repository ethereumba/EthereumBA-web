import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// router
import { withRouter } from 'react-router-dom'

// proptypes
import { arrayOf, number, string } from 'prop-types'

// components
import Events from './Events'

// action creators
import { requestEvents, requestMoreEvents } from '../../modules/events/actions'

// types
import { eventType } from '../../lib/types'

const EventsContainer = ({ history }) => {
  // state
  const [eventsShown, setEventsShown] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const dispatch = useDispatch()

  // selectors
  const currentFetchEvents = useSelector(state => state.events.data)
  const pastEvents = useSelector(state => state.events.pastEvents)
  const upcomingEvents = useSelector(state => state.events.upcomingEvents)
  const totalEventsCount = useSelector(state => state.events.totalEventsCount)
  const nextApi = useSelector(state => state.events.nextApi)

  useEffect(() => {
    dispatch(requestEvents())
  }, [])

  useEffect(() => {
    const availableEventsInCurrentFetch = currentFetchEvents.length
    const _eventsShown =
      eventsShown === 0 ? availableEventsInCurrentFetch : eventsShown + availableEventsInCurrentFetch
    const _showMore = totalEventsCount > _eventsShown

    setEventsShown(_eventsShown)
    setShowMore(_showMore)
  }, [currentFetchEvents])

  const getMoreEvents = () => {
    dispatch(requestMoreEvents(nextApi))
  }

  const handleEventCardClick = (id) => {
    history.push(`/events/${id}`)
  }

  return (
    <Events handleEventCardClick={handleEventCardClick} pastEvents={pastEvents} upcomingEvents={upcomingEvents} getMoreEvents={getMoreEvents} showMore={showMore} />
  )
}

EventsContainer.propTypes = {
  // required attributes
  currentFetchEvents: arrayOf(
    eventType
  ).isRequired,

  // non required attributes
  totalEventsCount: number,
  nextApi: string,
}

EventsContainer.defaultProps = {
  totalEventsCount: 0,
  nextApi: '',
}

export default withRouter(EventsContainer)