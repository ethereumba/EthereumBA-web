import React from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import {} from './styles';

// components
import InfoDisplay from './InfoDisplay';

// assets
import CalendarIcon from '../../../assets/eventDetail/calendar-grey.svg';
import ClockIcon from '../../../assets/eventDetail/clock-grey.svg';
import PositionIcon from '../../../assets/eventDetail/position-grey.svg';

const EventDetailSidebar = ({ event }) => {
  const generatePositionText = () => `
        ${event.place_street} ${event.place_number},
        ${event.placer_city}
    `;

  return (
    <Grid item>
      <Grid container justify="flex-start" alignItems="center">
        <Hidden only={['xs', 'sm']}>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item md>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <InfoDisplay icon={CalendarIcon} text={event.date} />
            <InfoDisplay icon={ClockIcon} text={'19:00 hs'} />
            <InfoDisplay icon={PositionIcon} text={generatePositionText()} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventDetailSidebar;
