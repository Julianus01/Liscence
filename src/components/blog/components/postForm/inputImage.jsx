import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    fileInputContainer: {
        position: 'relative',
        // border: '4px solid grey',
        // lineHeight: 30,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        '&:hover #inputGalleryImageContainer': {
            backgroundColor: lightBlue[200]
        },
        '&:hover #addImageText': {
            opacity: 1,
        },
    },
    fileInput: {
        opacity: 0.0,
        position: 'absolute',
        width: '100%',
        height: '100%',
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
        background: `no-repeat center /cover`,
        transition: 'all .3s'
    },
    icon: {
        // margin: theme.spacing.unit * 2,
        fontSize: 40,
        // color: lightBlue[300],
        color: 'white',
        // marginLeft: 'auto',
        // marginRight: 'auto'
        margin: 'auto',
        marginBottom: 0,
    },
    addText: {
        opacity: 0,
        color: 'white',
        transition: 'all .3s',
        pointerEvents: 'none',
        margin: 'auto',
    },
    imagePreview: {
        position: 'absolute',
        background: `no-repeat center /cover`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
})

class InputImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected ? (props.selected) : (false),
            imgSrc: props.imgSrc,
            imgFile: null
        }

    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container className={classes.fileInputContainer} >
                <Grid container className={classes.container} id='inputGalleryImageContainer'
                    style={{
                        backgroundImage: `${this.state.selected
                            ? (`url(${this.state.imgSrc})`) : (null)}`,
                        height: this.state.selected ? ('20rem') : ('10rem')
                    }} >

                    <div style={{ display: 'grid' }}>
                        {!this.state.selected ? (
                            <Icon className={classes.icon}>
                                add
                            </Icon>
                        ) : (null)}
                        <Typography
                            variant='subheading'
                            id='addImageText'
                            className={classes.addText}>
                            Choose an image
                        </Typography>
                    </div>
                    
                </Grid>
                <input type="file" className={classes.fileInput} onChange={this.handleImageChange} />
            </Grid>
        )
    }

    handleImageChange = (event) => {
        const imgFile = event.target.files[0];

        this.setState({
            imgSrc: URL.createObjectURL(imgFile),
            imgFile: imgFile,
            selected: true
        });

        this.props.onChange(imgFile);
    }

    uploadImage = (event) => {
        this.props.uploadImage(event.target.files[0]);
    }

}

export default withStyles(styles)(InputImage);