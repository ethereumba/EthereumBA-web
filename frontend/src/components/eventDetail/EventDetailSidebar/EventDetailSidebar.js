import React from 'react';

// proptypes
import { bool } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { OrangeButton, Container, ContentContainer, ButtonContainer } from './styles';

// components
import InfoDisplay from './InfoDisplay';

// assets
import CalendarIcon from '../../../assets/eventDetail/calendar-grey.svg';
import ClockIcon from '../../../assets/eventDetail/clock-grey.svg';
import PositionIcon from '../../../assets/eventDetail/position-grey.svg';

// types
import { eventType } from '../../../lib/types';

// lib
import { getFormattedDate, getFormattedTime } from '../../../lib/helpers';

const EventDetailSidebar = ({ event, isUpcomingEvent }) => {
  const generatePositionText = () => `
        ${event.place_street} ${event.place_number},
        ${event.place_city}
    `;

  const handleOrangeButtonClick = () => (isUpcomingEvent ? event.meetup_url : event.youtube_url);

  const generateButtonText = () => (isUpcomingEvent ? 'Join Meetup' : 'Youtube');

  const eventDate = getFormattedDate(event.date);
  const eventTime = getFormattedTime(event.date);

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
                <InfoDisplay isUpcoming={isUpcomingEvent} icon={CalendarIcon} text={eventDate} />
                <InfoDisplay isUpcoming={isUpcomingEvent} icon={ClockIcon} text={eventTime} />
                <InfoDisplay
                  isUpcoming={isUpcomingEvent}
                  icon={PositionIcon}
                  text={generatePositionText()}
                  googleUrl={event.place_map_url}
                />
              </Grid>
            </Grid>
            <ButtonContainer item xs={6}>
              <OrangeButton target="_blank" href={handleOrangeButtonClick()}>
                {generateButtonText()}
              </OrangeButton>
            </ButtonContainer>
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
