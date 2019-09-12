import React, { Component } from 'react'

import openZeppelin from '../../../assets/partners/open-zepelling.png'
import xivis from '../../../assets/partners/xivis.png'
import rcn from '../../../assets/partners/rcn.png'
import celo from '../../../assets/partners/celo.png'
import wibson from '../../../assets/partners/wibson.png'
import maker from '../../../assets/partners/maker.png'
import a3 from '../../../assets/partners/a3.png'

import './partners.scss'

const logosPartner = [
  {
    image: openZeppelin,
    alt: 'Open Zeppelin',
    height: 23,
    width: 146,
    url: 'https://openzeppelin.com/',
  },
  {
    image: xivis,
    alt: 'Xivis',
    height: 32,
    width: 89,
    url: 'https://xivis.com/',
  },
  {
    image: rcn,
    alt: 'RCN',
    height: 36,
    width: 89,
    url: 'https://ripiocredit.network/',
  },
  {
    image: celo,
    alt: 'Celo',
    height: 27,
    width: 90,
    url: 'https://celo.org/',
  },
  {
    image: wibson,
    alt: 'Wibson',
    height: 22,
    width: 116,
    url: 'https://wibson.org/',
  },
  {
    image: maker,
    alt: 'Maker',
    height: 51,
    width: 51,
    url: 'https://makerdao.com/',
  },
  {
    image: a3,
    alt: 'Area 3',
    height: 39,
    width: 43,
    url: 'https://areatresworkplace.com',
  },
]

export default class Partners extends Component {
  render() {
    return (
      <div className={'partners'}>
        <div className={'sub-title'}>
          <p>partners</p>
        </div>

        <div className='container-partners'>
          {logosPartner.map(logo => {
            return (
              <div className={'partners-logo'}>
                <a href={logo.url} target='_blank'>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    key={logo.image}
                    style={{ height: logo.height, width: logo.width }}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
