import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'

/* Components */
import Logo from '../../assets/temporary-white-logo.svg'
import './header.scss'

export default class Header extends Component {
  render() {
    const { logo, lightTheme } = this.props

    return (
      <div className='main-header'>
        <div className='container'>
          {logo && (
            <div className='header-logo'>
              <Link to={'/'}>
                <img src={Logo} className={'logo'} alt={'Ethereum Buenos Aires'} />
              </Link>
            </div>
          )}
          <div className={`menu ${lightTheme ? 'lightTheme' : ''}`}>
            <Menu right>
              <Link to='/' className='menu-item'>
                HOME
              </Link>
              <Link to='/events' className='menu-item'>
                EVENTS
              </Link>
              <Link to='/education' className='menu-item'>
                EDUCATION
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
