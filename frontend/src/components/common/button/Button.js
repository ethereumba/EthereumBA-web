import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  anchor: PropTypes.bool,
  button: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  url: '',
  anchor: false,
  button: false,
  onClick: () => {},
}

export default Button
