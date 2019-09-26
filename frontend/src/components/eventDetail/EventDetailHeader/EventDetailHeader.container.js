import React from 'react'

// router
import { withRouter } from 'react-router-dom'

// components
import EventDetailHeader from './EventDetailHeader'

const EventDetailHeaderContainer = ({ history }) => {
  const handleBackArrowClick = () => history.push('/events')

  return (
    <EventDetailHeader handleBackArrowClick={handleBackArrowClick} />
  )
}

export default withRouter(EventDetailHeaderContainer)