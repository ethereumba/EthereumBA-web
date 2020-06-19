import React from 'react';

// proptypes
import { arrayOf } from 'prop-types';

// material ui
import { Grid } from '@material-ui/core';

// i18n
import { useTranslation } from 'react-i18next';

// components
import Stats from '../../components/common/stats/Stats';
import Header from '../../components/header/Header';
import Footer from '../../components/footer';
import Social from '../../components/common/social/Social';
import Banner from '../../components/common/banner/Banner';
import Background from '../../assets/events-main-banner.svg';
import UpcomingEventCard from '../../components/events/upcomingEventCard/UpcomingEventCard';
import EventCard from '../../components/common/eventCard/EventCard';
import Button from '../../components/common/button/Button';

// types
import { eventType } from '../../lib/types';

// styles
import './events.scss';

// lib
import { getFormattedDate, getFormattedTime, getI18nField } from '../../lib/helpers'

const Events = ({ getMoreEvents, showMore, pastEvents, upcomingEvents, handleEventCardClick }) => {
  // Hooks
  const { t, i18n } = useTranslation();

  return (
    <div className="events">
      <Header lightTheme />
      <Banner text={t('ourEvents')} background={Background} lightTheme positionTop />

      {upcomingEvents && upcomingEvents.length > 0 && (
        <div className="events__upcoming-events">
          <div className="events__subtitle">
            <h4>upcoming events</h4>
          </div>
          <Grid container className="events__container">
            {upcomingEvents.map((event, i) => {
              const address = `${event.place_street} ${event.place_number}, ${event.place_city}`;
              const eventDate = getFormattedDate(event.date);
              const eventTime = getFormattedTime(event.date);

              return (
                <UpcomingEventCard
                  key={`events-upcoming__${event.id}-${i}`}
                  handleClick={() => handleEventCardClick(event.id)}
                  id={event.id}
                  title={getI18nField(event, 'title', i18n.language)}
                  date={eventDate}
                  time={eventTime}
                  address={address}
                  url={event.meetup_url}
                />
              );
            })}
          </Grid>
        </div>
      )}

      <div className="events__past-events">
        <div className="events__subtitle">
          <h4>{t('pastEvents')}</h4>
        </div>
        <Grid container className="events__container">
          {pastEvents &&
            pastEvents.map((event, i) => {
              const eventDate = getFormattedDate(event.date);

              return (
                <Grid item xs={12} md={6} lg={4} key={`events-past__${event.id}-${i}`}>
                  <EventCard
                    id={event.id}
                    handleClick={() => handleEventCardClick(event.id)}
                    title={getI18nField(event, 'title', i18n.language)}
                    date={eventDate}
                    hasPassed={event.hasPassed}
                    url={event.meetup_url}
                  />
                </Grid>
              );
            })}
        </Grid>

        <div className="events__past-events__btn">
          {showMore && <Button onClick={getMoreEvents} title={t('communityGrowing')} button />}
        </div>
      </div>

      <Stats />

      <Social />
      <Footer />
    </div>
  );
};

Events.propTypes = {
  // non required attributes
  pastEvents: arrayOf(eventType),
  upcomingEvents: arrayOf(eventType),
};

Events.defaultProps = {
  pastEvents: [],
  upcomingEvents: [],
};

export default Events;
