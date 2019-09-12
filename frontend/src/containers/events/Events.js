import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

import { requestEvents } from '../../modules/events/actions'

import Stats from '../../components/common/stats/Stats'
import Header from '../../components/header/Header'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard'
import EventCard from '../../components/common/eventCard/EventCard'
import './events.scss'

const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

class Events extends Component {
  componentDidMount() {
    this.props.requestEvents()
  }

  render() {
    const { pastEvents, upcomingEvents } = this.props
    return (
      <div className={'events'}>
        <Header lightTheme />
        <Banner text={eventsBannerText} background={Background} lightTheme positionTop />

        <div className='events__upcoming-events'>
          <div className='events__subtitle'>
            <h4>upcoming events</h4>
          </div>
          <Grid container className='events__container'>
            {upcomingEvents &&
              upcomingEvents.map(event => {
                const address = `${event.place_street} ${event.place_number}, ${event.place_city}`
                return (
                  <UpcomingEventCard
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    address={address}
                    url={event.meetup_url}
                  />
                )
              })}
          </Grid>
        </div>

        <div className='events__past-events'>
          <div className='events__subtitle'>
            <h4>past events</h4>
          </div>
          <Grid container className='events__container'>
            {pastEvents &&
              pastEvents.map(event => (
                <Grid item xs={12} md={6} lg={4}>
                  <EventCard
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    hasPassed={event.hasPassed}
                    url={event.meetup_url}
                  />
                </Grid>
              ))}
          </Grid>
        </div>

        <Stats />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pastEvents: state.events.pastEvents,
    upcomingEvents: state.events.upcomingEvents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
