import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

// i18n
import { useTranslation } from 'react-i18next';

import Stats from '../../common/stats/Stats';
import CommunityCard from '../communityCard/CommunityCard';
import CommunityImage1 from '../../../assets/icons/1.png';
import CommunityImage2 from '../../../assets/icons/2.png';
import CommunityImage3 from '../../../assets/icons/3.png';
import CommunityImage4 from '../../../assets/icons/4.png';
import './community.scss';

export default () => {
  // Hooks
  const { t } = useTranslation();

  const communityData = [
    {
      image: CommunityImage1,
      title: t('community'),
      text: t('communityText'),
    },
    {
      image: CommunityImage2,
      title: t('networking'),
      text: t('networkingText'),
    },
    {
      image: CommunityImage3,
      title: t('education'),
      text: t('educationText'),
    },
    {
      image: CommunityImage4,
      title: t('getInvolved'),
      text: t('getInvolvedText'),
    },
  ];

  return (
    <div className="community">
      <div className="community__header">
        <div className="sub-title">
          <h1>{t('learn')}</h1>
        </div>

        <div className="center">
          <p className="title-2">{t('about')}</p>
        </div>
      </div>

      <Stats />

      <Grid container className="container-community community-text" spacing={0}>
        {communityData.map(community => {
          return (
            <CommunityCard
              key={community.title}
              image={community.image}
              title={community.title}
              text={community.text}
            />
          );
        })}
      </Grid>
    </div>
  );
};
