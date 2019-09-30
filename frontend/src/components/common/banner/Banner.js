import React from 'react'
import PropTypes from 'prop-types'

import './banner.scss'

const Banner = ({ background, text, lightTheme, positionTop }) => {
  return (
    <div className={`banner ${positionTop ? 'top' : ''}`}>
      <img src={background} />

      <div className={`banner__text ${lightTheme ? 'lightTheme' : ''}`}>
        <h4>{text}</h4>
      </div>
    </div>
  )
}

Banner.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  lightTheme: PropTypes.bool,
  positionTop: PropTypes.bool,
}

Banner.defaultProps = {
  lightTheme: false,
  positionTop: false,
}

export default Banner
