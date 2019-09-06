import React from 'react'

import './button.scss'

const Button = ({ title, url }) => (
  <a className='custom-button' href={url}>
    {title}
  </a>
)

export default Button
