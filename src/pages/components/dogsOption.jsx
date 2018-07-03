import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import dogHeroOptionImage from '../../images/dogHeroOption.png'
import { NavLink } from 'react-router-dom';

const DogsOption = () =>
    <Paper>
        <NavLink to="#">
            <Grid container justify='flex-start' spacing={40}>
                <Grid item xs={8}>
                    <img src={dogHeroOptionImage} alt="noError" />
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'left' }}>
                    <Typography variant='subheading'>Dogs</Typography>
                </Grid>
            </Grid>
        </NavLink>
    </Paper>

export default DogsOption;