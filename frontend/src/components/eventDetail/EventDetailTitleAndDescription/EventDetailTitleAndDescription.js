import React from 'react';

// proptypes
import { bool } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Title, Description } from './styles';

// components
import EventDetailSidebar from '../EventDetailSidebar';

// types
import { eventType } from '../../../lib/types';

const EventDetailTitleAndDescription = ({ event, isUpcomingEvent }) => (
  <Grid item>
    <Grid container>
      <Hidden only={['xs', 'sm']}>
        <Grid item md={2} />
      </Hidden>
      <Grid item xs={12} md={10}>
        <Grid container direction="column">
          <Title isUpcoming={isUpcomingEvent}>{event.title}</Title>
          <Hidden mdUp>
            <Grid item xs={12} md={4}>
              <Grid container direction="column" alignItems="stretch" justify="flex-start">
                <EventDetailSidebar isUpcomingEvent={isUpcomingEvent} event={event} />
              </Grid>
            </Grid>
          </Hidden>
          <Description>{event.description}</Description>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

EventDetailTitleAndDescription.propTypes = {
  event: eventType.isRequired,
  isUpcomingEvent: bool.isRequired,
};

export default EventDetailTitleAndDescription;
