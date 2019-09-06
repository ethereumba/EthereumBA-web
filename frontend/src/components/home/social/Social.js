import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Meetup from '../../../assets/icons/social/meetup.svg'
import Youtube from '../../../assets/icons/social/youtube.svg'
import Telegram from '../../../assets/icons/social/telegram.svg'
import './social.scss'

const iconSocial = [
  {
    icon: Meetup,
    class: 'meetup img',
    name: 'Meetup',
  },
  {
    icon: Youtube,
    class: 'youtube img',
    name: 'Youtube',
  },
  {
    icon: Telegram,
    class: 'telegram img',
    name: 'Telegram',
  },
]

export default class Social extends Component {
  render() {
    return (
      <div className='social'>
        <Grid className='container-social' container>
          {iconSocial.map(social => {
            return (
              <Grid key={social.icon} item xs={3} sm={2} md={2} lg={1} className='box-social'>
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
