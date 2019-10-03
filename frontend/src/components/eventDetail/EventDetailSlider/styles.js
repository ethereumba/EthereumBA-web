import styled from 'styled-components';

// material ui
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
  margin: 100px 0;

  @media (max-width: 960px) {
    margin: 50px 0;
  }
`;

export const SliderContainer = styled(Grid)`
  padding-left: 20px;

  @media (max-width: 960px) {
    .slick-slider {
      width: 98%;
    }
  }
`;
