import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InputImage from './inputImage';
import lightBlue from '@material-ui/core/colors/lightBlue';
import InputContent from './inputContent'

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const styles = theme => ({
    addButton: {
        // marginTop: '4rem',
        margin: '0',
        width: '100%',
        height: '100%',
        backgroundColor: lightBlue[300],
        color: 'white',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        borderRadius: '0',
        '&:hover': {
            backgroundColor: lightBlue[400]
        }
    },
    cancelButton: {
        // marginTop: '4rem',
        margin: '0',
        width: '100%',
        height: '100%',
        backgroundColor: grey[200],
        color: 'black',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        borderRadius: '0',
    },
    titleItem: {
        textAlign: 'center'
    },
    buttonsItem: {
        height: '4rem'
    },
    title: {
        margin: '4rem 2rem 4rem 2rem'
    },
    modal: {
        position: 'absolute',
        maxWidth: theme.spacing.unit * 55,
        // maxWidth: theme.spacing.unit * 100,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        // width: '90%'
    },
    inputsContainer: {
        padding: '2rem 1rem 2rem 1rem',
    }
})

class PostFormModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imgFile: null,
            title: null,
            text: null
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <Modal
                open={this.props.open}
                onClose={this.props.onClose}
            >

                <Grid container style={getModalStyle()} className={classes.modal}>
                    <Grid item xs={12} className={classes.titleItem}>
                        <InputImage onChange={this.handleImageChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className={classes.inputsContainer}>
                            <InputContent
                                onTitleChange={this.handleTitleChange}
                                onTextChange={this.handleTextChange} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Button
                                    variant='raised'
                                    className={classes.addButton}
                                    onClick={this.addPost}>
                                    Add Post
                            </Button>
                            </Grid>
                            <Grid item xs={6} variant='raised' className={classes.buttonsItem}>
                                <Button
                                    className={classes.cancelButton}
                                    onClick={() => this.props.onClose()}>
                                    Cancel
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Modal>
        )
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleImageChange = (imgFile) => {
        this.setState({ imgFile });
    }

    addPost = () => {
        this.props.addPost(this.state)
        this.setState({ 
            imgFile: null,
            title: null,
            text: null
         })
        this.props.onClose()
    }
}

export default withStyles(styles)(PostFormModal);