import React, { Component } from 'react';
import './posts.css';
import firebase from 'firebase';
import Post from './components/post/post.jsx';
import PropTypes from 'prop-types'

// Styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
    root: {
        flexRow: 1,
    },
})

const customStyles = {
    GridContainer: {
        padding: '2rem'
    },
    maxWidth: {
        maxWidth: '1200px'
    }
}

class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }

        this.db = firebase.database().ref('blog/posts');
        this.storage = firebase.storage();
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item style={customStyles.GridContainer}>
                <Grid container justify='center' spacing={40}>
                    {this.state.posts.map(post => {
                        return (
                            <Grid key={post.id} item
                                xs={12} sm={6} lg={12}
                                style={customStyles.maxWidth} zeroMinWidth>
                                <Post key={post.id} id={post.id}
                                    title={post.title} imgSrc={post.imgSrc}
                                    text={post.text}
                                    updatePost={this.updatePost}
                                    deletePost={this.deletePost} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        )
    }

    componentWillMount() {
        this.db.on('child_added', snap => {
            let posts = this.state.posts;

            posts.unshift({
                id: snap.key,
                title: snap.val().title,
                imgSrc: snap.val().imgSrc,
                text: snap.val().text
            })

            this.setState({ posts })
        })

        this.db.on('child_changed', snap => {
            let posts = this.state.posts;

            var index = this.state.posts.findIndex(post => post.id === snap.key);

            posts[index] = snap.val();
            posts[index].id = snap.key;

            this.setState({
                posts: posts
            })
        })

        this.db.on('child_removed', snap => {
            let posts = this.state.posts.filter(post => {
                return post.id !== snap.key
            });

            this.setState({ posts });
        })
    }

    addPost = (post) => {
        var key = this.db.push().key;
        var storageRef = this.storage.ref('blog/posts/' + key);

        if (post.image != null) {
            var uploadTask = storageRef.put(post.image);
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

        this.setState({ addPostModalShow: false })
    }

    deletePost = (post) => {
        this.db.child(post.id).remove();

        if (post.imgSrc) {
            this.storage.ref('blog/posts/').child(post.id).delete();
        }
    }

    updatePost = (post) => {
        this.db.child(post.id).update({
            title: post.title,
            text: post.text,
            imgSrc: post.imgSrc
        });
    }
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts);