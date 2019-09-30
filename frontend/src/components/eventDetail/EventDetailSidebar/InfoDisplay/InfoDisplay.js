import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text } from './styles';

const InfoDisplay = ({ icon, text, isUpcoming }) => (
  <Container>
    <IconWrapper isUpcoming={isUpcoming}>
      <Icon src={icon} />
    </IconWrapper>
    <Text isUpcoming={isUpcoming}>{text}</Text>
  </Container>
);

export default InfoDisplay;
