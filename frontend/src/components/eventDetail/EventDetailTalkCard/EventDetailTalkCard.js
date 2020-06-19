import React from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// material ui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles
import { Container, Name, Description, DownloadMaterialContainer, PodcastContainer } from './styles';

// components
import DownloadMaterial from './DownloadMaterial';
import IconsContainer from './IconsContainer';

// types
import { talkType } from '../../../lib/types';
import { getI18nField } from '../../../lib/helpers'

const EventDetailTalkCard = ({ talk }) => {
  // Hooks
  const { i18n } = useTranslation();
  const lang = i18n.language

  return (
    <Grid container justify="flex-start" alignItems="center">
      <Hidden only={['xs', 'sm']}>
        <Grid item md={2} />
      </Hidden>
      <Grid item xs={12} md={10}>
        <Container container direction="column">
          <Name>{getI18nField(talk, 'name', lang)}</Name>
          {(talk.description_en || talk.description_es ||  talk.description_pt) &&
            <Description>{getI18nField(talk, 'description', lang)}</Description>
          }
          <DownloadMaterialContainer>
            {talk.material &&
            talk.material.map(_material => <DownloadMaterial key={_material.id} material={_material} />)}
          </DownloadMaterialContainer>
          {(talk.language || talk.level) && <IconsContainer talk={talk} />}
          {talk.podcast &&
            <PodcastContainer>
              <iframe src={talk.podcast} width="100%" height="232" frameBorder="0" allow="encrypted-media" />
            </PodcastContainer>
          }
        </Container>
      </Grid>
    </Grid>
  )
};

EventDetailTalkCard.propTypes = {
  talk: talkType.isRequired,
};

export default EventDetailTalkCard;
