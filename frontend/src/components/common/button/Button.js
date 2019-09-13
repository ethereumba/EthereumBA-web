import React from 'react'
import { Link } from 'react-router-dom'

import './button.scss'

const Button = ({ title, url, anchor, button, onClick }) => {
  if (button)
    return (
      <button onClick={onClick} className='custom-button secondary-button'>
        {title}
      </button>
    )
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
