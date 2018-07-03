import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import DeleteModal from '../reusable/deleteModal';
import GallerySnackbar from './gallerySnackbar';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const styles = theme => ({
    mainContainer: {
        display: 'relative',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'all .3s',
        // textAlign: 'right',
        '&:hover': {
            // backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        '&:hover > div': {
            opacity: '1',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    optionsBarContainer: {
        position: 'absolute',
        width: '100%',
        opacity: '0',
        top: 0,
        left: 0,
        right: 0,
        transition: 'all .3s',
    },
    button: {
        // margin: theme.spacing.unit,
        color: 'white',
        position: 'relative'
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
    text: {
        color: 'white',
        marginLeft: theme.spacing.unit * 2
    },
    optionsBarItem: {
        margin: 'auto',
        textAlign: 'left'
    },
    fileInput: {
        opacity: '0',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        cursor: 'pointer'
    },
})

class ImageHoverOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDeleteModal: false,
            editSnackbar: false,
            deleteSnackbar: false
        }
    }

    render() {

        const { classes } = this.props

        return (
            <div id="imageHoverOptions" className={classes.mainContainer}>
                <Grid container id="imageHoverOptionsBar" className={classes.optionsBarContainer}>
                    <Grid item xs={8} className={classes.optionsBarItem}>
                        <Typography variant='subheading' className={classes.text}>
                            Options
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton className={classes.button} aria-label="Delete">
                            <EditIcon />
                            <input type='file'
                                className={classes.fileInput}
                                onChange={this.editImage}
                                name='editSnackbar' />
                        </IconButton>
                        <IconButton
                            className={classes.button}
                            aria-label="Delete"
                            onClick={this.handleOpenDeleteModal}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>

               <DeleteModal
                    message='Are you sure you want to delete this picture?'
                    onClose={this.handleCloseDeleteModal}
                    delete={this.deleteImage}
                    open={this.state.openDeleteModal} />

                {/* Add Snackbar */}
                <GallerySnackbar vertical='top' horizontal='center'
                    open={this.state.editSnackbar} close={this.closeEditSnack}
                    message='Changed succesfully' />

                {/* Edit Snackbar */}
                <GallerySnackbar vertical='top' horizontal='center'
                    open={this.state.deleteSnackbar} close={this.closeDeleteSnack}
                    message='Deleted succesfully' />
            </div>
        )
    }

    // DELETE MODAL HANDLE
    handleOpenDeleteModal = () => {
        this.setState({ openDeleteModal: true });
    };

    handleCloseDeleteModal = () => {
        this.setState({ openDeleteModal: false });
    };

    editImage = (event) => {
        this.props.editImage(event.target.files[0])
        this.showEditSnack();
    }

    showEditSnack = (event) => {
        this.setState({ editSnackbar: true }, () => {
            setTimeout(() => {
                this.setState({ editSnackbar: false })
            }, 2000)
        });
    }

    closeEditSnack = () => {
        this.setState({ deleteSnackbar: false })
    }

    deleteImage = async () => {
        await this.props.deleteImage();
        this.showDeleteSnack();
    }

    showDeleteSnack = (event) => {
        this.setState({ deleteSnackbar: true }, () => {
            setTimeout(() => {
                this.setState({ deleteSnackbar: false })
            }, 2000)
        });
    }

    closeDeleteSnack = () => {
        this.setState({ deleteSnackbar: false })
    }

}

export default withStyles(styles)(ImageHoverOptions);