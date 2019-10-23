import React from 'react';

// styles
import { Container, IconWrapper, Icon, Text } from './styles';

// assets
import DownloadIcon from '../../../../assets/eventDetail/download-orange.svg';

// lib
import { API_URL } from '../../../../lib/api';

// types
import { materialType } from '../../../../lib/types';

const DownloadMaterial = ({ material }) => (
  <Container>
    <IconWrapper href={`${API_URL}${material.file}`} target="_blank">
      <Icon src={DownloadIcon} />
      <Text>{material.name}</Text>
    </IconWrapper>
  </Container>
);

DownloadMaterial.propTypes = {
  material: materialType.isRequired,
};

export default DownloadMaterial;
