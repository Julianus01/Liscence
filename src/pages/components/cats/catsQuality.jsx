import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue'
import FontAwesome from 'react-fontawesome'

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const styles = {
    qualitiesContainer: {
        maxWidth: 1000,
        margin: '7rem auto 14rem auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    qualityContainer: {
        width: 250,
        height: 230,
        margin: '1rem'
    },
    qualityItem: {
        height: '100%',
        width: '100%',
        display: 'grid',
        transition: 'all .3s ease-in-out',
        border: `1px solid ${grey[300]}`,
        '&:hover > span': {
            color: lightBlue[300]
        },
        '&:hover > div > *': {
            color: lightBlue[300]
        }
    },
    titleContainer: {
        marginBottom: '4rem'
    },
    title: {
        // color: 'rgba(0, 0, 0, 0.7)'
        color: lightBlue[300]
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)',
        margin: 'auto',
        transition: 'color .3s'
    },
    iconTitle: {
        paddingTop: '0.7rem',
        transition: 'color 0.3s',
    },
    iconDescription: {
        color: 'rgba(0, 0, 0, 0.54)',
        transition: 'color 0.3s'
    }
}

const CatsQuality = (props) => {

    const { classes } = props

    return (
        <Grid container className={classes.qualitiesContainer} justify='center'>

            <Grid item xs={12} className={classes.titleContainer}>
                <Flip bottom>
                    <Typography variant='display3' gutterBottom={true} className={classes.title}>
                        Qualities
                    </Typography>
                    <Typography variant='headline' className={classes.iconDescription}>
                        My cats have the highest qualities you can find anywhere in the world
                        in the silver breed
                    </Typography>
                </Flip>
            </Grid>

            <Fade bottom>
                <Grid item className={classes.qualityContainer}>
                    <div className={classes.qualityItem}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='diamond'
                            size='4x'
                            className={classes.icon}
                        />
                        <div>
                            <Typography variant='headline' gutterBottom className={classes.iconTitle}>
                                High Quality
                            </Typography>
                            <Typography variant='subheading' className={classes.iconDescription}>
                                Beautiful examples
                            </Typography>
                        </div>
                    </div>
                </Grid>

                <Grid item className={classes.qualityContainer}>
                    <div className={classes.qualityItem}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='heart'
                            size='4x'
                            className={classes.icon}
                        />
                    <div>
                            <Typography variant='headline' gutterBottom className={classes.iconTitle}>
                                Loving
                            </Typography>
                            <Typography variant='subheading' className={classes.iconDescription}>
                                Cuddly &#38; Caring
                            </Typography>
                        </div>
                    </div>
                </Grid>

                <Grid item className={classes.qualityContainer}>
                    <div className={classes.qualityItem}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='file-o'
                            size='4x'
                            className={classes.icon}
                        />
                        <div>
                            <Typography variant='headline' gutterBottom className={classes.iconTitle}>
                                Pedigree
                            </Typography>
                            <Typography variant='subheading' className={classes.iconDescription}>
                                PET approved
                            </Typography>
                        </div>
                    </div>
                </Grid>

                <Grid item className={classes.qualityContainer}>
                    <div className={classes.qualityItem}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='smile-o'
                            size='4x'
                            className={classes.icon}
                        />
                        <div>
                            <Typography variant='headline' gutterBottom className={classes.iconTitle}>
                                Playful
                            </Typography>
                            <Typography variant='subheading' className={classes.iconDescription}>
                                Fun &#38; fluffy
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Fade>
        </Grid>

    )
}

export default withStyles(styles)(CatsQuality);