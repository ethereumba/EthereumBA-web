import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

// i18n
import { useTranslation } from 'react-i18next';

/* Components */
import Logo from '../../assets/temporary-white-logo.svg';
import LightThemeLogo from '../../assets/ethereum-temp-logo.png';
import LanguageSwitch from '../i18n/LanguageSwitch';
import './header.scss';

const Header = props => {
  // Hooks
  const { t } = useTranslation();

  const { lightTheme } = props;

  return (
    <div className="main-header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={lightTheme ? LightThemeLogo : Logo} className="logo" alt="Ethereum Buenos Aires" />
          </Link>
        </div>

        <div className={`menu ${lightTheme ? 'lightTheme' : ''}`}>
          <Menu right>
            <Link to="/" className="menu-item">
              {t('home')}
            </Link>
            <Link to="/events" className="menu-item">
              {t('events')}
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="https://ethereumba.substack.com/" className="menu-item">
              {t('blog')}
            </a>
            <LanguageSwitch />
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  logo: PropTypes.bool,
  lightTheme: PropTypes.bool,
};
