import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import './stats.scss';

const Stats = ({ stats }) => {
  return (
    <div className="stats--background">
      <div className="stats">
        <div className="stats__title">
          <p className="title">Our community is growing</p>
        </div>

        <div className="stats__container">
          {stats &&
            stats.map(stat => {
              return (
                <div key={stat.id} className={`stats__container__stat ${stat.id}`}>
                  <span>{stat.value}</span>
                  <span>{stat.name}</span>
                </div>
              );
            })}
        </div>

        <div className="stats__btn">
          <Button title="Join" url="https://www.meetup.com/ethereum-ba/" anchor />
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

Stats.defaultProps = {
  stats: [
    { id: 'members', value: '+1100', name: 'Members' },
    { id: 'meetupsPerMonth', value: 'x1', name: 'Meetup per month' },
    { id: 'attendeesPerMeetup', value: '+80', name: 'Attendees at each event' },
    { id: 'averageRating', value: '4.8', name: 'Average rating' },
  ],
};

export default Stats;
