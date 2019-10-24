import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Stats from '../../common/stats/Stats'
import CommunityCard from '../../home/communityCard/CommunityCard'
import CommunityImage1 from '../../../assets/icons/1.png'
import CommunityImage2 from '../../../assets/icons/2.png'
import CommunityImage3 from '../../../assets/icons/3.png'
import CommunityImage4 from '../../../assets/icons/4.png'
import './community.scss'

const communityData = [
  {
    image: CommunityImage1,
    title: 'Community',
    text:
      "We didn't have enought time",
  },
  {
    image: CommunityImage2,
    title: 'Networking',
    text:
      'TBD',
  },
  {
    image: CommunityImage3,
    title: 'Education',
    text:
      'You get the point.',
  },
  {
    image: CommunityImage4,
    title: 'Future',
    text:
      'It will be ready for next time!',
  },
]

export default class Community extends Component {
  render() {
    return (
      <div className={'community'}>
        <div className='community__header'>
          <div className={'sub-title'}>
            <h1>LEARN + SHARE + BUILD</h1>
          </div>

          <div className={'center'}>
            <p className={'title-2'}>
              Ethereum Buenos Aires is about empowering participants to shape this new world, while cementing the South
              American region as a thriving hub of Ethereum blockchain innovation.
            </p>
          </div>
        </div>

        <Stats />

        <Grid container className={'container-community community-text'} spacing={0}>
          {communityData.map(community => {
            return (
              <CommunityCard
                key={community.title}
                image={community.image}
                title={community.title}
                text={community.text}
              />
            )
          })}
        </Grid>
      </div>
    )
  }
}
