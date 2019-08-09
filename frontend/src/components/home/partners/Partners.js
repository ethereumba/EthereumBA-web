import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import zeppelin from '../../../assets/partners/zeppelin.png'
import xivis from '../../../assets/partners/xivis.png'
import maker from '../../../assets/partners/maker.png'
import decentraland from '../../../assets/partners/decentraland.png'
import rcn from '../../../assets/partners/rcn.png'
import PartnersLogo from '../partnersLogo/PartnersLogo'
import './partners.scss'

const logosPartner = [
  {
    image: zeppelin,
    alt: 'Zepellin',
  },
  {
    image: xivis,
    alt: 'Xivis',
  },
  {
    image: maker,
    alt: 'Maker',
  },
  {
    image: decentraland,
    alt: 'Decentraland',
  },
  {
    image: rcn,
    alt: 'RCN',
  },
]

export default class Partners extends Component {
  render() {
    const date = new Date().getFullYear()

    return (
      <div className={'partners'}>
        <div className={'sub-title'}>
          <p>partners</p>
        </div>

        <div className="container-partners">
          <Grid className="container-box" container>
            {logosPartner.map(logo => {
              return <PartnersLogo key={logo.image} image={logo.image} logo={logo.alt} />
            })}
          </Grid>
        </div>

        <div className="footer">
          <p>Ethereum Buenos Aires {date}</p>
        </div>
      </div>
    )
  }
}
