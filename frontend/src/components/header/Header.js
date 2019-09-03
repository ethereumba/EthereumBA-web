import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'

/* Components */
import logo from '../../assets/ethBuenosAires.png'
// import logoLight from '../../assets/ethBuenosAires-light.svg'
import './header.scss'

export default class HeaderWhite extends Component {
  render() {
    // const { white: lightTheme, selected } = this.props

    return (
      // <div className={this.props.white ? 'main-header-white' : 'main-header'}>
      <div className='main-header'>
        <div className='container'>
          <div className='header-logo'>
            <Link to={'/'}>
              <img src={logo} className={'logo'} alt={'Ethereum Buenos Aires'} />
            </Link>
          </div>
          <Menu>
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
    )
  }
}

HeaderWhite.propTypes = {
  white: PropTypes.bool,
  selected: PropTypes.string,
}
