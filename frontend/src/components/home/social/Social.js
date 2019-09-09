import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Meetup from '../../../assets/social/meetup.svg'
import Youtube from '../../../assets/social/youtube.svg'
import Telegram from '../../../assets/social/telegram.svg'
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
    const date = new Date().getFullYear()

    return (
      <div className='social'>
        <div className={'sub-title'}>
          <p>get in touch</p>
        </div>

        <div className='container-social' container>
          {iconSocial.map(social => {
            return (
              <div key={social.icon} className={`${social.class} box-social`}>
                <img src={social.icon} alt={social.name} />
              </div>
            )
          })}
        </div>

        <div className='footer'>
          <p>Ethereum Buenos Aires {date}</p>
        </div>
      </div>
    )
  }
}
