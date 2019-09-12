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

/** 3000 (por fuera)
 * docker ps
 * docker stop node...
 * rm -rf node_modules/
 * npm i
 * npm start
 */
