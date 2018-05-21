import React, { Component } from 'react';
import './post.css';
import Modal from 'react-responsive-modal';
import EditPostForm from './components/editPostForm/editPostForm.jsx';
import EditSnackbar from './editSnackbar.jsx'

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

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    Paper: {
        heigth: '100%',
        width: '100%'
    },
});

const customStyle = {
    optionsBar: {
        backgroundColor: grey[100],
        textAlign: 'right',
        paddingRight: '2rem',
        paddingLeft: '2rem'
    }
}

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props,

            editPostModalShow: false,
            editSnackbar: false
        }

    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Grid container>
                    <Paper className={classes.Paper}>
                        <Grid container>
                            <Grid item xs={12} style={customStyle.optionsBar} >
                                <Button
                                    variant="fab"
                                    color="secondary"
                                    aria-label="edit"
                                    className={classes.button}
                                    onClick={this.onOpenModal}>
                                    <Icon>edit_icon</Icon>
                                </Button>
                                <Button
                                    variant="fab"
                                    aria-label="delete"
                                    className={classes.button}
                                    onClick={this.deletePost}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={12} lg={4} >
                                {this.state.imgSrc ? (<img src={this.state.imgSrc}
                                    className='postImg' alt={no_image}></img>) : null}
                            </Grid>

                            <Grid item xs={12} lg={8} className='post-content'>
                                <PostContent title={this.state.title} content={this.state.text} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <EditSnackbar vertical='top' horizontal='center'
                    open={this.state.editSnackbar} close={this.closeSnack} />

                <Modal
                    open={this.state.editPostModalShow}
                    onClose={this.onCloseModal}
                    center
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>

                    <EditPostForm id={this.state.id}
                        title={this.state.title}
                        text={this.state.text}
                        imgSrc={this.state.imgSrc}
                        updatePost={this.updatePost} />

                </Modal>
            </div>
        )
    }

    componentWillReceiveProps(props) {
        if (
            props.title !== this.props.title ||
            props.text !== this.props.text ||
            props.imgSrc !== this.props.imgSrc
        ) {
            this.setState({ ...props })
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

    onOpenModal = () => {
        this.setState({
            editPostModalShow: true
        })
    }

    onCloseModal = () => {
        this.setState({
            editPostModalShow: false
        })
    }

    updatePost = (post) => {
        this.props.updatePost(post);
        this.showSnack();

        this.onCloseModal();
    }

    deletePost = () => {
        this.props.deletePost(this.state);
    }

}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);