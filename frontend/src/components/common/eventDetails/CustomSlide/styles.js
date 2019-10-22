import styled from 'styled-components';

export const Container = styled.div`
  width: 185px;
  height: 185px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10.25px;

  :hover {
    cursor: pointer;
    > img {
      opacity: 0.16;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const HoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
`;
