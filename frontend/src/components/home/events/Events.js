import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

// routing
import { withRouter } from 'react-router-dom';

import Button from '../../common/button/Button';
import EventCard from '../../common/eventCard/EventCard';
import './events.scss';

const Events = ({ events, history }) => {
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
        <div className="card-events">
          <div className="center">
            <p className="title">Our meetups</p>
          </div>

          <div className="cards-events">
            <Grid container className="events__container">
              {orderedEventsToDisplay &&
                orderedEventsToDisplay.map(event => (
                  <Grid item xs={12} md={4} lg={4} key={`home-events__${event.id}`}>
                    <EventCard
                      handleClick={() => handleEventCardClick(event.id)}
                      id={event.id}
                      title={event.title}
                      date={event.date}
                      hasPassed={event.hasPassed}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>

        <div className="button-events">
          <Button title="View All Events" url="/events" />
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      hasPassed: PropTypes.bool,
    })
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Events);
