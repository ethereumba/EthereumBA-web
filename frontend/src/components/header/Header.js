import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../assets/ethBuenosAires.png'
import logoLight from '../../assets/ethBuenosAires-light.svg'
import { Link } from 'react-router-dom'

import './header.scss'

export default class HeaderWhite extends Component {
  render() {
    const { white: lightTheme, selected } = this.props
    return (
      <div className={this.props.white ? 'main-header-white' : 'main-header'}>
        <Grid container>
          <Grid item xs={3} className="header-logo">
            <img src={lightTheme ? logoLight : logo} className={'logo'} alt={'logo'} />
          </Grid>
          <Grid item xs={6} className="menu-container">
            <Grid container className="menu">
              <Grid className="menu-item">
                <Link to="/" rel="noopener noreferrer" className="text">
                  HOME
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link
                  to="/events"
                  rel="noopener noreferrer"
                  className={`text ${selected === 'events' ? 'selected' : ''}`}
                >
                  EVENTS
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link
                  to="/education"
                  rel="noopener noreferrer"
                  className={`text ${selected === 'education' ? 'selected' : ''}`}
                >
                  EDUCATION
                </Link>
              </Grid>
              <Grid className="menu-item">
                <Link
                  to="/ecosystem"
                  rel="noopener noreferrer"
                  className={`text ${selected === 'ecosystem' ? 'selected' : ''}`}
                >
                  ECOSYSTEM
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    )
  }
}
