import React from 'react';

// proptypes
import { func, bool, number } from 'prop-types';

// material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader';
import EventDetailTitleAndDescription from '../../components/eventDetail/EventDetailTitleAndDescription';
import EventDetailTalkCard from '../../components/eventDetail/EventDetailTalkCard';
import EventDetailSidebar from '../../components/eventDetail/EventDetailSidebar';
import EventDetailSlider from '../../components/eventDetail/EventDetailSlider';
import EventDetailGiantPhoto from '../../components/eventDetail/EventDetailGiantPhoto';

// styles
import './styles.scss';

// types
import { eventType } from '../../lib/types';

const EventDetail = ({ event, isPhotoView, onPhotoClick, indexOfSelectedPhoto }) => (
  <Container maxWidth="lg" className="event-detail">
    <Grid container direction="row" alignItems="flex-start" justify="flex-start">
      <Grid item xs={12} md={12}>
        <Grid container direction="column" alignItems="stretch" justify="flex-start">
          <EventDetailHeader />
        </Grid>
      </Grid>
      {isPhotoView ? (
        <Grid item xs={12} md={12}>
          <EventDetailGiantPhoto indexOfSelectedPhoto={indexOfSelectedPhoto} event={event} />
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={12}>
            <Grid container direction="row">
              <Grid item xs={12} md={8}>
                <Grid container direction="column" alignItems="stretch" justify="flex-start">
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
            </Grid>
          </Grid>
        </>
      )}
      <Grid item xs={12} md={12}>
        <EventDetailSlider event={event} onPhotoClick={onPhotoClick} />
      </Grid>
    </Grid>
  </Container>
);

EventDetail.propTypes = {
  event: eventType.isRequired,
  isPhotoView: bool.isRequired,
  onPhotoClick: func.isRequired,
  indexOfSelectedPhoto: number.isRequired,
};

export default EventDetail;
