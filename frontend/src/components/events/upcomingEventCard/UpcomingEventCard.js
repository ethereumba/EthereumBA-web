import React from 'react'
import { Grid } from '@material-ui/core'

const UpcomingEvent = ({ id, title, date, time, address }) => {
  return (
    <Grid item xs={12} md={6}>
      <div children={'upcoming-event__title'}>
        <span>{`#${id} ${title}`}</span>
      </div>
      <div className={'upcaoming-event__data'} />
    </Grid>
  )
}

export default UpcomingEvent
