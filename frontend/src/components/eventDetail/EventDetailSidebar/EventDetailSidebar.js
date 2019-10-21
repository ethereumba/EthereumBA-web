import React from 'react';

// proptypes
import { bool } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { OrangeButton, Container, ContentContainer } from './styles';

// components
import InfoDisplay from './InfoDisplay';

// assets
import CalendarIcon from '../../../assets/eventDetail/calendar-grey.svg';
import ClockIcon from '../../../assets/eventDetail/clock-grey.svg';
import PositionIcon from '../../../assets/eventDetail/position-grey.svg';

// types
import { eventType } from '../../../lib/types';

const EventDetailSidebar = ({ event, isUpcomingEvent }) => {
  const generatePositionText = () => `
        ${event.place_street} ${event.place_number},
        ${event.place_city}
    `;

  const handleOrangeButtonClick = () => (isUpcomingEvent ? event.meetup_url : event.youtube_url);

  const generateButtonText = () => (isUpcomingEvent ? 'Join Meetup' : 'Youtube');

  return (
    <Container item>
      <Grid container justify="flex-start" alignItems="center">
        <Hidden only={['xs', 'sm']}>
          <Grid item md={3} />
        </Hidden>
        <Grid item md>
          <ContentContainer container direction="column" justify="flex-start" alignItems="flex-start">
            <Grid item xs={6}>
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                <InfoDisplay isUpcoming={isUpcomingEvent} icon={CalendarIcon} text={event.date} />
                <InfoDisplay isUpcoming={isUpcomingEvent} icon={ClockIcon} text={event.time} />
                <InfoDisplay
                  isUpcoming={isUpcomingEvent}
                  icon={PositionIcon}
                  text={generatePositionText()}
                  googleUrl={event.place_map_url}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <OrangeButton target="_blank" href={handleOrangeButtonClick()}>
                {generateButtonText()}
              </OrangeButton>
            </Grid>
          </ContentContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

EventDetailSidebar.propTypes = {
  event: eventType.isRequired,
  isUpcomingEvent: bool.isRequired,
};

export default EventDetailSidebar;
