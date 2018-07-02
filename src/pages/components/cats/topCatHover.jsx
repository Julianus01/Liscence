import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Modal from '@material-ui/core/Modal';
import TopCatModalContent from './topCatModalContent.jsx';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const styles = theme => ({
    infoContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        opacity: '0',
        transition: 'all 0.3s',
        pointerEvents: 'none',
        color: 'white',
    },
    button: {
        borderRadius: '0',
        pointerEvents: 'auto',
        color: 'white',
        backgroundColor: 'transparent',
        border: '1px solid white',
        '&:hover': {
            // backgroundColor: 'rgba(255, 255, 255, 1)',
            // color: 'black'
            backgroundColor: lightBlue[300],
            border: `1px solid ${lightBlue[300]}`,
            color: 'white'
        }
    },
    catName: {
        color: 'white',
    },
    description: {
        color: 'white',
        marginBottom: '2rem'
    },
    modal: {
        position: 'absolute',
        minWidth: theme.spacing.unit * 50,
        maxWidth: theme.spacing.unit * 100,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing.unit * 4,
        outline: 'none'
    },
})

class TopCatHover extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.infoContainer} justify='center'>
                <Grid container style={{ margin: 'auto' }} justify='center'>
                    <Grid item>
                        <Typography variant='display1' className={classes.catName}>
                            {this.props.catName}
                        </Typography>
                        <Typography variant='subheading' className={classes.description}>
                            {this.props.shortDescription}
                        </Typography>
                        <Button variant='raised' className={classes.button} onClick={this.handleOpen}>
                            More Info
                        </Button>
                    </Grid>
                </Grid>

                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div style={getModalStyle()} className={classes.modal}>
                        <TopCatModalContent
                            img={this.props.img}
                            catName={this.props.catName}
                            description={this.props.description}
                            onClose={this.handleClose} />
                    </div>
                </Modal>
            </Grid>
        )
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

}

export default withStyles(styles)(TopCatHover);