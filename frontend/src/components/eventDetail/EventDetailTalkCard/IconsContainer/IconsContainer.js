import React from 'react';

// styles
import { Container } from './styles';

// components
import IconTag from './IconTag';

// assets
import BubbleIcon from '../../../../assets/eventDetail/chat-bubble-purple.svg';
import MediumLevelIcon from '../../../../assets/eventDetail/medium-level-purple.svg';
import { talkType } from '../../../../lib/types';

const IconsContainer = ({ talk }) => {
  const levelIcons = {
    INITIAL: MediumLevelIcon,
    MEDIUM: MediumLevelIcon,
    ADVANCED: MediumLevelIcon,
    default: MediumLevelIcon,
  };

  return (
    <Container>
      {talk.language && <IconTag icon={BubbleIcon} text={talk.language} />}
      {talk.level && <IconTag icon={levelIcons[talk.level] || levelIcons.default} text={talk.level} />}
    </Container>
  );
};

IconsContainer.propTypes = {
  talk: talkType.isRequired,
};

export default IconsContainer;
