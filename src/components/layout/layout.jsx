import { Grid } from '@material-ui/core'
import React from 'react'

export default function Layout(props) {
    const {children} = props
    return (
        <Grid id='layout' container direction='row'>
            <Grid item xs style={{ clear: 'both', width: '100%', margin: '0 auto', position: 'relative', minHeight: '100vh', paddingBottom: '2.5 rem' }}>
            {children}
            </Grid>
        </Grid>
    )
}
