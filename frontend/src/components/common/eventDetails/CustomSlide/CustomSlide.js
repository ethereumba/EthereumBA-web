import React from 'react';

// styles
import { number, func } from 'prop-types';
import { Container, Icon, IconWrapper, Image, HoverContainer } from './styles';

// proptypes

// assets
import MagnifyingGlassIcon from '../../../../assets/eventDetail/magnifying-glass-purple.svg';

// types
import { photoType } from '../../../../lib/types';

const CustomSlide = ({ index, tabIndex, photo, onPhotoClick }) => (
  <Container onClick={() => onPhotoClick(index)} index={index} tabIndex={tabIndex}>
    <Image src={photo.url} />
    <HoverContainer>
      <IconWrapper>
        <Icon src={MagnifyingGlassIcon} />
      </IconWrapper>
    </HoverContainer>
  </Container>
);

CustomSlide.propTypes = {
  index: number.isRequired,
  tabIndex: number.isRequired,
  photo: photoType.isRequired,
  onPhotoClick: func.isRequired,
};

export default CustomSlide;
