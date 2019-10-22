import styled from 'styled-components';

// material ui
import Grid from '@material-ui/core/Grid';

// lib
import { COLORS } from '../../../lib/styles';

export const Container = styled(Grid)`
  width: 100%;
  background-color: ${COLORS.talkCardBackground};
  border: 1px solid ${COLORS.talkCardBorder};
  border-radius: 8px;
  margin-bottom: 14px;
  box-sizing: border-box;
  padding: 20px;

  flex-direction: column !important;
`;

export const Description = styled.p`
  color: ${COLORS.description};
  font-size: 14px;
  line-height: 22px;
  font-family: Comfortaa;
  margin-top: 0;
  margin-bottom: 12px;
`;

export const Name = styled.h4`
  margin: 0;
  color: ${COLORS.violetTitle};
  font-size: 24px;
  font-family: Comfortaa;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const DownloadMaterialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
