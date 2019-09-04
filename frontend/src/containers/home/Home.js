import React, { Component } from 'react'

import Header from './../../components/header/Header'
import Community from '../../components/home/community/Community'
import Partners from '../../components/home/partners/Partners'
import Events from '../../components/home/events/Events'
<<<<<<< HEAD
import Social from '../../components/home/social/Social'
=======
import Background from '../../assets/temporary-home-banner.png'
>>>>>>> ETHBA-38 WIP restyle home main banner

import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header className='header-home' />
        <div className={'main'}>
          <img src={Background} />
          <div className='main__text'>
            <h4>
              Ethereum Buenos Aires is a forum for <br />
              developers, entrepreneurs, and enthusiasts <br />
              to learn about and develop for Ethereum
            </h4>
          </div>
        </div>
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
