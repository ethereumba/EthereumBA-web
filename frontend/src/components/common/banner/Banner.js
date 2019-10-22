import React from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

// router
import { withRouter } from 'react-router-dom';

// styled
import { MeetupButton } from './styles';

const Banner = ({ background, text, lightTheme, positionTop, history }) => {
  const isHome = history.location.pathname === '/';

  return (
    <div className={`banner ${positionTop ? 'top' : ''}`}>
      <img src={background} />

      <div className={`banner__text ${lightTheme ? 'lightTheme' : ''}`}>
        <h4>{text}</h4>
        {isHome && (
          <MeetupButton href="https://www.meetup.com/es/ethereum-ba/" target="_blank" rel="noopener noreferrer">
            Join our Meeutup
          </MeetupButton>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  lightTheme: PropTypes.bool,
  positionTop: PropTypes.bool,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
};

Banner.defaultProps = {
  lightTheme: false,
  positionTop: false,
};

export default withRouter(Banner);
