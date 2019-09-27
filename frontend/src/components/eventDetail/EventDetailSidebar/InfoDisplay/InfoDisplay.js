import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text } from './styles';

const InfoDisplay = ({ icon, text }) => (
  <Container>
    <IconWrapper>
      <Icon src={icon} />
    </IconWrapper>
    <Text>{text}</Text>
  </Container>
);

export default InfoDisplay;
