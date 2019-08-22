import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import meetup from '../../../assets/icons/logo--script.svg'
import discord from '../../../assets/icons/discord-brands.svg'
import twitter from '../../../assets/icons/twitter-brands.svg'

import './social.scss'
const iconSocial = [
  {
    icon: meetup,
    class: 'meetup img',
  },
  {
    icon: discord,
    class: 'discord img',
  },
  {
    icon: twitter,
    class: 'twitter img',
  },
]

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="container-social">
          {iconSocial.map(social => {
            return (
              <div className={social.class}>
                <img src={social.icon} alt="social" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
