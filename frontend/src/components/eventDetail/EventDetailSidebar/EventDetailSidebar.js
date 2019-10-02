import React from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { OrangeButton, Container } from './styles';

// components
import InfoDisplay from './InfoDisplay';

// redux
import { useSelector } from 'react-redux';

// assets
import CalendarIcon from '../../../assets/eventDetail/calendar-grey.svg';
import ClockIcon from '../../../assets/eventDetail/clock-grey.svg';
import PositionIcon from '../../../assets/eventDetail/position-grey.svg';

const EventDetailSidebar = ({ event, isUpcomingEvent }) => {
  const generatePositionText = () => `
        ${event.place_street} ${event.place_number},
        ${event.place_city}
    `;

  const handleOrangeButtonClick = () => (isUpcomingEvent ? event.meetup_url : event.youtube_url);

  const generateButtonText = () => (isUpcomingEvent ? 'Join Meetup' : 'Youtube Live');

  return (
    <Container item>
      <Grid container justify="flex-start" alignItems="center">
        <Hidden only={['xs', 'sm']}>
          <Grid item md={3}></Grid>
        </Hidden>
        <Grid item md>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <InfoDisplay isUpcoming={isUpcomingEvent} icon={CalendarIcon} text={event.date} />
            <InfoDisplay isUpcoming={isUpcomingEvent} icon={ClockIcon} text={event.time} />
            <InfoDisplay
              isUpcoming={isUpcomingEvent}
              icon={PositionIcon}
              text={generatePositionText()}
              googleUrl={event.place_map_url}
            />
            <OrangeButton target="_blank" href={handleOrangeButtonClick()}>
              {generateButtonText()}
            </OrangeButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventDetailSidebar;
