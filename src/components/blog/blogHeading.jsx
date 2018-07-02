import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue'

import Flip from 'react-reveal/Flip';

const styles = {
    mainContainer: {
        display: 'grid',
        margin: '8rem auto 4rem auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    title: {
        color: lightBlue[300],
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
}

const BlogHeading = (props) => {
    return (
        <Grid container style={styles.mainContainer} justify='center'>
            <Flip bottom>
                <Grid item xs={12}>
                    <Typography variant='display3' style={styles.title} gutterBottom>
                        My Blog
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='headline' style={styles.subtitle}>
                        My posts are here and you can see them everyday
                    </Typography>
                </Grid>
            </Flip>
        </Grid>
    )
}

export default BlogHeading;