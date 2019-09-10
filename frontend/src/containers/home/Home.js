import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './../../components/header/Header'
import Community from '../../components/home/community/Community'
import Partners from '../../components/home/partners/Partners'
import Events from '../../components/home/events/Events'
import Social from '../../components/home/social/Social'
import Background from '../../assets/home-main-banner.svg'
import Banner from '../../components/common/banner/Banner'
import { requestEvents } from '../../modules/events/actions'
import './home.scss'

const homeBannerText = `Ethereum Buenos Aires is a forum for
developers, entrepreneurs, and enthusiasts
to learn about and develop for Ethereum`

class Home extends Component {
  componentDidMount() {
    dispatch(requestEvents)
  }

  render() {
    return (
      <div>
        <Header logo />
        <Banner text={homeBannerText} background={Background} />
        <div className='gradient'>
          <Events />
          <Community />
          <Partners />
          <Social />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
  }
}

export default connect(mapStateToProps)(Home)
