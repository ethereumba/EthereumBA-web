import React from 'react'
import { Link } from 'react-router-dom'

import './button.scss'

const Button = ({ title, url, anchor }) => {
  return anchor ? (
    <a className='custom-button' href={url} target='_blank'>
      {title}
    </a>
  ) : (
    <Link className='custom-button' to={url}>
      {title}
    </Link>
  )
}

export default Button
