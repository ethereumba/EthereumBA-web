import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'

/* Components */
import Logo from '../../assets/temporary-white-logo.svg'
import LightThemeLogo from '../../assets/ethBuenosAires-light.svg'
import './header.scss'

export default class Header extends Component {
  render() {
    const { lightTheme } = this.props

    return (
      <div className='main-header'>
        <div className='container'>
          <div className='header-logo'>
            <Link to={'/'}>
              <img src={lightTheme ? LightThemeLogo : Logo} className={'logo'} alt={'Ethereum Buenos Aires'} />
            </Link>
          </div>

          <div className={`menu ${lightTheme ? 'lightTheme' : ''}`}>
            <Menu right>
              <Link to='/' className='menu-item'>
                HOME
              </Link>
              <Link to='/events' className='menu-item'>
                EVENTS
              </Link>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  logo: PropTypes.bool,
  lightTheme: PropTypes.bool,
}
