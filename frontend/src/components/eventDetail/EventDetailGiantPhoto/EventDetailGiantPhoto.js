import React, { useRef, useState, useEffect } from 'react';
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

const EventDetailGiantPhoto = ({ indexOfSelectedPhoto, onCloseIconClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(null);
  const [isEnding, setIsEnding] = useState(true);
  const [lastPhotoIndex, setLastPhotoIndex] = useState(null);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: indexOfSelectedPhoto,
    nextArrow: <CustomArrow isNextArrow />,
    prevArrow: <CustomArrow />,
  };

  const goToBeginning = () => {
    if (isEnding && currentSlideIndex === lastPhotoIndex) sliderRef.current.slickGoTo(0);
  };

  const goToEnd = () => {
    if (isEnding && currentSlideIndex === 0) sliderRef.current.slickGoTo(lastPhotoIndex);
  };

  const handleAfterChange = current => {
    setIsEnding(current === lastPhotoIndex || current === 0);
    setCurrentSlideIndex(current);
  };

  useEffect(() => {
    const nextBtn = document.getElementsByClassName('slick-next')[0];
    const prevBtn = document.getElementsByClassName('slick-prev')[0];

    nextBtn.addEventListener('click', goToBeginning);
    prevBtn.addEventListener('click', goToEnd);

    return () => {
      nextBtn.removeEventListener('click', goToBeginning);
      prevBtn.removeEventListener('click', goToEnd);
    };
  }, [currentSlideIndex]);

  useEffect(() => {
    setLastPhotoIndex(photos.length - 1);
  }, []);

  return (
    <MainContainer container direction="row">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1} />
      </Hidden>
      <Container item md={10}>
        <Slider {...sliderSettings} afterChange={current => handleAfterChange(current)} ref={sliderRef}>
          {photos.map(photo => (
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
