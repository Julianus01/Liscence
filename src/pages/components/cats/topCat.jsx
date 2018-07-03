import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import TopCatHover from './topCatHover';

const styles = {
    relativeItem: {
        position: 'relative',
        overflow: 'hidden',
        '&:hover > img': {
            transform: 'scale(1.1)',
        },
        '&:hover > div': {
            opacity: '1'
        },
    },
    imgCat: {
        width: '100%',
        height: 'auto',
        transition: 'transform .3s',
        pointerEvents: 'none',
        filter: 'grayscale(30%)',
        display: 'block'
    },
}

const TopCat = (props) => {

    const { classes } = props;

    return (
        <Grid container>
            <Fade bottom>
                <Grid item xs={12} className={classes.relativeItem}>
                    <img src={props.img} alt='noWarning' className={classes.imgCat} />
                    <TopCatHover
                        img={props.img}
                        catName={props.catName}
                        shortDescription={props.shortDescription}
                        description={props.description}
                    />
                </Grid>
            </Fade>
        </Grid>
    )
}

export default withStyles(styles)(TopCat);