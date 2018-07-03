import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const styles = theme =>  ({
    deleteButton: {
        // marginTop: '4rem',
        margin: '0',
        width: '100%',
        height: '100%',
        // backgroundColor: '#f7834f',
        // color: 'white',
        fontSize: '1.2rem',
        padding: '0.6rem 1.6rem 0.6rem 1.6rem',
        borderRadius: '0',
        // '&:hover': {
        //     backgroundColor: '#f50057'
        // }
    },
    cancelButton: {
        // marginTop: '4rem',
        margin: '0',
        width: '100%',
        height: '100%',
        // backgroundColor: grey[200],
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
        minWidth: theme.spacing.unit * 50,
        maxWidth: theme.spacing.unit * 100,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        width: '90%'
    },
})

const DeleteModal = (props) => {

    const { classes } = props;

    return (

        <Modal
            open={props.open}
            onClose={props.onClose}
        >

            <Grid container style={getModalStyle()} className={classes.modal}>
                <Grid item xs={12} className={classes.titleItem}>
                    <Typography variant='headline' className={classes.title}>
                        {props.message}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Button
                            className={classes.deleteButton}
                            color='secondary'
                            variant='raised'
                            onClick={() => {
                                props.delete()
                                props.onClose()
                            }}>
                                Delete
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonsItem}>
                            <Button
                            className={classes.cancelButton}
                            variant='raised'
                            onClick={() => props.onClose()}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Modal>
    )
}

export default withStyles(styles)(DeleteModal);