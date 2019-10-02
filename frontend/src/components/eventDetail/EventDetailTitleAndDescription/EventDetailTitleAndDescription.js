import React from 'react';
import { useSelector } from 'react-redux';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Title, Description } from './styles';

const EventDetailTitleAndDescription = ({ event, isUpcomingEvent }) => (
  <Grid item>
    <Grid container>
      <Hidden only={['xs', 'sm']}>
        <Grid item md={2}></Grid>
      </Hidden>
      <Grid item xs={12} md={10}>
        <Grid container direction="column">
          <Title isUpcoming={isUpcomingEvent}>{event.title}</Title>
          <Description>{event.description}</Description>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default EventDetailTitleAndDescription;
