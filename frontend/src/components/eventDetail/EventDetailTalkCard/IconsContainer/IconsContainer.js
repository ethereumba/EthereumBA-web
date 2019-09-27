import React from 'react'

// styles
import { Container } from './styles'

// components
import IconTag from './IconTag'

// assets
import BubbleIcon from '../../../../assets/eventDetail/chat-bubble-purple.svg'
import LevelIcon from '../../../../assets/eventDetail/level-purple.svg'

const IconsContainer = ({ talk }) => {
    return (
        <Container>
            {talk.language && <IconTag icon={BubbleIcon} text={talk.language} />}
            {talk.level && <IconTag icon={LevelIcon} text={talk.level} />}
        </Container>
    )
}

export default IconsContainer 