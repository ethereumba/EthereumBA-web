import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'

import './linkCard.scss'

const LinkCard = ({ title, subtitle, url }) => (
  <a className="container-linkCard card-shadow" href={url} target="_blank">
    <p className="text-linkCard">{title}</p>
    <p className="text-linkCard-2">{subtitle}</p>
  </a>
)

export default LinkCard
