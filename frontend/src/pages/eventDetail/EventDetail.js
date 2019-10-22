import React from 'react';

// proptypes
import { func, bool, number, arrayOf } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { StyledContainer, OuterContainer } from './styles';

// components
import EventDetailHeader from '../../components/eventDetail/EventDetailHeader';
import EventDetailTitleAndDescription from '../../components/eventDetail/EventDetailTitleAndDescription';
import EventDetailTalkCard from '../../components/eventDetail/EventDetailTalkCard';
import EventDetailSidebar from '../../components/eventDetail/EventDetailSidebar';
import EventDetailSlider from '../../components/eventDetail/EventDetailSlider';
import EventDetailGiantPhoto from '../../components/eventDetail/EventDetailGiantPhoto';

// types
import { eventType, talkType } from '../../lib/types';

const EventDetail = ({
  event,
  isPhotoView,
  onPhotoClick,
  indexOfSelectedPhoto,
  isUpcomingEvent,
  onCloseIconClick,
  talks,
}) => (
  <StyledContainer maxWidth="lg">
    <OuterContainer container direction="row" alignItems="flex-start" justify="flex-start">
      <Grid item xs={12} md={12}>
        <Grid container direction="column" alignItems="stretch" justify="flex-start">
          <EventDetailHeader />
        </Grid>
      </Grid>
      {isPhotoView ? (
        <Grid item xs={12} md={12}>
          <EventDetailGiantPhoto
            indexOfSelectedPhoto={indexOfSelectedPhoto}
            event={event}
            onCloseIconClick={onCloseIconClick}
          />
        </Grid>
      ) : (
        <Grid item xs={12} md={12}>
          <Grid container direction="row">
            <Grid item xs={12} md={8}>
              <Grid container direction="column" alignItems="stretch" justify="flex-start">
                <EventDetailTitleAndDescription isUpcomingEvent={isUpcomingEvent} event={event} />
                {talks.map(talk => (
                  <EventDetailTalkCard key={talk.id} talk={talk} />
                ))}
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={4}>
                <Grid container direction="column" alignItems="stretch" justify="flex-start">
                  <EventDetailSidebar isUpcomingEvent={isUpcomingEvent} event={event} />
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      )}
      {!isPhotoView && (
        <Grid item xs={12} md={12}>
          <EventDetailSlider event={event} onPhotoClick={onPhotoClick} />
        </Grid>
      )}
    </OuterContainer>
  </StyledContainer>
);

EventDetail.propTypes = {
  event: eventType.isRequired,
  isPhotoView: bool.isRequired,
  onPhotoClick: func.isRequired,
  indexOfSelectedPhoto: number.isRequired,
  isUpcomingEvent: bool.isRequired,
  onCloseIconClick: func.isRequired,

  talks: arrayOf(talkType).isRequired,
};

export default EventDetail;
