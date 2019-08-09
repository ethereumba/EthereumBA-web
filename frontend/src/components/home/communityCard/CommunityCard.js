import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import './communityCard.scss'

const CommunityCard = ({ title, image, text }) => (
  <Grid item xs={12} sm={6} md={3} lg={3} className={'box-community'}>
    <div className={'card-community'}>
      <img src={image} alt={title} />
      <p className={'title'}> {title} </p>
      <p className={'text'}> {text} </p>
    </div>
  </Grid>
)

CommunityCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
}

export default CommunityCard
