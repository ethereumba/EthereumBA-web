import styled from 'styled-components';

// lib
import { COLORS } from '../../../../lib/styles';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  width: 23px;
  height: 23px;
  ${({ isUpcoming }) => !isUpcoming && `opacity: 0.3`}
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.span`
  line-height: 24px;
  font-size: 14px;
  vertical-align: top;
  color: ${COLORS.violetTitle};
  ${({ isUpcoming }) => !isUpcoming && `opacity: 0.3`}
`;
