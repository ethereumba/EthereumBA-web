import styled from 'styled-components';

// material ui
import Grid from '@material-ui/core/Grid';

// lib
import { COLORS } from '../../../lib/styles';

export const OrangeButton = styled.a`
  background-color: ${COLORS.orangeText};
  color: white;
  font-family: Comfortaa;
  font-size: 19px;
  line-height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 192px;
  border-radius: 29.5px;
  box-shadow: 0 2px 4px 0 ${COLORS.talkCardBorder};
  margin-top: 16px;
  font-weight: regular;
  cursor: pointer;
`;

export const Container = styled(Grid)`
  padding-top: 150px;
`;
