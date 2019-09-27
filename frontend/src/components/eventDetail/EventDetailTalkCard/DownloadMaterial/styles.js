import styled from "styled-components";

// lib
import { COLORS } from "../../../../lib/styles";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
`;

export const IconWrapper = styled.a`
  height: 19px;
  width: 19px;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  color: ${COLORS.orangeText};
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
`;
