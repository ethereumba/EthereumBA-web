import React from 'react'

// material ui
import Grid from '@material-ui/core/Grid'

// styles
import { Container } from './styles'

const EventDetailTalkCard = () => {
    return (
        <Grid item xs={12}>
            <Grid container justify='flex-start' alignItems='center'>
                <Hidden only={['xs', 'sm']}>
                    <Grid item md={1}></Grid>
                </Hidden>
                <Grid item xs={12} md={7}>
                    <Container>

                    </Container>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EventDetailTalkCard