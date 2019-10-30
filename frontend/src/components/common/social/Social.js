import React from 'react';

import Meetup from '../../../assets/social/meetup.svg';
import Youtube from '../../../assets/social/youtube.svg';
import Telegram from '../../../assets/social/telegram.svg';
import Twitter from '../../../assets/social/twitter-brands.svg';
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
    url: 'https://www.youtube.com/channel/UCSFiCr8d3ej_pC57E75pPew',
  },
  {
    icon: Telegram,
    class: 'telegram img',
    name: 'Telegram',
    url: 'https://t.me/ethbuenosaires',
  },
  {
    icon: Twitter,
    class: 'twitter img',
    name: 'Twitter',
    url: 'https://twitter.com/ethbuenosaires',
  },
];

const Social = () => {
  const date = new Date().getFullYear();

  return (
    <div className="social">
      <div className="sub-title">
        <p>get in touch</p>
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

      <div className="footer">
        <a href="mailto:contact@ethereumbuenosaires.com">contact@ethereumbuenosaires.com</a>
        <p>Ethereum Buenos Aires {date}</p>
      </div>
    </div>
  );
};

export default Social;
