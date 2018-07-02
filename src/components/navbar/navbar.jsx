import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import MediaQuery from 'react-responsive';
import lightBlue from '@material-ui/core/colors/lightBlue'

const styles = {
  // AppBar
  rootPrimary: {
    flexGrow: 1,
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  rootSecondary: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButtonPrimary: {
    // marginLeft: -12,
    marginRight: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'rgba(0, 0, 0, 0.77)',
  },
  menuButtonSecondary: {
    marginRight: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  menuIcon: {
    fontSize: '1.7rem',
  },
  navLinkPrimary: {
    // margin: 'auto',
    height: '100%',
    textTransform: 'capitalize',
    // paddingLeft: '2rem',
    // paddingRight: '2rem',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: 'rgb(79, 195, 247)',
      backgroundColor: 'transparent',
      borderRadius: 'none'
    }
  },
  navLinkSecondary: {
    height: '100%',
    textTransform: 'capitalize',
    transition: 'color 0.2s ease-in-out',
    color: 'white',
    // '&:hover': {
    //   color: 'rgb(79, 195, 247)',
    //   backgroundColor: 'transparent',
    //   borderRadius: 'none'
    // },
  },
  toolbarPrimary: {
    height: '20vh',
  },
  appBarPrimary: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  appBarSecondary: {
    backgroundColor: lightBlue[300]
  },
}

class Navbar extends Component {

  render() {

    const { classes } = this.props

    return (
      <div className={this.props.isPrimary ? (classes.rootPrimary)
        : (classes.rootSecondary)}>
        <AppBar position="static" className={this.props.isPrimary
          ? (classes.appBarPrimary) : (classes.appBarSecondary)}>
          <Toolbar className={this.props.isPrimary ? (classes.toolbarPrimary) : (null)}>

            <Grid container>
              <Grid item xs={1}>
                <Grid container style={{ height: '100%' }}>
                  <MediaQuery maxWidth={600} >
                    <IconButton
                      className={this.props.isPrimary ? (classes.menuButtonPrimary)
                        : (classes.menuButtonSecondary)}
                      color="inherit"
                      aria-label="Menu">
                      <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                  </MediaQuery>
                </Grid>
              </Grid>

              <Grid item xs={this.props.isPrimary ? (10) : (11)}>
                <Grid container style={{ height: '100%' }} justify={this.props.isPrimary
                  ? ('center') : ('flex-end')}>
                  <Grid item>
                    {this.props.isPrimary ? (
                      null
                    ) : (
                        <Button className={this.props.isPrimary ? (classes.navLinkPrimary)
                          : (classes.navLinkSecondary)} href='/'>
                          Home
                        </Button>
                      )}

                    <MediaQuery minWidth={this.props.isPrimary ? (600) : (0)}>
                      {/* <Button className={classes.navLink}>
                          About
                        </Button> */}
                      <Button className={this.props.isPrimary ? (classes.navLinkPrimary)
                        : (classes.navLinkSecondary)} href='/gallery'>
                        Gallery
                      </Button>
                    </MediaQuery>

                    {this.props.isPrimary ? (
                      <Button className={this.props.isPrimary ? (classes.navLinkPrimary)
                        : (classes.navLinkSecondary)} style={{ fontSize: '2rem' }}>
                        Silver
                      </Button>
                    ) : (null)}

                    <MediaQuery minWidth={this.props.isPrimary ? (600) : (0)}>
                      <Button className={this.props.isPrimary ? (classes.navLinkPrimary)
                        : (classes.navLinkSecondary)} href='/blog'>
                        Blog
                      </Button>
                      {/* <Button className={classes.navLink}>
                          Contact
                        </Button> */}
                    </MediaQuery>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);