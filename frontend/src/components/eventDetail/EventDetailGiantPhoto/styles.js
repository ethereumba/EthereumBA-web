import styled from 'styled-components';

// material ui
import Grid from '@material-ui/core/Grid';

export const PhotoContainer = styled.div`
  box-sizing: border-box;
  padding: 50px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: -40px;
  right: -38px;
  height: 24px;
  width: 24px;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const Container = styled(Grid)`
  position: relative;
`;
