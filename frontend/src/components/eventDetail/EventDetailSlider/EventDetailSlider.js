import React from 'react';
import Slider from 'react-slick';

// styles
import {} from './styles';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// components
import CustomArrow from '../../common/eventDetails/CustomArrow';
import CustomSlide from '../../common/eventDetails/CustomSlide';

const EventDetailSlider = ({ event }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <CustomArrow isNextArrow={true} />,
    prevArrow: <CustomArrow />,
  };

  return (
    <Grid container direction="row">
      <Grid item md={11}>
        <Grid container direction="row">
          <Hidden only={['xs', 'sm']}>
            <Grid item md={1}></Grid>
          </Hidden>
          <Grid item md>
            <Slider {...sliderSettings}>
              <CustomSlide index={1} />
              <CustomSlide index={2} />
              <CustomSlide index={3} />
              <CustomSlide index={4} />
              <CustomSlide index={5} />
              <CustomSlide index={6} />
              <CustomSlide index={7} />
              <CustomSlide index={8} />
              <CustomSlide index={9} />
              <CustomSlide index={10} />
              <CustomSlide index={11} />
              <CustomSlide index={12} />
            </Slider>
          </Grid>
        </Grid>
      </Grid>

      <Hidden only={['xs', 'sm']}>
        <Grid item md={1}></Grid>
      </Hidden>
    </Grid>
  );
};

export default EventDetailSlider;
