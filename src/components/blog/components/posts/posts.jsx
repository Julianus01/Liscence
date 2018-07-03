import React, { Component } from 'react';
import firebase from 'firebase';
import Post from './components/post/post.jsx';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { key } from "firebase-key";

const styles = theme => ({
    root: {
        flexRow: 1,
    },
})

const customStyles = {
    postsContainer: {
        // display: 'grid',
        // gridRowGap: '4rem',
        margin: '2rem 0 10rem 0'
    },
    maxWidth: {
        maxWidth: 1200
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
            <Grid container>
                <Grid container justify='center' style={customStyles.postsContainer}>
                    {this.state.posts.map(post => {
                        return (
                            <Grid item key={post.id}
                                xs={12} sm={6} md={6} lg={12}
                                style={customStyles.maxWidth}>
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

        if (post.imgFile !== null) {
            var storageRef = this.storage.ref('blog/posts/' + post.id)

            if (post.imgSrc !== '') {
                storageRef.put(post.imgFile)
            } else {
                var uploadTask = storageRef.put(post.imgFile);
                uploadTask.on('state_changed', snap => {

                }, (err) => {

                }, () => {
                    var downloadUrl = uploadTask.snapshot.downloadURL;
                    var postToEdit = this.db.child(post.id);
                    postToEdit.update({
                        imgSrc: downloadUrl,
                    })
                });
            }
        }
    }
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts);