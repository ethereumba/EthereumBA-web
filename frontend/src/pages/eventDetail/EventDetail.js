import React from 'react'

// material ui
import Container from '@material-ui/core/Container'

// proptypes

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader'

// styles
import './eventDetail.scss'

const EventDetail = ({ event }) => (
  <Container className='event-detail'>
    <EventDetailHeader />
  </Container>
)

export default EventDetail 