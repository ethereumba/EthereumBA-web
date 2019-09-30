import React from 'react';

// material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader';
import EventDetailTitleAndDescription from '../../components/eventDetail/EventDetailTitleAndDescription';
import EventDetailTalkCard from '../../components/eventDetail/EventDetailTalkCard';
import EventDetailSidebar from '../../components/eventDetail/EventDetailSidebar';
import EventDetailSlider from '../../components/eventDetail/EventDetailSlider';

// styles
import './styles.scss';

const EventDetail = ({ event }) => (
  <Container maxWidth="lg" className="event-detail">
    <Grid container direction="row" alignItems="flex-start" justify="flex-start">
      <Grid item xs={12} md={8}>
        <Grid container direction="column" alignItems="stretch" justify="flex-start">
          <EventDetailHeader />
          <EventDetailTitleAndDescription event={event} />
          {event.talks.map(talk => (
            <EventDetailTalkCard key={talk.id} talk={talk} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container direction="column" alignItems="stretch" justify="flex-start">
          <EventDetailSidebar event={event} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <EventDetailSlider event={event} />
      </Grid>
    </Grid>
  </Container>
);

export default EventDetail;
