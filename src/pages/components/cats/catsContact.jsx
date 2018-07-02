import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import FontAwesome from 'react-fontawesome';

import Flip from 'react-reveal/Flip'


const styles = {
    mainContainer: {
        backgroundColor: lightBlue[300],
        border: `1px solid ${lightBlue[300]}`
    },
    container: {
        maxWidth: 1000,
        margin: '8rem auto 8rem auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        color: 'white'
    },
    title: {
        color: 'white'
    },
    contacts: {
        marginTop: '4rem'
    },
    contactsContainer: {
        display: 'grid',
        gridRowGap: '1rem',
        maxWidth: 400,
        margin: 'auto'
    },
    iconItem: {
        margin: 'auto 1rem auto 1rem'
    },
    iconText: {
        color: 'white'
    }
}

const CatsContact = (props) => {

    const { classes } = props;

    return (
        <Grid container className={classes.mainContainer}>
            <Grid container style={styles.container} justify='center'>
                <Grid item xs={12}>
                    <Flip bottom>
                        <Typography variant='display3' style={styles.title}>
                            Contact me
                        </Typography>
                        <Typography variant='headline' style={styles.title}>
                            Any questions or requests, feel free to send me a message or call
                        </Typography>
                    </Flip>
                </Grid>
                <Grid item xs={12} style={styles.contacts}>
                    <Grid container style={styles.contactsContainer}>
                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Grid item>
                                    <FontAwesome
                                        name='facebook-official'
                                        size='2x'
                                        style={styles.icon}
                                    />

                                </Grid>
                                <Grid item style={styles.iconItem}>
                                    <Flip bottom>
                                        <Typography variant='subheading' style={styles.iconText}>
                                            https://www.facebook.com/silver
                                        </Typography>
                                    </Flip>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Grid item>
                                    <FontAwesome
                                        name='phone-square'
                                        size='2x'
                                        style={styles.icon}
                                    />

                                </Grid>
                                <Grid item style={styles.iconItem}>
                                    <Flip bottom>
                                        <Typography variant='subheading' style={styles.iconText}>
                                            0742 375 938
                                        </Typography>
                                    </Flip>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify='center'>
                                <Grid item>
                                    <FontAwesome
                                        name='envelope'
                                        size='2x'
                                        style={styles.icon}
                                    />

                                </Grid>
                                <Grid item style={styles.iconItem}>
                                    <Flip bottom>
                                        <Typography variant='subheading' style={styles.iconText}>
                                            silvercattery@silver.com
                                        </Typography>
                                    </Flip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CatsContact);