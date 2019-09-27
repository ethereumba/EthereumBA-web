import React from 'react'

// styles
import { Container, IconWrapper, Icon, Text } from './styles'

// assets
import DownloadIcon from '../../../../assets/eventDetail/download-orange.svg'

const DownloadMaterial = ({ material }) => {
    const handleDownloadClick = () => {
        console.log('click')
    }

    return (
        <Container>
            <IconWrapper onClick={handleDownloadClick}>
                <Icon src={DownloadIcon} />
            </IconWrapper>
            <Text>{material.name}</Text>
        </Container>
    )
}

export default DownloadMaterial