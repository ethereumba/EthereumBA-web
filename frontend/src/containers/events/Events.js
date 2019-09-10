import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Header from '../../components/header/Header'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard'
import EventCard from '../../components/common/eventCard/EventCard'
import './events.scss'

const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

const pastEvents = [
  {
    id: 1,
    date: '07 FEB 2018',
    title: '#3 Ethereum Buenos Aires: Smart Contracts Upgrades & DeFi',
    more: 'Ethereum is about bringing together like minds around...',
  },
  {
    id: 2,
    date: '07 FEB 2018',
    title: '#4 Ethereum Buenos Aires: Escalando un mercado basado en Blockchain',
    more: 'How Plasma Tvs And Lcd Tvs Differ Lorem ipsum dol…',
  },
  {
    id: 3,
    date: '07 FEB 2018',
    title: '#5 Ethereum Buenos Aires: Lightning + DeFi',
    more: 'Ethereum is about bringing together like minds around...',
  },
]

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

        <div className='events__upcoming-events'>
          <div className='events__subtitle'>
            <h4>upcoming events</h4>
          </div>
          <Grid container>
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
        </div>

        <div className='events__past-events'>
          <div className='events__subtitle'>
            <h4>past events</h4>
          </div>
          <Grid container className='events__past-events__container'>
            {pastEvents &&
              pastEvents.map(event => (
                <Grid item xs={12} md={6} lg={4}>
                  <EventCard id={event.id} title={event.title} date={event.date} hasPassed />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    )
  }
}
