import React from 'react'

// proptypes
import {arrayOf} from 'prop-types'

// material ui
import { Grid } from '@material-ui/core'

// components
import Stats from '../../components/common/stats/Stats'
import Header from '../../components/header/Header'
import Social from '../../components/common/social/Social'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard'
import EventCard from '../../components/common/eventCard/EventCard'
import Button from '../../components/common/button/Button'

// types
import {eventType} from '../../utils/types'

// styles
import './events.scss'

// constants
const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

const Events = ({getMoreEvents, showMore, pastEvents, upcomingEvents, handleEventCardClick}) => 
      (
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
                    handleClick={() => handleEventCardClick(event.id)}
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
                    handleClick={() => handleEventCardClick(event.id)}
                    title={event.title}
                    date={event.date}
                    hasPassed={event.hasPassed}
                    url={event.meetup_url}
                  />
                </Grid>
              ))}
          </Grid>

          <div className='events__past-events__btn'>
            {showMore && <Button onClick={getMoreEvents} title={'view more'} button />}
          </div>
        </div>

        <Stats />

        <Social />
      </div>
    )
  


Events.propTypes = {
  // non required attributes
  pastEvents: arrayOf(
   eventType 
  ),
  upcomingEvents: arrayOf(
 eventType
  ),
}

Events.defaultProps = {
  pastEvents: [],
  upcomingEvents: [],
}

export default Events
