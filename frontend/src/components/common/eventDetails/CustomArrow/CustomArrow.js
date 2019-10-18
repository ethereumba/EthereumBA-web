import React from 'react';

// styles
import { Container, IconWrapper, Icon } from './styles';

// assets
import NextArrowIcon from '../../../../assets/eventDetail/arrow-right-purple.svg';
import PreviousArrowIcon from '../../../../assets/eventDetail/arrow-left-purple.svg';

const CustomNextArrow = ({ onClick, className, isNextArrow }) => (
  <Container onClick={onClick} className={className}>
    <IconWrapper>
      <Icon src={isNextArrow ? NextArrowIcon : PreviousArrowIcon} />
    </IconWrapper>
  </Container>
);

export default CustomNextArrow;
