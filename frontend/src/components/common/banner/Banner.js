import React from 'react'

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

export default Banner
