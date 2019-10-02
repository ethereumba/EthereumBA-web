import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text, ClickableText } from './styles';

const InfoDisplay = ({ icon, text, isUpcoming, googleUrl }) => (
  <Container>
    <IconWrapper isUpcoming={isUpcoming}>
      <Icon src={icon} />
    </IconWrapper>
    {googleUrl ? (
      <ClickableText as="a" target="_blank" href={googleUrl} isUpcoming={isUpcoming}>
        {text}
      </ClickableText>
    ) : (
      <Text isUpcoming={isUpcoming}>{text}</Text>
    )}
  </Container>
);

export default InfoDisplay;
