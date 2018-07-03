import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import catHeroOptionImage from '../../images/catHeroOption.png';
import { NavLink } from 'react-router-dom';

const styles = {
    Paper: {
        '&:hover': {
            background: 'green',
            textDecoration: 'none',
            color: 'green'
        }
    }
}

const CatsOption = () =>
    <Paper style={styles.Paper}>
        <NavLink to="/cats">
            <Grid container justify='flex-end' spacing={40}>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <Typography variant='subheading' style={styles.Paper}>Cats</Typography>
                </Grid>
                <Grid item xs={8}>
                    <img src={catHeroOptionImage} alt="noError"/>
                </Grid>
            </Grid>
        </NavLink>
    </Paper>


export default CatsOption;