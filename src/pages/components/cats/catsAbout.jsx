import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const styles = {
    aboutContainer: {
        backgroundColor: grey[50],
        border: `1px solid ${grey[100]}`
    },
    contentContainer: {
        margin: '14rem auto 14rem auto',
        maxWidth: 1200,
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    imgPaws: {
        margin: 'auto'
    },
    containerFill: {
        height: '100%'
    },
    titleItem: {
        textAlign: 'left',
    },
    title: {
        color: 'rgba(0, 0, 0, 0.7)'
        // color: lightBlue[300]
    },
    content: {
        textAlign: 'left',
    },
    hr: {
        border: `2px solid ${lightBlue[300]}`,
        width: 40,
        marginLeft: 0
    },
    qualityIcon: {
        width: 100,
        height: 'auto',
        opacity: '1'
    },
    qualityContainer: {
        paddingTop: '5rem'
    },
    buttonContainer: {
        paddingTop: '3rem',
        textAlign: 'left'
    },
    button: {
        backgroundColor: lightBlue[300],
        color: 'white',
        borderRadius: '0',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        '&:hover': {
            backgroundColor: lightBlue[300]
        }
    },
    paragraph: {
        marginBottom: '4rem'
    }
}

const CatsAbout = (props) => {

    const { classes } = props;

    return (
        <Grid container style={styles.aboutContainer}>
            <Grid container style={styles.contentContainer} justify='center'>
                <Grid item xs={12}>
                    <Grid container style={styles.containerFill} direction='column'>
                        <Grid item style={styles.titleItem}>
                            <Fade bottom>
                                <hr style={styles.hr} />
                                <Typography variant='display3' gutterBottom={true} className={classes.title}>
                                    About
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid item style={styles.content} >
                            <Fade bottom>
                                <Typography variant='headline' gutterBottom={true} className={classes.paragraph}>
                                    My name is Julian and I have owned the Silver Cat Cattery
                                    for around 10 years now. It all started a long time ago when
                                    I have decided for the first time to buy a pure breed kitten,
                                    but as soon as I held one in my hands, I fell in love.
                                    My passion for these cats grew throughout the years and it has
                                    evolved into what it became today. The Silver Cat Cattery
                                </Typography>
                                <Typography variant='headline'>
                                    Since then I have invested my time, sweat, tears, and
                                    effort to build the best enviroment within which cats and
                                    kittens can be raised in order to produce beautiful, heart warming,
                                    cuddly and playfull little balls of fur.
                                    I breed and take care of these cats at the highest level I possibly
                                    can, their home being well taken care of and them themselves being
                                    watched over 24 hours per day.
                                </Typography>
                            </Fade>
                        </Grid>

                        {/* <Grid item style={styles.buttonContainer}>
                            <Fade bottom>
                                <Button className={classes.button} size='large'>
                                    Find out more
                                </Button>
                            </Fade>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default withStyles(styles)(CatsAbout);