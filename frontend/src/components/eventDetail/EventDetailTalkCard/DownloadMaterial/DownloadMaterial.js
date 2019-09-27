import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text } from './styles';

// assets
import DownloadIcon from '../../../../assets/eventDetail/download-orange.svg';

// lib
import API_URL from '../../../../lib/api';

const DownloadMaterial = ({ material }) => {
  return (
    <Container>
      <IconWrapper href={`${API_URL}${material.file}`} target="_blank">
        <Icon src={DownloadIcon} />
      </IconWrapper>
      <Text>{material.name}</Text>
    </Container>
  );
};

export default DownloadMaterial;
