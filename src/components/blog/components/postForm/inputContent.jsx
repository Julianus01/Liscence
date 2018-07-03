import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ligthBlue from '@material-ui/core/colors/lightBlue'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        borderColor: ligthBlue[300],
    },
    menu: {
        width: 200,
    },
});

const InputContent = (props) => {

    const { classes } = props;

    return (
        <Grid container>
            <Grid item xs={12}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="titleTextField"
                        label="Title"
                        placeholder="Title"
                        className={classes.textField}
                        margin="normal"
                        onChange={props.onTitleChange}
                    />
                    <TextField
                        id="multiline-static"
                        label="Text"
                        multiline
                        rows="8"
                        className={classes.textField}
                        margin="normal"
                        onChange={props.onTextChange}
                    />
                </form>
            </Grid>
        </Grid>
    )
}

InputContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputContent);