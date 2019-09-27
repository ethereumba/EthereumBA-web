import React from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Container, Name, Description, DownloadMaterialContainer } from './styles';

// components
import DownloadMaterial from './DownloadMaterial';
import IconsContainer from './IconsContainer';

const EventDetailTalkCard = ({ talk }) => (
  <Grid item>
    <Grid container justify="flex-start" alignItems="center">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={1}></Grid>
      </Hidden>
      <Grid item xs={12} md>
        <Container>
          <Name>{talk.name}</Name>
          {talk.description && <Description>{talk.description}</Description>}
          <DownloadMaterialContainer>
            {talk.material && talk.material.map(_material => <DownloadMaterial material={_material} />)}
          </DownloadMaterialContainer>
          {(talk.language || talk.level) && <IconsContainer talk={talk} />}
        </Container>
      </Grid>
    </Grid>
  </Grid>
);

export default EventDetailTalkCard;
