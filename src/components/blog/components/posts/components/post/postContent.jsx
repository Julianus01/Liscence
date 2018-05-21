import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const PostContent = (props) =>
    <Grid container spacing={24}>
        <Grid item xs={12} >
            <Typography variant='display2'>
                {props.title}
            </Typography>
        </Grid>
        <Grid item xs={12} >
            <Typography variant='subheading'>
                {props.content}
            </Typography>
        </Grid>
    </Grid>

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default PostContent;