import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid'

// proptypes

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader'

// styles
import './eventDetail.scss'

const EventDetail = () => (
      <div className='container'>
          <Grid container>
              <EventDetailHeader /> 
          </Grid> 
      </div>

) 

export default EventDetail 