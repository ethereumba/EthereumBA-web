import React from 'react';

// i18n
import { useTranslation } from 'react-i18next';

import openZeppelin from '../../../assets/partners/open-zepelling.png';
import xivis from '../../../assets/partners/xivis.png';
import rcn from '../../../assets/partners/rcn.png';
// import celo from '../../../assets/partners/celo.png';
import wibson from '../../../assets/partners/wibson.png';
import maker from '../../../assets/partners/maker.png';
import a3 from '../../../assets/partners/a3.png';
import atix from '../../../assets/partners/atix.png';
import local from '../../../assets/partners/local-cryptos.png';

import './partners.scss';

const logosPartner = [
  {
    image: openZeppelin,
    alt: 'Open Zeppelin',
    height: 23,
    width: 146,
    url: 'https://openzeppelin.com/',
  },
  {
    image: xivis,
    alt: 'Xivis',
    height: 32,
    width: 89,
    url: 'https://xivis.com/',
  },
  {
    image: maker,
    alt: 'Maker',
    height: 55,
    width: 55,
    url: 'https://makerdao.com/',
  },
  {
    image: rcn,
    alt: 'RCN',
    height: 36,
    width: 89,
    url: 'https://ripiocredit.network/',
  },
  // {
  //   image: celo,
  //   alt: 'Celo',
  //   height: 27,
  //   width: 90,
  //   url: 'https://celo.org/',
  // },
  {
    image: wibson,
    alt: 'Wibson',
    height: 22,
    width: 116,
    url: 'https://wibson.org/',
  },
  {
    image: atix,
    alt: 'Atix Labs',
    height: 55,
    width: 55,
    url: 'https://www.atixlabs.com/',
  },
  {
    image: local,
    alt: 'Local Cryptos',
    height: 55,
    width: 55,
    url: 'https://localcryptos.com/es/',
  },
  {
    image: a3,
    alt: 'Area 3',
    height: 39,
    width: 43,
    url: 'https://areatresworkplace.com',
  },
];

const Partners = () => {
  // Hooks
  const { t } = useTranslation();

  return (
    <div className="partners">
      <div className="sub-title">
        <p>{t('partners')}</p>
      </div>

      <div className="container-partners">
        {logosPartner.map(logo => {
          return (
            <div className="partners-logo" key={`partners-logo__${logo.url}`}>
              <a href={logo.url} target="_blank" rel="noopener noreferrer" className="partner-link">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  key={logo.image}
                  style={{
                    height: logo.height,
                    width: logo.width,
                  }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
