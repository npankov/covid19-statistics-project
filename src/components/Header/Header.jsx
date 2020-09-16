import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles({
  rightToolbar: {
    marginLeft: 'auto',
  },
  title: {
    display: 'flex',
    fontSize: '1.3rem',
  },
});

export default function ElevateAppBar() {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography
              className={classes.title}
              component="h1"
              variant="h1"
            >
              Covid-19 Statistics
            </Typography>
            <IconButton
              className={classes.rightToolbar}
              href="https://github.com/npankov/covid19-statistic-project"
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
