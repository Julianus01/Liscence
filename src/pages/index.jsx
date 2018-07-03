import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CatsOption from './components/catsOption';
import DogsOption from './components/dogsOption'

const styles = {
    heroContainer: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
    },
    contentContainer: {
        maxWidth: '80rem',
        margin: 'auto 2rem auto 2rem',
        // backgroundColor: amber[200],
    }
}

const Index = () => {
    return (
        <Grid container style={styles.heroContainer} justify='center'>
            <Grid container style={styles.contentContainer}>
                <Grid item xs={12} style={{ marginBottom: '5rem' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant='display4'>De Blindete</Typography>
                            <Typography variant='display1'>
                                Long time Cattery and Kennel, breeder of high standards
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: '5rem' }}>
                    <Grid container spacing={40}>
                        <Grid item sm={6} xs={12}>
                            <CatsOption />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <DogsOption />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Index;
