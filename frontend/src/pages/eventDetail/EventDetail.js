import React from 'react'

// material ui
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// proptypes

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader'
import EventDetailTitleAndDescription from '../../components/eventDetail/EventDetailTitleAndDescription'

// styles
import './styles.scss'

const EventDetail = ({ event }) => (
  <Container maxWidth='md' className='event-detail'>
    <Grid container direction='column' alignItems='stretch' justify='flex-start'>
      <EventDetailHeader />
      <EventDetailTitleAndDescription event={event} />
    </Grid>
  </Container>
)

export default EventDetail 