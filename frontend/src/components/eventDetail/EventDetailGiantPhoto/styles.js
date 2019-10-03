import styled from 'styled-components';

// material ui
import Grid from '@material-ui/core/Grid';

export const PhotoContainer = styled.div`
  box-sizing: border-box;
  padding: 50px 55px;
  margin-top: 16px;

  @media (max-width: 960px) {
    padding: 0 55px;
  }
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

  @media (max-width: 960px) {
    height: 16px;
    width: 16px;
    top: -30px;
    right: -9px;
  }
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

  @media (max-width: 960px) {
    .MuiGrid-item {
      display: flex;
      justify-content: center;
    }
  }
`;

export const MainContainer = styled(Grid)`
  @media (max-width: 960px) {
    .MuiGrid-item {
      margin: 0 auto;
      width: 85%;
    }
  }
`;
