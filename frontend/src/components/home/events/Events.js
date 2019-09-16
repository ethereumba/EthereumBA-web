import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import Button from '../../common/button/Button'
import EventCard from '../../common/eventCard/EventCard'
import './events.scss'

const Events = ({ events }) => {
  const eventsLength = events.length
  let eventsToDisplay = []
  if (eventsLength > 0) {
    eventsToDisplay = eventsLength <= 3 ? events : events.slice(0, 3)
  }
  const orderedEventsToDisplay = [...eventsToDisplay].reverse()

  return (
    <div className={'background-events'}>
      <div className={'events'}>
        <div className='card-events'>
          <div className={'center'}>
            <p className={'title'}>Our meetups</p>
          </div>

          <div className='cards-events'>
            <Grid container className='events__container'>
              {orderedEventsToDisplay &&
                orderedEventsToDisplay.map((event, i) => (
                  <Grid item xs={12} md={6} lg={4} key={`home-events__${event.id}-${i}`}>
                    <EventCard id={event.id} title={event.title} date={event.date} hasPassed={event.hasPassed} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>

        <div className={'button-events'}>
          <Button title={'View All Events'} url={'/events'} />
        </div>
      </div>
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      hasPassed: PropTypes.bool,
    })
  ).isRequired,
}

export default Events
