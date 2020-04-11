import React from 'react';
import { useTranslation } from 'react-i18next';

// proptypes
import { arrayOf } from 'prop-types';

// components
import Header from '../../components/header/Header';
import Footer from '../../components/footer';
import Community from '../../components/home/community/Community';
import Partners from '../../components/home/partners/Partners';
import Events from '../../components/home/events/Events';
import Social from '../../components/common/social/Social';
import Banner from '../../components/common/banner/Banner';

// assets
import Background from '../../assets/home-main-banner.svg';

// styles
import './home.scss';

// types
import { eventType } from '../../lib/types';

const Home = ({ events }) => {
  // Hooks
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Banner text={t('heroTitle')} background={Background} bottom />
      <div className="gradient">
        <Events events={events} />
        <Community />
        <Social />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

Home.propTypes = {
  events: arrayOf(eventType).isRequired,
};

export default Home;
