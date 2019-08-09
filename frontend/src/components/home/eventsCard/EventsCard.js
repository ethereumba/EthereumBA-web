import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import './eventsCard.scss'

const EventsCard = ({ id, image, date, title, more }) => (
  <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
    <div className="card-home">
      <div className="card card-shadow">
        <div className="container-date">
          <div>
            <img src={image} alt="icon calendar" />

            <p className="date">{date}</p>
          </div>

          <div className="title-card" variant="h5" component="h2">
            <p>{title}</p>
          </div>

          <div className="more">
            <p>{more}</p>
          </div>
        </div>
      </div>
    </div>
  </Grid>
)

EventsCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  more: PropTypes.string,
}

export default EventsCard
