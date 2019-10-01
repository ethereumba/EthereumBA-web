import React from 'react';
import Slider from 'react-slick';

// proptypes
import { number } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { PhotoContainer, Image } from './styles';

// components
import CustomArrow from '../../common/eventDetails/CustomArrow';

// lib
import photos from '../../../lib/photos';

// types
import { eventType } from '../../../lib/types';

const EventDetailGiantPhoto = ({ event, indexOfSelectedPhoto }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: indexOfSelectedPhoto - 2,
    nextArrow: <CustomArrow isNextArrow />,
    prevArrow: <CustomArrow />,
  };

  console.log(event);

  return (
    <Grid container direction="row">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
      <Grid item md={10}>
        <Slider {...sliderSettings}>
          {photos.map(photo => (
            <PhotoContainer>
              <Image src={photo.url} />
            </PhotoContainer>
          ))}
        </Slider>
      </Grid>
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
    </Grid>
  );
};

EventDetailGiantPhoto.propTypes = {
  event: eventType.isRequired,
  indexOfSelectedPhoto: number.isRequired,
};

export default EventDetailGiantPhoto;
