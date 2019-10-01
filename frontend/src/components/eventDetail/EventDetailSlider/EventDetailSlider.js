import React from 'react';
import Slider from 'react-slick';

// proptypes
import { func } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import Container from './styles';

// lib
import photos from '../../../lib/photos';

// components
import CustomArrow from '../../common/eventDetails/CustomArrow';
import CustomSlide from '../../common/eventDetails/CustomSlide';

// types
import { eventType } from '../../../lib/types';

const EventDetailSlider = ({ event, onPhotoClick }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <CustomArrow isNextArrow />,
    prevArrow: <CustomArrow />,
  };

  console.log(event);

  return (
    <Container container direction="row">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
      <Grid item md={10}>
        <Slider {...sliderSettings}>
          {photos.map((photo, index) => (
            <CustomSlide onPhotoClick={onPhotoClick} photo={photo} index={index} />
          ))}
        </Slider>
      </Grid>
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
    </Container>
  );
};

EventDetailSlider.propTypes = {
  event: eventType.isRequired,
  onPhotoClick: func.isRequired,
};

export default EventDetailSlider;
