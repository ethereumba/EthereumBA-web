import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

import Meetup from '../../../assets/social/meetup.svg';
import Youtube from '../../../assets/social/youtube.svg';
import Telegram from '../../../assets/social/telegram.svg';
import Twitter from '../../../assets/social/twitter-brands.svg';
import Spotify from '../../../assets/social/spotify.svg';
import Substack from '../../../assets/social/substack.svg';
import './social.scss';

const iconSocial = [
  {
    icon: Meetup,
    class: 'meetup img',
    name: 'Meetup',
    url: 'https://www.meetup.com/ethereum-ba/',
  },
  {
    icon: Youtube,
    class: 'youtube img',
    name: 'Youtube',
    url: 'https://ethereumba.com/youtube',
  },
  {
    icon: Telegram,
    class: 'telegram img',
    name: 'Telegram',
    url: 'https://t.me/EthereumBA',
  },
  {
    icon: Twitter,
    class: 'twitter img',
    name: 'Twitter',
    url: 'https://twitter.com/ethereumba',
  },
  {
    icon: Spotify,
    class: 'spotify img',
    name: 'Spotify',
    url: 'https://open.spotify.com/show/2WPeBSDNqG2YDPGfYHoKPN',
  },
  {
    icon: Substack,
    class: 'substack img',
    name: 'Substack',
    url: 'https://ethereumba.substack.com/',
  },
];

const Social = () => {
  // Hooks
  const { t } = useTranslation();

  return (
    <div className="social">
      <div className="sub-title">
        <p>{t('getInTouch')}</p>
      </div>

      <div className="container-social">
        {iconSocial.map(social => {
          return (
            <div key={social.icon} className={`${social.class} box-social`}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            </div>
          );
        })}
      </div>
      <iframe
        src="https://ethereumba.substack.com/embed"
        width="100%"
        height="320"
        className="blog-iframe"
        scrolling="no"
        title="substack"
      />
    </div>
  );
};

export default Social;
