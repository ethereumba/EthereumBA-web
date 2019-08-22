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
    name: 'Meetup'
  },
  {
    icon: discord,
    class: 'discord img',
    name: 'Discord'
  },
  {
    icon: twitter,
    class: 'twitter img',
    name: 'Twitter'
  }
]

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <Grid className="container-social" container>
          {iconSocial.map(social => {
            return (
              <Grid key={social.icon} item xs={3} sm={2} md={2} lg={1} className="box-social">
                <div className={social.class}>
                  <img src={social.icon} alt={social.name} />
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}
