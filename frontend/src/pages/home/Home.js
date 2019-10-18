import React from 'react'

// proptypes
import { shape, arrayOf, string, number, bool } from 'prop-types'

// components
import Header from '../../components/header/Header'
import Community from '../../components/home/community/Community'
import Partners from '../../components/home/partners/Partners'
import Events from '../../components/home/events/Events'
import Social from '../../components/common/social/Social'
import Banner from '../../components/common/banner/Banner'

// assets
import Background from '../../assets/home-main-banner.svg'

// styles
import './home.scss'

// types
import { eventType } from '../../lib/types'

const homeBannerText = `Ethereum Buenos Aires is a forum for
developers, entrepreneurs, and enthusiasts
to learn about and develop for Ethereum`

const Home = ({ events }) => (
  <div>
    <Header />
    <Banner text={homeBannerText} background={Background} bottom />
    <div className='gradient'>
      <Events events={events} />
      <Community />
      <Partners />
      <Social />
    </div>
  </div>

)

Home.propTypes = {
  events: arrayOf(eventType).isRequired,
}

export default Home