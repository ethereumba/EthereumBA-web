import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Header from '../../components/header/Header'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard'
import './events.scss'

const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

const upcomingEvents = [
  {
    id: '10',
    title: 'Ethereum Buenos Aires: xDai + Experimental',
    date: 'Jue 26 Ago',
    time: '19:00',
    address: 'El Salvador 5218, Buenos Aires',
  },
  {
    id: '11',
    title: 'Ethereum Buenos Aires: Escalando un mercado basado en Blockchain',
    date: 'Jue 29 Ago',
    time: '19:00',
    address: 'El Salvador 5218, Buenos Aires',
  },
]
export default class Events extends Component {
  render() {
    return (
      <div className={'events'}>
        <Header lightTheme />
        <Banner text={eventsBannerText} background={Background} lightTheme />

        <Grid container className='events__upcoming-events'>
          {upcomingEvents &&
            upcomingEvents.map(event => (
              <UpcomingEventCard
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                address={event.address}
              />
            ))}
        </Grid>

        <div className='events__past-events' />
      </div>
    )
  }
}
