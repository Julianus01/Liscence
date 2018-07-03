import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = {
    mainContainer: {
        maxWidth: 1200,
        margin: '7rem auto 21rem auto',
        textAlign: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    item: {
        background: `no-repeat center /cover`,
        width: 250,
        height: 250,
        filter: 'grayscale(30%)',
        overflow: 'hidden',

    },
    titleContainer: {
        marginBottom: '4rem'
    },
    title: {
        // color: 'rgba(0, 0, 0, 0.7)'
        color: lightBlue[300]
    },
    button: {
        marginTop: '4rem',
        backgroundColor: lightBlue[300],
        color: 'white',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        borderRadius: '0',
        '&:hover': {
            backgroundColor: lightBlue[300]
        }
    },
    image: {
        background: `no-repeat center /cover`,
        height: '100%',
        width: '100%',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
}

class CatsGallery extends Component {

    constructor() {
        super();

        this.state = {
            images: [],
        }

        this.db = firebase.database().ref('images/cats');
    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container>
                <Grid container className={classes.mainContainer} justify='center'>
                    <Grid item xs={12} className={classes.titleContainer}>
                        <Flip bottom>
                            <Typography variant='display3' gutterBottom={true} className={classes.title}>
                                Gallery
                            </Typography>
                            <Typography variant='headline' style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                                These are top cats aquired from various parts of the world in order to purify the breed
                            </Typography>
                        </Flip>
                    </Grid>

                    {this.state.images.map(image => {
                        return (
                            <Fade bottom key={image.key}>
                                <Grid item className={classes.item}>
                                    <div className={classes.image} style={{ backgroundImage: `url(${image.imgSrc})` }}></div>
                                </Grid>
                            </Fade>
                        )
                    })}

                    <Grid item xs={12}>
                        <Fade bottom>
                            <Button className={classes.button} href='/gallery'>
                                See more
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    componentWillMount() {
        var images = this.state.images;

        this.db.on('child_added', snap => {
            if (images.length === 8) {
                return;
            }

            images.push({
                key: snap.key,
                imgSrc: snap.val().imgSrc
            })

            this.setState({ images });
        });

        this.db.on('child_removed', snap => {
            for (var i = 0; i < images.length; i++) {
                if (images[i].key === snap.key) {
                    images.splice(i, 1);
                }
            }

            this.setState({ images });
        })
    }
}

export default withStyles(styles)(CatsGallery);