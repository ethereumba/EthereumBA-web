import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

import { requestEvents, requestMoreEvents } from '../../modules/events/actions'

import Stats from '../../components/common/stats/Stats'
import Header from '../../components/header/Header'
import Social from '../../components/common/social/Social'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard'
import EventCard from '../../components/common/eventCard/EventCard'
import Button from '../../components/common/button/Button'
import './events.scss'

const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

class Events extends Component {
  constructor() {
    super()

    this.state = {
      eventsShown: 0,
      showMore: false,
    }
  }

  componentDidMount() {
    this.props.requestEvents()
  }

  getMoreEvents = () => {
    const { nextApi } = this.props
    this.props.requestMoreEvents(nextApi)
  }

  componentDidUpdate(prevProps) {
    const { totalEventsCount, currentFetchEvents } = this.props

    if (prevProps.currentFetchEvents !== currentFetchEvents) {
      const availableEventsInCurrentFetch = currentFetchEvents.length
      const eventsShown =
        eventsShown === 0 ? availableEventsInCurrentFetch : this.state.eventsShown + availableEventsInCurrentFetch
      const showMore = totalEventsCount > eventsShown

      this.setState({
        showMore: showMore,
        eventsShown: eventsShown,
      })
    }
  }

  render() {
    const { pastEvents, upcomingEvents } = this.props
    const { showMore } = this.state

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
              upcomingEvents.map((event, i) => {
                const address = `${event.place_street} ${event.place_number}, ${event.place_city}`
                return (
                  <UpcomingEventCard
                    key={`events-upcoming__${event.id}-${i}`}
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
              pastEvents.map((event, i) => (
                <Grid item xs={12} md={6} lg={4} key={`events-past__${event.id}-${i}`}>
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

          <div className='events__past-events__btn'>
            {showMore && <Button onClick={this.getMoreEvents} title={'view more'} button />}
          </div>
        </div>

        <Stats />

        <Social />
      </div>
    )
  }
}

Events.propTypes = {
  currentFetchEvents: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      hasPassed: PropTypes.bool,
      id: PropTypes.number,
      meetup_url: PropTypes.string,
      photos: PropTypes.array,
      place_city: PropTypes.string,
      place_number: PropTypes.string,
      place_street: PropTypes.string,
      sponsors: PropTypes.array,
      talks: PropTypes.array,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  pastEvents: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      hasPassed: PropTypes.bool,
      id: PropTypes.number,
      meetup_url: PropTypes.string,
      photos: PropTypes.array,
      place_city: PropTypes.string,
      place_number: PropTypes.string,
      place_street: PropTypes.string,
      sponsors: PropTypes.array,
      talks: PropTypes.array,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      hasPassed: PropTypes.bool,
      id: PropTypes.number,
      meetup_url: PropTypes.string,
      photos: PropTypes.array,
      place_city: PropTypes.string,
      place_number: PropTypes.string,
      place_street: PropTypes.string,
      sponsors: PropTypes.array,
      talks: PropTypes.array,
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  totalEventsCount: PropTypes.number,
  nextApi: PropTypes.string,
}

Events.defaultProps = {
  pastEvents: [],
  upcomingEvents: [],
  totalEventsCount: 0,
  nextApi: '',
}

const mapStateToProps = state => {
  return {
    currentFetchEvents: state.events.data,
    pastEvents: state.events.pastEvents,
    upcomingEvents: state.events.upcomingEvents,
    totalEventsCount: state.events.totalEventsCount,
    nextApi: state.events.nextApi,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestMoreEvents: nextApi => dispatch(requestMoreEvents(nextApi)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
