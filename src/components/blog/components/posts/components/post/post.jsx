import React, { Component } from 'react';
import './post.css';
import Modal from '@material-ui/core/Modal';
import EditPostForm from './components/editPostForm/editPostForm.jsx';
import EditSnackbar from './editSnackbar.jsx'
import DeleteModal from '../../../../../../pages/components/reusable/deleteModal';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import no_image from '../../../../../../images/no_image.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'

import grey from '@material-ui/core/colors/grey'
import PostContent from './postContent';
import EditPostFormModal from './components/editPostForm/editPostFormModal'

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    Paper: {
        heigth: '100%',
        width: '100%',
        margin: '2rem'
    },
});

const customStyle = {
    mainContainer: {
        // margin: '2rem'
    },
    optionsBar: {
        backgroundColor: grey[100],
        // backgroundColor: lightBlue[300],
        textAlign: 'right',
        paddingRight: '2rem',
        paddingLeft: '2rem'
    },
}

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props,

            editPostModalShow: false,
            editSnackbar: false,
            openEditPostModal: false,
            openDeleteModal: false,
        }

    }

    render() {

        const { classes } = this.props;

        return (
            <div style={customStyle.mainContainer}>
                <Grid container>
                    <Paper className={classes.Paper}>
                        <Grid container>
                            <Grid item xs={12} style={customStyle.optionsBar} >
                                <Button
                                    variant="fab"
                                    aria-label="edit"
                                    className={classes.button}
                                    onClick={this.handleOpenEditModal}>
                                    <Icon>edit_icon</Icon>
                                </Button>
                                <Button
                                    variant="fab"
                                    color='secondary'
                                    aria-label="delete"
                                    className={classes.button}
                                    onClick={this.handleOpenDeleteModal}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>

                            {this.state.imgSrc ? (
                                <Grid item xs={12} lg={4}>
                                    <img
                                        id='postImg'
                                        src={this.state.imgSrc}
                                        className='postImg'
                                        alt={no_image} />
                                </Grid>
                            ) : null}

                            {this.state.imgSrc ? (
                                <Grid item xs={12} lg={8} className='post-content'>
                                    <PostContent title={this.state.title} content={this.state.text} />
                                </Grid>
                            ) : (
                                    <Grid item xs={12} className='post-content'>
                                        <PostContent title={this.state.title} content={this.state.text} />
                                    </Grid>
                                )}

                        </Grid>
                    </Paper>
                </Grid>

                <EditSnackbar vertical='top' horizontal='center'
                    open={this.state.editSnackbar} close={this.closeSnack} />

                {/* EDIT MODAL */}
                <EditPostFormModal
                    open={this.state.openEditPostModal}
                    onClose={this.handleCloseEditModal}
                    imgSrc={this.state.imgSrc}
                    title={this.state.title}
                    text={this.state.text}
                    updatePost={this.updatePost}
                    id={this.state.id} />

                {/* DELETE MODAL */}
                <DeleteModal
                    message='Are you sure you want to delete this post?'
                    onClose={this.handleCloseDeleteModal}
                    delete={this.deletePost}
                    open={this.state.openDeleteModal} />
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.title !== this.props.title ||
            nextProps.text !== this.props.text ||
            nextProps.imgSrc !== this.props.imgSrc
        ) {
            this.setState({ ...nextProps })
        }
    }

    showSnack = () => {
        this.setState({ editSnackbar: true }, () => {
            setTimeout(() => {
                this.setState({ editSnackbar: false })
            }, 1500)
        });
    }

    closeSnack = () => {
        this.setState({ editSnackbar: false })
    }


    // EDIT MODAL HANDLE
    handleOpenEditModal = () => {
        this.setState({
            openEditPostModal: true
        })
    }

    handleCloseEditModal = () => {
        this.setState({
            openEditPostModal: false
        })
    }

    // DELETE MODAL HANDLE
    handleOpenDeleteModal = () => {
        this.setState({ openDeleteModal: true });
    };

    handleCloseDeleteModal = () => {
        this.setState({ openDeleteModal: false });
    };

    updatePost = (post) => {
        this.props.updatePost(post);

        this.showSnack();
        this.handleCloseEditModal();
    }

    deletePost = () => {
        this.props.deletePost(this.state);
    }

}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);