import styled from 'styled-components';

// material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export const StyledContainer = styled(Container)`
  font-family: Comfortaa;
  margin-top: 100px;

  a {
    text-decoration: none;
  }
`;

export const OuterContainer = styled(Grid)`
  @media (max-width: 960px) {
    > div .MuiGrid-item {
      width: 100%;
    }

    .MuiGrid-container {
      display: block;

      div {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;
