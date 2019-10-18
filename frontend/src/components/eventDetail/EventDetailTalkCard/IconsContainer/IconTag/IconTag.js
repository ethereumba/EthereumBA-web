import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text } from './styles';

const IconsContainer = ({ icon, text }) => (
  <Container>
    <IconWrapper>
      <Icon src={icon} />
    </IconWrapper>
    <Text>{text.substr(0, 3)}</Text>
  </Container>
);

export default IconsContainer;
