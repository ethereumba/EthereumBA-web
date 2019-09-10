import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import EventDate from '../../common/eventDetails/EventDate'
import './eventCard.scss'

const EventCard = ({ id, date, title, more, hasPassed }) => (
  <div className='card-home'>
    <div className='card card-shadow'>
      <div className='card-container'>
        <EventDate date={date} hasPassed={hasPassed} />

        <div className={`title-card ${hasPassed ? 'past' : ''}`} variant='h5' component='h2'>
          <p>{title}</p>
        </div>
      </div>
    </div>
  </div>
)

EventCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  more: PropTypes.string,
}

export default EventCard
