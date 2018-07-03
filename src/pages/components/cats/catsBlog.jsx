import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import catBlogImage from '../../../images/catsBlog.jpg';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue'

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const styles = {
    mainContainer: {
        // height: '70vh',
        backgroundColor: grey[50],
        borderTop: `1px solid ${grey[100]}`
    },
    rightContainer: {
        height: '100%',
        width: '100%'
    },
    mainContentContainer: {
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        margin: ' 4rem',
        // border: '1px solid black'
    },
    titleItem: {
        textAlign: 'left'
    },
    title: {
        color: 'rgba(0, 0, 0, 0.7)'
    },
    imageContainer: {
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    image: {
        background: `no-repeat center /cover`,
        backgroundImage: `url(${catBlogImage})`,
        height: '100%',
        width: '100%',
        filter: 'grayscale(30%)',
    },
    blogPoint: {
        marginBottom: '2rem'
    },
    hr: {
        border: `2px solid ${lightBlue[300]}`,
        width: 40,
        marginLeft: 0
    },
    button: {
        marginTop: '2rem',
        backgroundColor: lightBlue[300],
        color: 'white',
        borderRadius: '0',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        '&:hover': {
            backgroundColor: lightBlue[300]
        }
    },
}

const CatsBlog = (props) => {

    const { classes } = props;

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item xs={6} className={classes.imageContainer}>
                <div className={classes.image}></div>
            </Grid>

            <Grid item xs={6} className={classes.rightContainer}>
                <Grid container className={classes.mainContentContainer}>
                    <Grid container className={classes.contentContainer}>
                        <Grid item style={{ textAlign: 'left', marginBottom: '2rem' }} xs={12}>
                            <Flip bottom>
                                <hr style={styles.hr} />
                                <Typography variant='display3' gutterBottom={true} className={classes.title}>
                                    My Blog
                                </Typography>
                            </Flip>
                        </Grid>

                        <Grid item style={{ textAlign: 'left' }} xs={12}>
                            <Flip bottom>
                                <Typography variant='headline' className={classes.blogPoint}>
                                    - News and information regarding upcoming Kittens
                                </Typography>
                                <Typography variant='headline' className={classes.blogPoint}>
                                    - Posts and thoughts on cat food and treatment
                                </Typography>
                                <Typography variant='headline' className={classes.blogPoint}>
                                    - General and helpful information that I used to achieve my status
                                </Typography>
                            </Flip>
                        </Grid>

                        <Grid item xs={12} style={{ textAlign: 'left' }}>
                            <Fade bottom>
                                <Button className={classes.button} href='/blog'>
                                    Visit
                                </Button>
                            </Fade>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CatsBlog);