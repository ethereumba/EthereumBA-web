import React, { useState, useEffect } from 'react';
import axios from 'axios';

import API_ROUTES from '../../../lib/api';

// i18n
import { useTranslation } from 'react-i18next';

import Button from '../button/Button';
import './stats.scss';

const Stats = () => {
  // Hooks
  const [members, setMembers] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const requestMembers = async () => {
      const response = await axios.get(API_ROUTES.stats);
      setMembers(response.data.amount_of_members);
    };

    requestMembers();
  }, [setMembers]);

  const stats = [
    { id: 'members', value: `+${members}`, name: t('members') },
    { id: 'meetupsPerMonth', value: 'x1', name: t('preMonth') },
    { id: 'attendeesPerMeetup', value: '+80', name: t('atendees') },
    { id: 'averageRating', value: '4.8', name: t('averageRating') },
  ];

  return (
    <div className="stats--background">
      <div className="stats">
        <div className="stats__title">
          <p className="title">{t('communityGrowing')}</p>
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
          <Button title={t('join')} url="https://www.meetup.com/ethereum-ba/" anchor />
        </div>
      </div>
    </div>
  );
};

export default Stats;
