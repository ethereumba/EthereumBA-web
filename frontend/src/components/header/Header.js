import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import logo from '../../assets/ethBuenosAires.png'
import logoLight from '../../assets/ethBuenosAires-light.svg'
import './header.scss'

export default class HeaderWhite extends Component {
  render() {
    const { white: lightTheme, selected } = this.props

    return (
      <div className={this.props.white ? 'main-header-white' : 'main-header'}>
        <Grid container>
          <Grid item xs={3} className="header-logo">
            <img src={lightTheme ? logoLight : logo} className={'logo'} alt={'Ethereum Buenos Aires'} />
          </Grid>
          <Grid item xs={6} className="menu-container">
            <Grid container className="menu">
              <Grid className="menu-item">
                <Link to="/" className="text">
                  HOME
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link to="/events" className={`text ${selected === 'events' ? 'selected' : ''}`}>
                  EVENTS
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link to="/education" className={`text ${selected === 'education' ? 'selected' : ''}`}>
                  EDUCATION
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link to="/ecosystem" className={`text ${selected === 'ecosystem' ? 'selected' : ''}`}>
                  ECOSYSTEM
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

HeaderWhite.propTypes = {
  white: PropTypes.bool,
  selected: PropTypes.string,
}
