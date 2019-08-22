import React, { Component } from 'react'

import Header from '../../components/header/Header'

export default class Events extends Component {
  render() {
    return (
      <div>
        <Header white selected={'events'} />
      </div>
    )
  }
}
