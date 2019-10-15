import React from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Container, Name, Description, DownloadMaterialContainer } from './styles';

// components
import DownloadMaterial from './DownloadMaterial';
import IconsContainer from './IconsContainer';

// types
import { talkType } from '../../../lib/types';

const EventDetailTalkCard = ({ talk }) => (
  <Grid item>
    <Grid container justify="flex-start" alignItems="center">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={2} />
      </Hidden>
      <Grid item xs={12} md={10}>
        <Container>
          <Name>{talk.name}</Name>
          {talk.description && <Description>{talk.description}</Description>}
          <DownloadMaterialContainer>
            {talk.material &&
              talk.material.map(_material => <DownloadMaterial key={_material.id} material={_material} />)}
          </DownloadMaterialContainer>
          {(talk.language || talk.level) && <IconsContainer talk={talk} />}
        </Container>
      </Grid>
    </Grid>
  </Grid>
);

EventDetailTalkCard.propTypes = {
  talk: talkType.isRequired,
};

export default EventDetailTalkCard;
