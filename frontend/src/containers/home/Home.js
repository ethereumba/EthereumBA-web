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
    this.props.requestEvents()
  }

  render() {
    const { events } = this.props

    return (
      <div>
        <Header />
        <Banner text={homeBannerText} background={Background} />
        <div className='gradient'>
          <Events events={events} />
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
    events: state.events.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
