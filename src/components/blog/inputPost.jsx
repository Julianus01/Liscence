import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import PostFormModal from './components/postForm/postFormModal';
import firebase from 'firebase';

const styles = theme => ({
    fileInputContainer: {
        position: 'relative',
        // border: '4px solid grey',
        // lineHeight: 30,
        textAlign: 'center',
        backgroundColor: 'white',
        maxWidth: 1200,
        margin: 'auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        height: '30vh',
        '&:hover #inputGalleryImageContainer': {
            backgroundColor: lightBlue[200]
        },
    },
    fileInput: {
        opacity: 0.0,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        // margin: theme.spacing.unit,
        display: 'grid',
        // gridTemplateRows: '1fr 4fr 1fr',
        // border: `4px solid ${lightBlue[300]}`
        backgroundColor: grey[300],
        transition: 'all .3s',
    },
    icon: {
        // margin: theme.spacing.unit * 2,
        fontSize: 40,
        // color: lightBlue[300],
        color: 'white',
        margin: 'auto'
    },
})

class InputPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openPostFormModal: false
        }

        this.db = firebase.database().ref('blog/posts');
        this.storage = firebase.storage();
    }
    render() {

        const { classes } = this.props;

        return (
            <Grid container className={classes.fileInputContainer} justify='center' >
                <Grid container className={classes.container} id='inputGalleryImageContainer' >
                    <div style={{ display: 'grid' }}>
                        <Icon className={classes.icon}>
                            add
                        </Icon>
                    </div>
                </Grid>

                <div className={classes.fileInput} onClick={this.handleOpenPostFormModal} />

                <PostFormModal
                    open={this.state.openPostFormModal}
                    onClose={this.handleClosePostFormModal}
                    addPost={this.addPost} />
            </Grid>
        )
    }

    // POST FORM MODAL HANDLE
    handleOpenPostFormModal = () => {
        this.setState({ openPostFormModal: true })
    }

    handleClosePostFormModal = () => {
        this.setState({ openPostFormModal: false })
    }

    addPost = (post) => {
        var key = this.db.push().key;
        var storageRef = this.storage.ref('blog/posts/' + key);

        if (post.imgFile != null) {
            var uploadTask = storageRef.put(post.imgFile);
            uploadTask.on('state_changed', snap => {

            }, (err) => {

            }, () => {
                var downloadUrl = uploadTask.snapshot.downloadURL;
                var newPost = this.db.child(key);
                newPost.set({
                    title: post.title,
                    imgSrc: downloadUrl,
                    text: post.text
                })
            });
        } else {
            let postKey = this.db.push().key;
            this.db.child(postKey).set({
                title: post.title,
                text: post.text,
                imgSrc: ''
            })
        }

        this.handleClosePostFormModal();
    }
}

export default withStyles(styles)(InputPost);