import React from 'react';
import Slider from 'react-slick';

// proptypes
import { number, func } from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { PhotoContainer, Image, Container, Icon, IconWrapper, MainContainer } from './styles';

// components
import CustomArrow from '../../common/eventDetails/CustomArrow';

// assets
import CloseIcon from '../../../assets/eventDetail/cross-purple.svg';

// types
import { eventType } from '../../../lib/types';

const EventDetailGiantPhoto = ({ indexOfSelectedPhoto, onCloseIconClick, event }) => {
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

  return (
    <MainContainer container direction="row">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
      <Container item md={10}>
        <Slider {...sliderSettings}>
          {event.photos.map(photo => (
            <PhotoContainer key={`photo_${photo.url}`}>
              <Image src={`${process.env.REACT_APP_API_ROOT}${photo.img}`} />
            </PhotoContainer>
          ))}
        </Slider>
        <IconWrapper>
          <Icon onClick={onCloseIconClick} src={CloseIcon} />
        </IconWrapper>
      </Container>
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
    </MainContainer>
  );
};

EventDetailGiantPhoto.propTypes = {
  event: eventType.isRequired,
  indexOfSelectedPhoto: number.isRequired,
  onCloseIconClick: func.isRequired,
};

export default EventDetailGiantPhoto;
