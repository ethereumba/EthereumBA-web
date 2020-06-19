import React from 'react';

// proptypes
import { bool } from 'prop-types';

// i18n
import { useTranslation } from 'react-i18next';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Title, Description } from './styles';

// components
import EventDetailSidebar from '../EventDetailSidebar';

// types
import { eventType } from '../../../lib/types';
import { getI18nField } from '../../../lib/helpers'

const EventDetailTitleAndDescription = ({ event, isUpcomingEvent }) => {
  // Hooks
  const { i18n } = useTranslation();
  const lang = i18n.language

  return (
    <Grid item>
      <Grid container>
        <Hidden only={['xs', 'sm']}>
          <Grid item md={2} />
        </Hidden>
        <Grid item xs={12} md={10}>
          <Grid container direction="column">
            <Title isUpcoming={isUpcomingEvent}>{getI18nField(event, 'title', lang)}</Title>
            <Hidden mdUp>
              <Grid item xs={12} md={4}>
                <Grid container direction="column" alignItems="stretch" justify="flex-start">
                  <EventDetailSidebar isUpcomingEvent={isUpcomingEvent} event={event} />
                </Grid>
              </Grid>
            </Hidden>
            <Description>{getI18nField(event, 'description', lang)}</Description>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

EventDetailTitleAndDescription.propTypes = {
  event: eventType.isRequired,
  isUpcomingEvent: bool.isRequired,
};

export default EventDetailTitleAndDescription;
