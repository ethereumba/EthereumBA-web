import React, { Component } from 'react'

import Header from '../../components/header/Header'
import Banner from '../../components/common/banner/Banner'
import Background from '../../assets/events-main-banner.svg'

const eventsBannerText = `Our events are open to anyone interested
on the subject, regardless of previous
experience`

export default class Events extends Component {
  render() {
    return (
      <div>
        <Header lightTheme />
        <Banner text={eventsBannerText} background={Background} lightTheme />
      </div>
    )
  }
}
