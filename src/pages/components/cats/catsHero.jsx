import React from 'react';
import Grid from '@material-ui/core/Grid';
import catsHero from '../../../images/catsHero.jpeg'
import { Typography, Paper } from '@material-ui/core';
import lightBlueColor from '@material-ui/core/colors/lightBlue';
import Flip from 'react-reveal/Flip';

const lightBlue = lightBlueColor[300];

const styles = {
    heroContainer: {
        height: '100vh',
        background: `no-repeat center /cover`,
        backgroundImage: `url(${catsHero})`
    },
    heroTitleContainer: {
        margin: 'auto 3rem auto 3rem',
    },
    paper: {
        padding: '2rem',
        maxWidth: 400,
        marginTop: 100,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        textAlign: 'left'
    },
    heroTitle: {
        color: lightBlue,
        fontStyle: 'italic'
        // borderBottom: `2px solid ${lightBlue}`
    },
    heroSubtitle: {
        // color: 'white',
        // fontStyle: 'italic',
    }
}

const CatsHero = () => {
    return (
        <div>
            <Grid container style={styles.heroContainer}>
                <Grid container style={styles.heroTitleContainer}>
                    <Grid item xs={12} sm={7} md={5}>
                        <Paper style={styles.paper} square={true}>
                            <Flip bottom>
                                <Typography variant="display3" gutterBottom={true} style={styles.heroTitle}>
                                    Welcome to my Silver Cat Cattery
                            </Typography>
                                <Typography variant='headline' style={styles.heroSubtitle}>
                                    A place where cat lovers find their refuge
                            </Typography>
                            </Flip>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CatsHero;