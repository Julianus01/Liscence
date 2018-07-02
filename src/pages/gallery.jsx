import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import GalleryImage from './components/gallery/galleryImage';
import InputGalleryImage from './components/gallery/inputGalleryImage';
import GalleryHeading from './components/gallery/galleryHeading';
import Navbar from '../components/navbar/navbar';

const styles = {
    imagesContainer: {
        maxWidth: 1350,
        margin: 'auto',
        marginBottom: '8rem',
        paddingRight: '2rem',
        paddingLeft: '2rem',
    },
    item: {
        position: 'relative',
        width: 300,
        height: 300,
        display: 'inline-block',
    },
}

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [],
            testImage: null
        }

        this.db = firebase.database().ref('images/cats');
        this.storage = firebase.storage();
    }

    render() {

        const { classes } = this.props;

        return (
            <div style={styles.backgroundContainer}>
                <Navbar />

                <GalleryHeading />

                <Grid container style={styles.imagesContainer} justify='center'>

                    {this.state.images.map(image => {
                        return (
                            <Grid item className={classes.item} key={image.key}>
                                <GalleryImage
                                    id={image.key}
                                    {...image}
                                    deleteImage={this.deleteImage}
                                    editImage={this.editImage} />
                            </Grid>
                        )
                    })}

                    <Grid item className={classes.item}>
                        <InputGalleryImage uploadImage={this.uploadImage} />
                    </Grid>

                </Grid>
            </div>
        );
    }

    componentWillMount() {
        var images = this.state.images;

        this.db.on('child_added', snap => {
            images.push({
                key: snap.key,
                imgSrc: snap.val().imgSrc
            })

            this.setState({ images });
        });

        this.db.on('child_removed', snap => {
            for (var i = 0; i < images.length; i++) {
                if (images[i].key === snap.key) {
                    images.splice(i, 1);
                }
            }

            this.setState({ images });
        })
    }

    uploadImage = (image) => {
        // Create new user entry and ref storage
        var key = this.db.push().key;
        var storageRef = this.storage.ref('images/cats/' + key);

        var uploadTask = storageRef.put(image);
        uploadTask.on('state_changed', snap => {

        }, (err) => {

        }, () => {
            // Update new user entry with data
            var downloadUrl = uploadTask.snapshot.downloadURL;
            var newImage = this.db.child(key);
            newImage.set({
                imgSrc: downloadUrl
            })
        })
    }

    deleteImage = (key) => {
        this.db.child(key).remove();
        this.storage.ref('images/cats/').child(key).delete();
    }

    editImage = (key, imageFile) => {
        var storageRef = this.storage.ref('images/cats/' + key);

        storageRef.put(imageFile);
    }

}

export default withStyles(styles)(Gallery);