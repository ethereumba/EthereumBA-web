import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

// i18n
import { useTranslation } from 'react-i18next';

// routing
import { withRouter } from 'react-router-dom';

import Button from '../../common/button/Button';
import EventCard from '../../common/eventCard/EventCard';
import UpcomingEventCard from '../../events/upcomingEventCard/UpcomingEventCard';
import './events.scss';

// lib
import { getFormattedDate, getFormattedTime, getI18nField } from '../../../lib/helpers';

const Events = ({ events, history, upcomingEvents }) => {
  // Hooks
  const { t, i18n } = useTranslation();

  const eventsLength = events.length;
  let eventsToDisplay = [];
  if (eventsLength > 0) {
    eventsToDisplay = eventsLength <= 3 ? events : events.slice(0, 3);
  }
  const orderedEventsToDisplay = [...eventsToDisplay];

  const handleEventCardClick = id => {
    history.push(`/events/${id}`);
  };

  return (
    <div className="background-events">
      <div className="events">
        <div className="center">
          <p className="title">{t('ourMeetups')}</p>
        </div>

        <div className="card-events">
          <div className="cards-events">
            {upcomingEvents && upcomingEvents.length > 0 && (
              <div className="events__upcoming-home">
                <div className="events__subtitle">
                  <h4>{t('upcomingEvents')}</h4>
                </div>
                <Grid container className="events__container">
                  {upcomingEvents.map(event => {
                    const address = `${event.place_street} ${event.place_number}, ${event.place_city}`;
                    const eventDate = getFormattedDate(event.date);
                    const eventTime = getFormattedTime(event.date);

                    return (
                      <UpcomingEventCard
                        key={`events-upcoming__${event.date}`}
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
          </div>

          <div className="cards-events">
            <div className="events__subtitle">
              <h4>{t('pastEvents')}</h4>
            </div>
            <Grid container className="events__container">
              {orderedEventsToDisplay &&
                orderedEventsToDisplay.map(event => {
                  const eventDate = getFormattedDate(event.date);

                  return (
                    <Grid item xs={12} md={4} lg={4} key={`home-events__${event.id}`}>
                      <EventCard
                        handleClick={() => handleEventCardClick(event.id)}
                        id={event.id}
                        title={getI18nField(event, 'title', i18n.language)}
                        date={eventDate}
                        hasPassed={event.hasPassed}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>

        <div className="button-events">
          <Button title={t('allEvents')} url="/events" />
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title_es: PropTypes.string,
      title_en: PropTypes.string,
      title_pt: PropTypes.string,
      date: PropTypes.string,
      hasPassed: PropTypes.bool,
    })
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title_es: PropTypes.string,
      title_en: PropTypes.string,
      title_pt: PropTypes.string,
      date: PropTypes.string,
      hasPassed: PropTypes.bool,
    })
  ).isRequired,
};

export default withRouter(Events);
