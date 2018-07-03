import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    fileInputContainer: {
        position: 'relative',
        // border: '4px solid grey',
        // lineHeight: 30,
        width: 300,
        height: 300,
        textAlign: 'center',
        backgroundColor: 'white',
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
        transition: 'all .3s'
    },
    icon: {
        // margin: theme.spacing.unit * 2,
        fontSize: 40,
        // color: lightBlue[300],
        color: 'white',
        margin: 'auto'
    },
})

class InputGalleryImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null
        }

    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container className={classes.fileInputContainer} >
                <Grid container className={classes.container} id='inputGalleryImageContainer' >
                    <div style={{ display: 'grid' }}>
                        <Icon className={classes.icon}>
                            add
                        </Icon>
                    </div>
                </Grid>

                <input type="file" className={classes.fileInput} onChange={this.uploadImage} />
            </Grid>
        )
    }

    handleImageChange = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }

    uploadImage = (event) => {
        this.props.uploadImage(event.target.files[0]);
    }

}

export default withStyles(styles)(InputGalleryImage);