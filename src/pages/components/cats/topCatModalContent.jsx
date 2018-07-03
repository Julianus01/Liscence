import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    mainContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        height: '100%',
        maxWidth: 1000
    },
    textContainer: {
        padding: '0 2rem 2rem 2rem',
    },
    imgContainer: {
        backgroundColor: grey[50],
        textAlign: 'center'
    },
    headingContainer: {
        borderRight: `1px solid ${grey[100]}`,
        padding: '2rem'
    },
    img: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    iconButton: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    hr: {
        border: `2px solid ${lightBlue[300]}`,
        width: 40,
        marginLeft: 0
    },
})

const TopCatModalContent = (props) => {

    const { classes } = props;

    return (
        <div className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                <img src={props.img} alt="noWarning" className={classes.img} />
            </div>

            <div>
                <div style={{ textAlign: 'right' }}>
                    <IconButton className={classes.iconButton} aria-label="Close" onClick={() => props.onClose()}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.textContainer}>
                    <hr className={classes.hr} />
                    <Typography variant='headline' gutterBottom style={{
                        marginBottom: '2rem',
                    }}>
                        {props.catName}
                    </Typography>
                    <Typography variant='body1' style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                        {props.description}
                    </Typography>
                </div>
            </div>
        </div >
    )
}

export default withStyles(styles)(TopCatModalContent);