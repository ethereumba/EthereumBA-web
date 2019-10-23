import styled from 'styled-components';

// lib
import { COLORS } from '../../../../lib/styles';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;

export const IconWrapper = styled.a`
  width: 100%;
  height: 19px;
  margin: 5px 0;
`;

export const Icon = styled.img`
  display: inline-block;
  height: 15px;
  margin-right: 5px;

  :hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  display: inline-block;
  color: ${COLORS.orangeText};
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
`;
