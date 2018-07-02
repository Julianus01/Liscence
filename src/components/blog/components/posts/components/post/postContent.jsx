import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Flip from 'react-reveal'

const PostContent = (props) =>
    <Grid container spacing={24}>

        <Grid item xs={12} >
            <Flip bottom>
                <Typography variant='display1'>
                    {props.title}
                </Typography>
            </Flip>
        </Grid>
        <Grid item xs={12} >
            <Flip bottom>
                <Typography variant='subheading' style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                    {props.content}
                </Typography>
            </Flip>
        </Grid>
    </Grid>

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default PostContent;