import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Button from '../../common/button/Button'
import EventCard from '../../common/eventCard/EventCard'
import './events.scss'

export default class Events extends Component {
  render() {
    const { events } = this.props
    const eventsLength = events.length

    let eventsToDisplay = eventsLength > 0 && eventsLength <= 3 && events
    if (eventsLength > 3) {
      eventsToDisplay = events.slice(0, 3)
    }

    const orderedEventsToDisplay = eventsToDisplay && [...eventsToDisplay].reverse()

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
}
