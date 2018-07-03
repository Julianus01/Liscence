import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import catOne from '../../../images/topcats/cat1.jpg';
import catTwo from '../../../images/topcats/cat2.jpg';
import catThree from '../../../images/topcats/cat3.jpg';
import catFour from '../../../images/topcats/cat4.jpg';
import TopCat from './topCat'
import lightBlue from '@material-ui/core/colors/lightBlue';
import Flip from 'react-reveal/Flip';

const styles = {
    mainContainer: {
        // height: '130vh',
    },
    contentContainer: {
        maxWidth: 1200,
        margin: '14rem auto 14rem auto',
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    imgCat: {
        width: '100%',
        height: 'auto',
        transition: 'transform .3s',
        pointerEvents: 'none',
        filter: 'grayscale(30%)'
    },
    item: {
        // padding: '0.5rem'
    },
    titleContainer: {
        marginBottom: '4rem'
    },
    title: {
        // color: 'rgba(0, 0, 0, 0.7)'
        color: lightBlue[300]
    },
}

const TopCats = (props) => {

    const { classes } = props;

    return (
        <Grid container style={styles.mainContainer}>
            <Grid container style={styles.contentContainer}>
                <Grid item xs={12} style={styles.titleContainer}>
                    <Flip bottom>
                        <Typography variant='display3' gutterBottom={true} className={classes.title}>
                            Top Cats
                        </Typography>
                        <Typography variant='headline' style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                            Cats aquired from various parts of the world in order to purify the breed
                            and be my place of refuge when I need to escape the problems of everyday life
                        </Typography>
                    </Flip>
                </Grid>

                <Grid container spacing={16}>

                    <Grid item xs={12} sm={4} style={styles.item}>
                        <TopCat
                            img={catOne}
                            catName='Bruno'
                            shortDescription='My little bear'
                            description='It’s white and grey in color.
                            It has lovely green eyes. It is very soft and furry.
                            It eats fish and drinks milk. 
                            It plays with me when I come back from school.
                            It likes to play with ball in the garden.
                            It loves me and shows it’s love by licking me when
                            I come back from school.  It sleeps in a small basket near my bed.
                            I love my pet very much and take care of it.'
                        />
                    </Grid>

                    <Grid item xs={12} sm={4} style={styles.item}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <TopCat
                                    img={catTwo}
                                    catName='Sunny'
                                    shortDescription='My morning sunshine'
                                    description='Sunny is a mongrel. He is all grey with 
                                    black stripes, he looks thin, but he like eating very much. 
                                    He have big, green eyes, which are shine in light. Everybody, who’s 
                                    looking in his eyes tell me that shiver went down his spine. It is true. 
                                    He’s favorite dish is Whiskas. He is very sociable to. 
                                    He always cringes to everybody, who meets – he isn’t fearful 
                                    to person, which he is meeting first time. '
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TopCat
                                    img={catFour}
                                    catName='Little Button'
                                    shortDescription='The living cuddle machine'
                                    description='Button has an actual mane. It was easy 
                                    to pick a name for him because he looks like a lion 
                                    and has a regal Big Cat persona. When I give him popcorn 
                                    (partly as a toy, partly as a snack) bits of it get stuck in 
                                    his mane and it cracks me up. He is a lot smaller than he looks 
                                    because his fur is so fluffy. I’m hoping that when he gets out of 
                                    kitten mode he’ll sit still more often so he can begin the cat 
                                    modeling career he’s destined for. '
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} style={styles.item}>
                        <TopCat
                            img={catThree}
                            catName='Whiskers'
                            shortDescription='Most curious of them all'
                            description='Whiskers demands the attention of anyone 
                            and everyone in the room. She will make little chirping 
                            sounds and jump into everyone’s lap. She follows you everywhere. 
                            Everywhere.'
                        />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default withStyles(styles)(TopCats);