import React from 'react'
import { Grid } from '@material-ui/core'

import getCardBackground from '../../../utils/helpers'
import Button from '../../common/button/Button'
import EventDetails from '../../common/eventDetails/EventDetails'
import './upcomingEventCard.scss'

const UpcomingEventCard = ({ id, title, date, time, address, hasPassed, url }) => {
  return (
    <Grid item xs={12} md={6}>
      <div className='card-event'>
        <div className='card card-shadow large'>
          <div className='upcoming-event'>
            <div className='upcoming-event__header'>
              <img src={getCardBackground(id)} />
              <div className={'upcoming-event__header__title card-container'}>
                <span>{`#${id} ${title}`}</span>
              </div>
            </div>
            <div className='upcoming-event__body card-container'>
              <div className={'upcoming-event__body__data'}>
                <EventDetails date={date} time={time} address={address} hasPassed={hasPassed} />
              </div>
              <div className={'upcoming-event__body__cta'}>
                <Button title='join meetup' url={url} anchor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default UpcomingEventCard
