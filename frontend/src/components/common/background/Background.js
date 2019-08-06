import React, { Component } from 'react'
import './background.scss'

const Background = props => {
  return <div className="background">{props.children}</div>
}

export default Background
