import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

// router
import { withRouter } from 'react-router-dom';

// material ui
import Grid from '@material-ui/core/Grid';

// styles
import './styles.scss';

// assets
import BackArrowLogo from '../../../assets/eventDetail/back-arrow-orange.svg';

const EventDetailHeader = ({ history }) => {
  // Hooks
  const { t } = useTranslation();

  const handleBackArrowClick = () => history.push('/events');

  return (
    <Grid item xs={12} md={12} className="event-header">
      <Grid container>
        <Grid item xs={1} className="event-header__icon-container">
          <div onClick={handleBackArrowClick} className="event-header__icon-wrapper">
            <img src={BackArrowLogo} alt="back" />
          </div>
        </Grid>
        <Grid item xs className="event-header__title-container">
          <h3>{t('meetup')}</h3>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(EventDetailHeader);
