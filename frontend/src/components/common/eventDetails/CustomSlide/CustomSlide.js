import React from 'react';

// styles
import { Container, Icon, IconWrapper, Image, HoverContainer } from './styles';

// assets
import MagnifyingGlassIcon from '../../../../assets/eventDetail/magnifying-glass-purple.svg';

const CustomSlide = props => (
  <Container index={props.index} tabIndex={props.tabIndex}>
    <Image src="https://via.placeholder.com/200" />
    <HoverContainer>
      <IconWrapper>
        <Icon src={MagnifyingGlassIcon} />
      </IconWrapper>
    </HoverContainer>
  </Container>
);

export default CustomSlide;
