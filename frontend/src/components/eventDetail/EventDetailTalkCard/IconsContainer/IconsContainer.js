import React from "react";

// styles
import { Container } from "./styles";

// components
import IconTag from "./IconTag";

// assets
import BubbleIcon from "../../../../assets/eventDetail/chat-bubble-purple.svg";
import MediumLevelIcon from "../../../../assets/eventDetail/medium-level-purple.svg";

const IconsContainer = ({ talk }) => {
  const resolveLevelIcon = () => {
    switch (talk.level) {
      case "INITIAL":
        return MediumLevelIcon;
      case "MEDIUM":
        return MediumLevelIcon;
      case "ADVANCED":
        return MediumLevelIcon;
      default:
        return MediumLevelIcon;
    }
  };

  return (
    <Container>
      {talk.language && <IconTag icon={BubbleIcon} text={talk.language} />}
      {talk.level && <IconTag icon={resolveLevelIcon()} text={talk.level} />}
    </Container>
  );
};

export default IconsContainer;
