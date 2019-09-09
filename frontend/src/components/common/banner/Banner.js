import React from 'react'

import './banner.scss'

const Banner = ({ background, text, lightTheme }) => {
  return (
    <div className={'banner'}>
      <img src={background} />
      <div className={`banner__text ${lightTheme ? 'lightTheme' : ''}`}>
        <h4>{text}</h4>
      </div>
    </div>
  )
}

export default Banner
