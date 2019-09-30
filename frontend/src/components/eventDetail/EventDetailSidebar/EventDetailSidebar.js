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

const EventDetailSidebar = ({ event }) => {
  const generatePositionText = () => `
        ${event.place_street} ${event.place_number},
        ${event.placer_city}
    `;

  const upcomingEvents = useSelector(state => state.events.upcomingEvents);

  const checkEventStatus = () => upcomingEvents.includes(event);

  const handleOrangeButtonClick = () => (checkEventStatus() ? event.meetup_url : event.youtube_url);

  const handleOrangeButtonText = () => (checkEventStatus() ? 'Join Meetup' : 'Youtube Live');

  return (
    <Container item>
      <Grid container justify="flex-start" alignItems="center">
        <Hidden only={['xs', 'sm']}>
          <Grid item md={3}></Grid>
        </Hidden>
        <Grid item md>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <InfoDisplay isUpcoming={checkEventStatus()} icon={CalendarIcon} text={event.date} />
            <InfoDisplay isUpcoming={checkEventStatus()} icon={ClockIcon} text={'19:00 hs'} />
            <InfoDisplay isUpcoming={checkEventStatus()} icon={PositionIcon} text={generatePositionText()} />
            <OrangeButton target="_blank" href={handleOrangeButtonClick()}>
              {handleOrangeButtonText()}
            </OrangeButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventDetailSidebar;
